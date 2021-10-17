import React, { useEffect, useState } from 'react'
import './Activity.css'
import TypeBox from './TypeBox'
import Post from './Post'
import db from '../firebase'
import FlipMove from 'react-flip-move'

function Activity() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className='act'>
      <div className='act__header'>
        <h2>Activity</h2>
      </div>

      <TypeBox />

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            // username={post.username}
            // verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Activity
