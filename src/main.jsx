import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/Error.jsx'
import HomePage from './pages/Homepage.jsx'
import SignInPage from './pages/Auth/SignInPage.jsx'
import SignUpFrom from './Components/organisms/SignUpForm.jsx'
import SignUpPage from './pages/Auth/SignUpPage.jsx'


// eslint-disable-next-line no-unused-vars
const router= createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage/>
  },{
    path: "/home",
    element: <HomePage/>
  },{
    path: "/login",
    element: <SignInPage/>
  },{
    path: "/register",
    element: <SignUpPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
