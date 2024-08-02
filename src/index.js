import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Page/Home';
import Comman from './Page/Comman';
import MainContext from './MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let webroute = createBrowserRouter(
  [
    {
    path:'/',
    element:<Home/>
    },

    {
      path:'men',
      element:<Comman/>
    }
  ]
)
root.render(
  <MainContext>
    <RouterProvider router={webroute} />
  </MainContext>
);

reportWebVitals();
