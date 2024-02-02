import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/routes/Home.jsx'
import Contacts from './components/routes/Contacts.jsx'
import Company from './components/routes/Company.jsx'
import NewProject from './components/routes/NewProject.jsx'
import Projects from './components/routes/Projects.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "company",
        element: <Company/>
      },
      {
        path: "contacts",
        element: <Contacts/>
      },
      {
        path: "newproject",
        element: <NewProject/>
      },
      {
        path: "projects",
        element: <Projects/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
