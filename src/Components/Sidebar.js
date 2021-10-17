import React, { useState } from 'react'
import SidebarOption from './SidebarOption'
import AssignmentIcon from '@mui/icons-material/Assignment'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import GroupsIcon from '@mui/icons-material/Groups'
import LogoutIcon from '@mui/icons-material/Logout'
import Profile from './Profile'
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import './Sidebar.css'

function Sidebar() {
  // const [activity, setActivity] = useState(true)
  // const [attendance, setAttendance] = useState(false)
  // const [assignment, setAssignment] = useState(false)
  // const [logout, setLogout] = useState(false)
  const {
    activity,
    attendance,
    assignment,
    showActivity,
    showAttendance,
    showAssignment,
    user,
    title,
  } = useGlobalContext()

  return (
    <aside className='sidebar'>
      <Profile />
      <button className='activity' onClick={showActivity}>
        <SidebarOption
          active={activity}
          text='Activity'
          Icon={NotificationsActiveIcon}
        />
      </button>
      {/* <button className='attendance' onClick={showAttendance}>
        <SidebarOption
          active={attendance}
          text='Attendance'
          Icon={GroupsIcon}
        />
      </button> */}
      <button className='assignments' onClick={showAssignment}>
        <SidebarOption
          active={assignment}
          text='Assignments'
          Icon={AssignmentIcon}
        />
      </button>

      <div
        className='Slink-container'
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <LogoutIcon className='logout-icon' />
        <Logout>
          <a className='Slink' href='/'>
            Logout
          </a>
        </Logout>
      </div>
    </aside>
  )
}

const Logout = styled.div`
  position: relative;
  top: 70%;
  z-index: 150;
  color: var(--main-color);
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
`

export default Sidebar
// HKNT10K
