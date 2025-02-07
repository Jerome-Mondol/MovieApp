import React, { useState } from 'react'

export const Props = (props) => {

    const [hasLiked, setHasLiked] = useState(false)

  return (
    <div className='card'>
        <h1 className='title' >{props.name}</h1>
        <h1 className='ratings' >{props.age}</h1>
        <button onClick={() => setHasLiked(!hasLiked)} className='liked'>{hasLiked ? "🧡" : "🤍"}</button>
    </div>
  )
}
