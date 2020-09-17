import { NowRequest, NowResponse } from '@vercel/node'
import { Client, query as q, ExprArg } from 'faunadb'

const client = new Client({ secret: process.env.FAUNA_SECRET, keepAlive: false })

const getFn = (type: string) => {
  switch (type) {
    case 'like':
      return 'incrementLike'
    case 'dislike':
      return 'incrementDislike'
    case 'cheer':
      return 'incrementCheer'
    case 'clap':
      return 'incrementClap'
    default:
      throw 'Non existent type'
  }
}

export default async (req: NowRequest, res: NowResponse) => {
  const { id, type } = req.query
  const fn = getFn(type as string)
  const result = await client.query<{ data: any }>(q.Call(q.Function(fn), id))
  res.status(200).send(result.data)
}
