import { NavLink, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from './Blog';
import Accueil from './Accueil';
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import CardUser from "./CardUser";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import PageError from "./PageError";

const router = createBrowserRouter([
        {
        path:'/',
        element:<Root/>,
        errorElement:<PageError/>,
        children: [
            {
                path:'/Accueil',
                element:<Accueil/>,
                errorElement:<PageError/>
            },
            {
                path:'/blog',
                element:<Blog/>,
                errorElement:<PageError/>
            },
            {
                path:'/Portfolio',
                element:<Portfolio/>,
                errorElement:<PageError/>,
                children:[
                    {
                        path:'/Portfolio/CardUser',
                        element:<CardUser/>,
                        errorElement:<PageError/>
                    },
                    {
                        path:'/Portfolio/Calendar',
                        element:<Calendar/>,
                        errorElement:<PageError/>
                    },
                    {
                        path:'/Portfolio/ToDoList',
                        element:<ToDoList/>,
                        errorElement:<PageError/>
                    }
                ]
            },
            {
                path:'/Contact',
                element:<Contact/>,
                errorElement:<PageError/>
            },
        ]
        }
]);

function Root(){
    return<>
        <header>
            <img src='https://picsum.photos/300/150' />
            <h1>Mon super blog</h1>
            <nav>
                <NavLink to={'/Accueil'}>Accueil</NavLink>
                <NavLink to={'/blog'}>Blog</NavLink>
                <NavLink to={'/Portfolio'}>Portfolio</NavLink>
                <NavLink to={'/Contact'}>Contact</NavLink>
            </nav>
        </header>

        <Outlet/>

        <footer>

        </footer>
    </>
}

function App () {
    return <RouterProvider router={router}/>
}

export default App