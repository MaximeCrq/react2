import { NavLink, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Blog from './Blog'
import Accueil from './Accueil'
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
            }
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
                <br></br>
                <NavLink to={'/blog'}>Blog</NavLink>
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