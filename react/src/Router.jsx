import {createBrowserRouter } from "react-router-dom";

import Login from "./views/Login";
import SignUP from "./views/SignUp";
import Users from "./views/Users";
import NotFound from './views/NotFound';
import DefaultLayout from "./components/DefaultLayout";
import GuestLayouts from "./components/GuestLayouts";
import Dashboard from "./views/Dashboard";
import UserForm from "./views/UserForm";

const router = createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element:<Users/>
            },
            {
                path:'/dashboard',
                element: <Dashboard/>
            }, 
            {
                path:'/users',
                element: <Users/>
            },
            // add these
            {
                path:'/users/new',
                element: <UserForm key="userCreate"/>
            },
            {
                path:'/users/:id',
                element: <UserForm key="userUpdate"/>
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayouts/>,
        children:[
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/signup',
                element: <SignUP/>
            },
        ]
    },
    {
        path:"*",
        element: <NotFound/>
    }
])

export default router;