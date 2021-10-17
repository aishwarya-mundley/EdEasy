import Sawo from 'sawo'
import React, { useState, useEffect } from 'react'
import ParticleAnimation from 'react-particle-animation'
import { useGlobalContext } from '../context'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

function Login() {
  const [userPayload, setUserPayload] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { setUsername, setTitlename, isStudent, setIsStudent } =
    useGlobalContext()
  const [open, setOpen] = useState(false)

  // const handleClickToOpen = (e) => {
  //   setOpen(true)
  // }
  const handleSubmit = (e) => {
    setOpen(false)
    window.location = './Dashboard'
  }
  const handleToClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const onSuccessLogin = async (payload) => {
      setUserPayload(payload)
      setIsLoggedIn(true)
      sessionStorage.setItem('user_id', payload.user_id)
      console.log('Payload object : ', payload)
      setUsername(payload.customFieldInputValues.Name)
      setTitlename(payload.customFieldInputValues.Department)
      setOpen(true)
    }

    const sawoConfig = {
      containerID: 'sawo-container',
      identifierType: 'email',
      apiKey: 'e4eb5c38-cd6a-4f5d-b37e-e335a83e819b',
      onSuccess: onSuccessLogin,
    }
    let sawo = new Sawo(sawoConfig)
    sawo.showForm()
  }, [])

  return (
    <>
      <h1
        style={{
          position: 'absolute',
          top: '10%',
          left: '47%',
          zIndex: '200',
          color: '#970154',
        }}
      >
        Login
      </h1>
      {!isLoggedIn && (
        <div
          id='sawo-container'
          style={{
            height: '430px',
            width: '300px',
            // position: 'absolute',
            // top: '25%',
            // left: '40%',
            margin: 'auto',
            zIndex: '200',
          }}
        ></div>
      )}
      {isLoggedIn && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '300px',
            margin: 'auto',
            zIndex: '200',
          }}
        >
          <h2 className='text-center'>You have logged in successfully</h2>
        </div>
      )}
      <div>
        <Dialog open={open} onClose={handleToClose}>
          <DialogTitle>What is your role?</DialogTitle>
          <DialogContent>
            <form>
              <input type='radio' name='Student' id='role' value='student' />
              Student
              <input
                style={{ marginLeft: '2rem' }}
                type='radio'
                name='Teacher'
                id='role'
                value='teacher'
              />
              Teacher
            </form>
          </DialogContent>
          <DialogActions>
            <button type='submit' className='sub-btn' onClick={handleSubmit}>
              Confirm
            </button>
          </DialogActions>
        </Dialog>
      </div>
      <ParticleAnimation
        numParticles={300}
        color={{ r: 151, g: 1, b: 84, a: 255 }}
        background={{ r: 250, g: 252, b: 249, a: 255 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </>
  )
}

export default Login
