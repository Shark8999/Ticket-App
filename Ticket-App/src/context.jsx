import { createContext, useContext, useState } from 'react'
import axios from 'axios'
const AppContext = createContext()

export const useGlobalContext = () => {
  return useContext(AppContext)
}

const AppProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Hardware Problem')
  const [priority, setPriority] = useState(1)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('Not Started')
  const [allTickets, setAllTickets] = useState([])
  const [stateChange, setStateChange] = useState(true)
  const [hardware, setHardware] = useState([])
  const [software, setSoftware] = useState([])

  const settings = () => {
    const hardwareIssue = allTickets.filter(
      (ticket) => ticket.category === 'Hardware Problem'
    )
    setHardware(hardwareIssue)
    const softwareIssue = allTickets.filter(
      (ticket) => ticket.category === 'Software Problem'
    )
    setSoftware(softwareIssue)
  }
  const getTickets = async () => {
    const response = await axios.get('http://localhost:3000/api/v1/ticket')
    setAllTickets(response.data)
    console.log(response.data)
  }

  const deleteTask = async (id) => {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/ticket/${id}`
    )
    console.log(response)
    setStateChange(!stateChange)
  }

  return (
    <AppContext.Provider
      value={{
        getTickets,
        allTickets,
        stateChange,
        deleteTask,
        title,
        setTitle,
        description,
        setDescription,
        category,
        setCategory,
        priority,
        setPriority,
        progress,
        setProgress,
        status,
        setStatus,
        setStateChange,
        settings,
        hardware,
        software,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
