import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import './index.css'
import App from './App.jsx'

// eslint-disable-next-line no-unused-vars
const router= createBrowserRouter([
  {
    path: "/",
    element: <App />

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
