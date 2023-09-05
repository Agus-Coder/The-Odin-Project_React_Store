import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <>
        <nav className="flex justify-around h-16 bg-slate-800 text-slate-400 items-center">
            <NavLink to ="/" className="flex-none"> Home</NavLink>
            <NavLink to ="products"> Products</NavLink>
            <NavLink to ="about"> About</NavLink>
            <NavLink to ="cart"> Cart</NavLink>
        </nav>
        </>
    )
}


export default Header