/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import Link from './components/link'
import Claps from './components/claps'

export default (props) => (
  <Styled.root>
    <header sx={{ textAlign: 'center' }}>
      <Link to="/" tabIndex="-1" sx={{ textDecoration: 'none' }}>
        <h1>Fake Blog</h1>
      </Link>
    </header>
    <main
      sx={{
        m: 4,
        mx: 'auto',
        maxWidth: 'container',
        display: 'grid',
        gridTemplateColumns: '90px 1fr',
      }}
    >
      <div sx={{ height: 'auto', position: 'relative' }}>
        <Claps id={props._frontmatter._id} />
      </div>
      <article>{props.children}</article>
    </main>
  </Styled.root>
)
