import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import'./App.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Services from './pages/Services';
import Cases from './pages/Cases.jsx'
import HomePage from './pages/HomePage.jsx';
import Header from './components/home_project/Header.jsx';
import SingleProject from './pages/SingleProject.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home"} replace={true} />, 
      },
      {
        path: "/home",
        element: <HomePage />,      
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
       
      },
      {
        path: "/cases",
        element: <Cases />,
       
      },
      {
        path: "/project",
        element: <SingleProject/>,
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <div className="app">
    {/* <Header/> */}
    <RouterProvider router={router} />
  </div>
)