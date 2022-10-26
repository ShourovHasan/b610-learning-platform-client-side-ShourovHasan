import { createBrowserRouter } from "react-router-dom";
import CoursesLayout from "../../layout/CoursesLayout";
import Main from "../../layout/Main";
import AllCourses from "../../pages/AllCourses/AllCourses";
import FAQ from "../../pages/FAQ/FAQ";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            
            {
                path: '/allCourses',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/allCourses',
                        element: <AllCourses></AllCourses>,
                        loader: () => fetch('https://b610-lerning-platform-server-side-shourovhasan.vercel.app/allCourses/courses')
                    },                    
                    // {
                    //     path: '/allCourses/courses',
                    //     element: <Courses></Courses>,
                    //     loader: () => fetch('https://b610-lerning-platform-server-side-shourovhasan.vercel.app/allCourses/courses')
                    // },                    
                    {
                        path: '/allCourses/courses/:id',
                        element: <Courses></Courses>,
                        loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-shourovhasan.vercel.app/allCourses/courses/${params.id}`)
                    },
                    {
                        path: '/allCourses/category/:id',
                        element: <Category></Category>,
                        loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-shourovhasan.vercel.app/allCourses/category/${params.id}`)
                    },
                ]
            },            
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])