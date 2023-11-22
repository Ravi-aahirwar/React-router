import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './home/Home'
import About from './aboutUs/About'
import Contact from './contactUs/Contact'
import User from './user/User'
import Github,{githubInfoLoader} from './github/Github'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path:'about',
//        element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
    
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<About/>}/>
      <Route path='contact' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User/>}/>

      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github/>} />
    </Route>
    )
)
// learn loader

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
)
