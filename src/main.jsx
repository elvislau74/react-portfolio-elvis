import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      // {
      //   path: '/About',
      //   element: <About />,
      // },
      // {
      //   path: '/Blog',
      //   element: <Blog />,
      // },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
