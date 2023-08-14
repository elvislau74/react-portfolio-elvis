import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Error from './pages/Error.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'
import Projects from './components/Projects.jsx'
import Resume from './pages/Resume'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

// creates routes for each page and component
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
      {
        path: '/Portfolio',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

// renders our components and app to the page
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
