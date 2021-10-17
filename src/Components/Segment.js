import React from 'react'
import { useGlobalContext } from '../context'
import ViewAssStudent from './ViewAssStudent'
import Attendance from './Attendance'
import Activity from './Activity'

function Segment() {
  const { pageSegment, activity, attendance, assignment } = useGlobalContext()
  return (
    <div className='segment'>
      <div className='segment-center'>
        {/* <h1 className='segment-head'>{pageSegment}</h1> */}
        {activity && <Activity />}
        {/* {attendance && <Attendance />} */}
        {assignment && <ViewAssStudent />}
      </div>
    </div>
  )
}

export default Segment
