import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import DeveloperHome from './pages/DeveloperHome.jsx';
import GameDetails from './pages/GameDetails.jsx'
import GameRegister from './pages/GameRegister.jsx'
import { useParams } from 'react-router-dom';


const router = createBrowserRouter([
  {
    
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/developer',
        element: <DeveloperHome />,
      },
      {
        path: 'gamedetails/:id',
          element: <GameDetails />,
      },

      {
        path: 'gameregister',
        element: <GameRegister />,
      },
    ],
  }
    ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
