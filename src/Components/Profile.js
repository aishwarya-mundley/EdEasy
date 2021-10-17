import React from 'react'
import { Avatar } from '@mui/material'
import './Profile.css'
import { useGlobalContext } from '../context'

function Profile() {
  // const { user, title } = useGlobalContext()
  return (
    <div className='profile'>
      <div className='profile-center'>
        <div className='profile-img'>
          <Avatar src='https://www.w3schools.com/w3images/avatar6.png' />
        </div>
        <div className='profile-info'>
          <h2>Aishwarya Mundley</h2>
          <p>Student</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
