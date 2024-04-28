import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomePage/Home';
import AuthProvider from './components/Provider/AuthProvider';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AllArtCraft from './components/AllArtCraft/AllArtCraft';
import AddCraftItem from './components/AddCraftItem/AddCraftItem';
import MyArtCraftList from './components/MyArtCraftList/MyArtCraftList';
import PrivateRoutes from './components/Routes/PrivateRoutes';
import CraftCardDetails from './components/CraftCardDetails/CraftCardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/craft")
      },
      {
        path: "/craftCardDetails/:id",
        element: <PrivateRoutes><CraftCardDetails></CraftCardDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
      },
      {
        path: "/allArtCraft",
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch("http://localhost:5000/craft")
      },
      {
        path: "/addCraftItem",
        element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
      },
      {
        path: "/myArtList",
        element: <PrivateRoutes><MyArtCraftList></MyArtCraftList></PrivateRoutes>
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
