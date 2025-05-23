
import Login from '@/components/auth/Login'
import Mainlayout from '@/layout/Mainlayout'
import Home from '@/pages/Home'
import Tasks from '@/pages/Tasks'
import Users from '@/pages/Users'
import {createBrowserRouter}  from 'react-router'

 const routes = createBrowserRouter([
    {
        path: '/',
        element : <Mainlayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'tasks',
                element: <Tasks/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    }
])

export default routes