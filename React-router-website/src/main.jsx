import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact';
import Github from './Components/Github/Github'
import githubInfoLoader from './Components/Github/GithubAPI'
import User from './Components/User/User'
// RouterProvider is used to provide the routing functionality to the components


//Router is used to tell on what paths what components should be rendered, this is the first waay of creating a router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       },
//     ]
//   }
// ])

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github/:id" element={<Github />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router2}/>
  </React.StrictMode>
)
