import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home/home.jsx'
import About from './component/About/about.jsx'
import Layout from './Layout.jsx'
import Contact from './component/Contact/contact.jsx'
import User from './component/User/user.jsx'
import Github, { githubInfoLoader } from './component/Github/github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
      path: "",
      element: <Home/>
    },
   {
    path:"about",
    element: <About/>
  },
  {
    path:"contact",
    element: <Contact/>
  },
  {
    path:"user/userid",
    element: <User/>
  },
  {
    loader:githubInfoLoader,
    path:"github",
    element: <Github/>
  }
]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
