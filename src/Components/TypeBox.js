import React, { useState } from 'react'
import './TypeBox.css'
import { Avatar, Button } from '@mui/material'
import db from '../firebase'
import { useGlobalContext } from '../context'

function TypeBox() {
  // const { user } = useGlobalContext()
  const [typeMessage, setTypeMessage] = useState('')
  const [typeImage, setTypeImage] = useState('')

  const sendPost = (e) => {
    e.preventDefault()
    db.collection('posts').add({
      displayName: 'Rahul Prajapati',
      // username: 'mundley@aish',
      // verified: true,
      text: typeMessage,
      image: typeImage,
      avatar: 'https://www.w3schools.com/w3images/avatar6.png',
    })
    setTypeMessage('')
    setTypeImage('')
  }

  return (
    <div className='typeBox'>
      <form>
        <div className='typeBox__input'>
          <Avatar src='https://www.w3schools.com/w3images/avatar6.png' />
          <input
            type='text'
            placeholder='Post Updates/Doubts'
            value={typeMessage}
            onChange={(e) => setTypeMessage(e.target.value)}
          />
        </div>
        <input
          className='typeBox__imageInput'
          type='text'
          placeholder='Optional : Enter image URL'
          value={typeImage}
          onChange={(e) => setTypeImage(e.target.value)}
        />
        <Button
          onClick={sendPost}
          type='submit'
          className='typeBox__typeButton'
        >
          Post
        </Button>
      </form>
    </div>
  )
}

export default TypeBox
