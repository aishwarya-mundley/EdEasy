import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import './Post.css'

const Post = forwardRef(({ displayName, text, image, avatar }, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className='post__avatar'>
        <Avatar src={avatar} />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>{displayName} </h3>
          </div>
          <div className='post__headerDescription'>
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt='' />
      </div>
    </div>
  )
})

export default Post
