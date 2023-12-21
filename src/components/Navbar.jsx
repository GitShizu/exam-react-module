import { NavLink } from "react-router-dom"

export default ()=>{
    return(
        <nav id="navbar">
            <menu>
                <li>
                    <NavLink className={'navlink'} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={'navlink'} to='/search'>Search</NavLink>
                </li>
            </menu>
        </nav>
    )
}