import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import MainSection from './components/MainSection'
import Footer from './components/Footer'
import ticketsData from './data/tickets'

export default function App() {
  const [tickets, setTickets] = useState(ticketsData)
  const [taskStatus, setTaskStatus] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([])
  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)

  function handleSelectTicket(ticket) {
    const alreadyAdded = taskStatus.find((t) => t.id === ticket.id)
    if (alreadyAdded) {
      toast.info(`"${ticket.title}" is already in Task Status`)
      return
    }
    setTaskStatus((prev) => [...prev, ticket])
    setInProgress((prev) => prev + 1)
    toast.success(`"${ticket.title}" added to Task Status`)
  }

  function handleComplete(ticket) {
    setTaskStatus((prev) => prev.filter((t) => t.id !== ticket.id))
    setResolvedTasks((prev) => [...prev, ticket])
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id))
    setInProgress((prev) => prev - 1)
    setResolved((prev) => prev + 1)
    toast.success(`"${ticket.title}" marked as resolved!`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Banner inProgress={inProgress} resolved={resolved} />
      <MainSection
        tickets={tickets}
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onSelectTicket={handleSelectTicket}
        onComplete={handleComplete}
      />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  )
}
