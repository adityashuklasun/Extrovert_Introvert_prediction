import { useState } from 'react'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom'
import Home from "./components/explanatory"
import About from "./components/About"
import Model from "./components/model"
import Contact from "./components/Contact"
import { AnimatePresence } from 'framer-motion'
import Footer from './components/footer'

function Layout() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/model",
        element: <Model />
      },
      {
        path: "/Contact",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
