/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'

import Icon from './icon'

const SingleClap = ({ name, color, counter, onClick }) => (
  <div
    role="button"
    tabIndex="-2"
    onKeyUp={(e) => {
      if (e.key === 13) onClick()
    }}
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      display: 'grid',
      gridGap: 2,
      gridTemplateColumns: 'auto 1fr',
      justifyContent: 'center',
      alignItems: 'center',
      color,
    }}
  >
    <Icon name={name} />
    <span>{counter}</span>
  </div>
)

const useCounter = (id) => {
  const [counters, setCounters] = useState([0, 0, 0, 0])
  useEffect(() => {
    if (id)
      fetch(`/api/get-counters?id=${id}`)
        .then((res) => res.json())
        .then((json) => setCounters(json))
  }, [id])
  return [counters, setCounters]
}

const Claps = ({ id }) => {
  const [[likes, dislikes, cheers, claps], setCounters] = useCounter(id)

  const increment = (type) => () => {
    fetch(`/api/increment?id=${id}&type=${type}`)
      .then((res) => res.json())
      .then(({ like, dislike, cheer, clap }) => setCounters([like, dislike, cheer, clap]))
  }
  return (
    <div sx={{ display: 'grid', gridGap: 1, position: 'sticky', top: 0, left: 0, pt: 3 }}>
      <SingleClap name="like" color="primary" counter={likes} onClick={increment('like')} />
      <SingleClap name="dislike" color="gray" counter={dislikes} onClick={increment('dislike')} />
      <SingleClap name="cheer" color="secondary" counter={cheers} onClick={increment('cheer')} />
      <SingleClap name="clap" color="highlight" counter={claps} onClick={increment('clap')} />
    </div>
  )
}

export default Claps
