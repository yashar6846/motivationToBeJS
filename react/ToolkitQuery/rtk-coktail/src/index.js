import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { Home } from './components/pages';
import SingleCoktile from './components/pages/SingleCoktile';
import store from './redux/store';
import { Provider } from 'react-redux';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/cocktail/:id",
      element: <SingleCoktile />,
    },
  ]);

  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


