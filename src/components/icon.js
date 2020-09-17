/** @jsx jsx */
import { jsx } from 'theme-ui'

import { IoIosHeart, IoMdHeartDislike } from 'react-icons/io'
import { FaGlassCheers, FaGrinStars } from 'react-icons/fa'

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'like':
      return <IoIosHeart {...props} size={32} />
    case 'dislike':
      return <IoMdHeartDislike {...props} size={32} />
    case 'cheer':
      return <FaGlassCheers {...props} size={32} />
    case 'clap':
      return <FaGrinStars {...props} size={32} />
    default:
      return null
  }
}

export default Icon
