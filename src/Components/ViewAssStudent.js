import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField } from '@mui/material'
import SubmitAss from './SubmitAss'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

const ViewAssStudent = (props) => {
  const [open, setOpen] = useState(false)
  const [subject, setSubject] = useState('')

  const handleClickToOpen = (e) => {
    setOpen(true)
    setSubject(e.target.value)
  }
  const handleToClose = () => {
    setOpen(false)
  }
  const handleToUpload = () => {
    setOpen(false)
  }

  return (
    <Container>
      <Wrap>
        <button className='btn' value='OOPS' onClick={handleClickToOpen}>
          OOPS
        </button>
      </Wrap>
      <Wrap>
        {/* <a href='/submit'>BWP</a> */}
        <button className='btn' value='BWP' onClick={handleClickToOpen}>
          BWP
        </button>
      </Wrap>
      <Wrap>
        {/* <a href='/submit'>DAA</a> */}
        <button className='btn' value='DAA' onClick={handleClickToOpen}>
          DAA
        </button>
      </Wrap>
      <Wrap>
        {/* <a href='/submit'>DBMS</a> */}
        <button className='btn' value='DBMS' onClick={handleClickToOpen}>
          DBMS
        </button>
      </Wrap>
      <Wrap>
        {/* <a href='/submit'>DLS</a> */}
        <button className='btn' value='DLD' onClick={handleClickToOpen}>
          DLD
        </button>
      </Wrap>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>Upload Assignment PDF</DialogTitle>
        <DialogContent>
          <SubmitAss subject={subject} />
        </DialogContent>
        <DialogActions>
          <button type='submit' className='sub-btn' onClick={handleToClose}>
            Cancel
          </button>
          <button type='submit' className='sub-btn' onClick={handleToUpload}>
            Upload
          </button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

const Container = styled.div`
  margin: 1rem 1.5rem;
  display: grid;
  grid-gap: 25px;
  padding: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .sub-btn {
    padding: 2rem;
    color: var(--main-color);
  }
  .sub-btn:hover {
    background: var(--main-color);
    color: white;
  }
`

const Wrap = styled.div`
  padding: 2rem;
  border-radius: 10px;
  background: var(--main-background);
  text-align: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  .btn {
    text-decoration: none;
    font-size: 2rem;
    color: rgb(171, 39, 79);
    text-align: center;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`

export default ViewAssStudent
