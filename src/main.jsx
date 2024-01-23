import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error_page from '../error_page.jsx'
import RoomCreatedForm from './RoomCreatedForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    errorElement:<Error_page/>
  },
  {
    path: "/create",
    element: <RoomCreatedForm/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
