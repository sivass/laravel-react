import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout.jsx';
import GuestLayout from './components/GuestLayout.jsx';
import Dashboard from './views/Dashboard.jsx';
import Login from './views/Login.jsx';
import NotFound from './views/NotFound.jsx';
import Signup from './views/Signup.jsx';
import UserForm from './views/UserForm.jsx';
import Users from './views/Users.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/users/new',
                element: <UserForm key="UserCreate" />
            },
            {
                path: '/users:id',
                element: <UserForm key="UserUpdate" />
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },

])

export default router
