import React from 'react'
import './Dashboard.css'
import Sidebar from '../Components/Sidebar'
import Segment from '../Components/Segment'

function Dashboard() {
  return (
    <main className='dashboard'>
      <Sidebar />
      <Segment />
    </main>
  )
}

export default Dashboard
