import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import ErrorPage from './error-page';
import Contact from './contact';
import Child from './child';
import './tailwind.css'

const routes: RouteObject[] = [{
  path: "/",
  element: <App/>,
  errorElement:<ErrorPage/>,
  children:[
    { path:"child",element:<Child/> }
  ]
},
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router} />);