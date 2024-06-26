import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const NavBar = () => {

    const { user, loading, signOutUser } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light');
        }
    }

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>Home</NavLink>
        <NavLink to="/allArtCraft" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>All Art & Craft</NavLink>
        {user &&
            <>
                <NavLink to="/addCraftItem" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>Add Craft Item</NavLink>
                <NavLink to="/myArtCraft" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold' : ''}>My Art & Craft List</NavLink>
            </>}
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
                    <Link to="/" className="btn btn-ghost text-orange-600 font-bold md:text-2xl lg:text-2xl">ETSY</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal text-lg px-1 lg:gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input onChange={handleToggle} type="checkbox" className="checkbox theme-controller mr-2" />
                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <img src={user?.photoURL || "https://t4.ftcdn.net/jpg/04/72/81/55/360_F_472815510_sdB7bklhuyVQ9eCx49WUV3CvhoLcSsvj.jpg"} alt="" className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user?.displayName || "Null"}
                                />
                                <Tooltip id="my-tooltip" />
                                <button onClick={handleSignOut} className="btn btn-accent text-lg">Sign Out</button>
                            </div>
                            :
                            <div>
                                <Link to="/login" className="btn btn-sm btn-accent text-lg mr-1">{loading ? "Loading..." : "LogIn"}</Link>
                                <Link to="/register" className="btn btn-sm btn-accent text-lg">{loading ? "Loading..." : "Register"}</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;