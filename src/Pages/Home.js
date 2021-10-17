import React, { Component } from 'react'
import ParticleAnimation from 'react-particle-animation'
import './Home.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className='heading'>EdEasy</h1>
        <p className='home-p'>Your Virtual Classroom</p>
        <div className='link-container'>
          {/* <a href='./Login' className='link'>
            Login
          </a>
          <Link to='/login' className='link'>
            Login
          </Link> */}
          <Loginpage>
            <a className='link' href='/login'>
              Login
            </a>
          </Loginpage>
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
      </div>
    )
  }
}

const Loginpage = styled.div`
  position: relative;
  top: 40%;
  z-index: 150;
  color: var(--main-color);
  text-decoration: none;
  font-size: 1.2rem;
`

export default Home
