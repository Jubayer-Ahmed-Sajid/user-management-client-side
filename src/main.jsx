import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import NewUser from './Components/NewUser.jsx'
import Root from './Root/Root.jsx'
import Home from './Home'
import UpdateUser from './Components/UpdateUser'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/users')
      },
      {
        path: '/newUser',
        element: <NewUser></NewUser>

      },
      {
        path:'/users/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=> fetch(`http://localhost:5000/users/${params.id}`)
      }



    ]
  },

])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


