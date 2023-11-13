import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTicket from './pages/CreateTicket'
import MainPage from './pages/MainPage'
import AppProvider from './context.jsx'
import UpdateCard from './pages/UpdateCard'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/tickets',
    element: <CreateTicket />,
  },
  {
    path: '/tickets/:id',
    element: <UpdateCard />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
)
