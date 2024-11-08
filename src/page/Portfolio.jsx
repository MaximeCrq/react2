import { NavLink, Outlet } from "react-router-dom";



function Portfolio(){
    return <>
    <header>
    <nav>
        <NavLink to={'/Portfolio/CardUser'}>CardUser</NavLink>
        <NavLink to={'/Portfolio/Calendar'}>Calendar</NavLink>
        <NavLink to={'/Portfolio/ToDoList'}>ToDoList</NavLink>
        <h1>Mon site 2</h1>
    </nav>
    </header>
    
    <h2>PORTFOLIO</h2>
    <Outlet/>
    <footer></footer>
    </>
}


export default Portfolio