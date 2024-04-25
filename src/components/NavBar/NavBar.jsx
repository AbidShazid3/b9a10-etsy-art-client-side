import { Link, NavLink } from "react-router-dom";


const NavBar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>Home</NavLink>
        <NavLink to="/allArtCraft" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>All Art & Craft</NavLink>
        <NavLink to="/addCraftItem" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>Add Craft Item</NavLink>
        <NavLink to="/myList" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>My Art & Craft List</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>About</NavLink>
    </>

    return (
        <div>
            <div className="navbar p-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-bold md:text-2xl lg:text-2xl">ETSY</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal text-lg px-1 lg:gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link to="/login" className="btn btn-accent text-lg">Log In</Link>
                    <Link to="/register" className="btn btn-accent text-lg">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;