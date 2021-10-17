import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [activity, setActivity] = useState(true)
  const [attendance, setAttendance] = useState(false)
  const [assignment, setAssignment] = useState(false)
  const [pageSegment, setPageSegment] = useState('activity')
  const [user, setUser] = useState('Aishwarya Mundley')
  const [title, setTitle] = useState('student')
  const [isStudent, setIsStudent] = useState(true)

  // useEffect(() => {
  //   setUser(user)
  //   setTitle(title)
  // }, [user, title])

  const showActivity = () => {
    setActivity(true)
    setAttendance(false)
    setAssignment(false)
    setPageSegment('activity')
  }
  const showAttendance = () => {
    setAttendance(true)
    setActivity(false)
    setAssignment(false)
    setPageSegment('attendance')
  }
  const showAssignment = () => {
    setAssignment(true)
    setActivity(false)
    setAttendance(false)
    setPageSegment('assignment')
  }

  const setUsername = (username) => {
    setUser(username)
  }
  const setTitlename = (titlename) => {
    setTitle(titlename)
  }

  return (
    <AppContext.Provider
      value={{
        activity,
        attendance,
        assignment,
        showActivity,
        showAttendance,
        showAssignment,
        pageSegment,
        setTitlename,
        setUsername,
        // user,
        // title,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
