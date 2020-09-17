import { NowRequest, NowResponse } from '@vercel/node'
import { Client, query as q } from 'faunadb'

const client = new Client({ secret: process.env.FAUNA_SECRET, keepAlive: false })

export default async (req: NowRequest, res: NowResponse) => {
  const id = req.query.id
  try {
    const result = await client.query<{ data: { postid: string } & { [key: string]: number } }>(q.Get(q.Match(q.Index('by-post-id'), id)))
    res.status(200).send([result.data.like, result.data.dislike, result.data.cheer, result.data.clap])
  } catch (e) {
    if (e.requestResult.statusCode === 404) {
      const r = await client.query<{ data: { postid: string } & { [key: string]: number } }>(
        q.Create(q.Collection('claps'), {
          data: { postid: id, like: 0, dislike: 0, cheer: 0, clap: 0 },
        }),
      )
      res.status(200).send([r.data.like, r.data.dislike, r.data.cheer, r.data.clap])
    } else res.status(500).send('something went wrong')
  }
}
