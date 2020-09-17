/** @jsx jsx */
import { jsx, Styled, Image, AspectRatio } from 'theme-ui'

import Link from '../components/link'

export default () => {
  return (
    <Styled.root>
      <header sx={{ textAlign: 'center' }}>
        <h1>Fake Blog</h1>
        <h3>Articles list</h3>
      </header>
      <main sx={{ m: 4, mx: 'auto', maxWidth: 'container', display: 'grid', gridGap: 4, gridTemplateColumns: ['1fr 1fr 1fr'] }}>
        <Link to="/kylo-ren" sx={{ textDecoration: 'none' }}>
          <AspectRatio ratio={16 / 9}>
            <Image
              sx={{ objectFit: 'cover' }}
              alt="kylo"
              src="https://i.pinimg.com/originals/e4/9a/5d/e49a5d51bf6c8a458d47051a7ab4c8cf.jpg"
            />
          </AspectRatio>
          <h5>Kylo Ren</h5>
        </Link>
        <Link to="/luke-skywalker" sx={{ textDecoration: 'none' }}>
          <AspectRatio ratio={16 / 9}>
            <Image
              sx={{ objectFit: 'cover' }}
              alt="Luke"
              src="https://images.squarespace-cdn.com/content/51b3dc8ee4b051b96ceb10de/1577721780710-ZRZNF95EC3L2DJBHTAE1/lucasfilm-is-reportedly-looking-to-cast-a-young-luke-skywalker-in-its-obi-wan-kenobi-series-social.jpg?format=1500w&content-type=image%2Fjpeg"
            />
          </AspectRatio>
          <h5>Luke Skywalker</h5>
        </Link>
        <Link to="/princess-leia-organa" sx={{ textDecoration: 'none' }}>
          <AspectRatio ratio={16 / 9}>
            <Image
              sx={{ objectFit: 'cover' }}
              alt="Leia"
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/15/16/star-wars-princess-leia.jpg"
            />
          </AspectRatio>
          <h5>Princess Leia</h5>
        </Link>
      </main>
    </Styled.root>
  )
}
