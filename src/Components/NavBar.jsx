import React from 'react';
import { FaAlignJustify } from "react-icons/fa"
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    const [state, setState] = React.useState(false);
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_container">
                    <ul className="navbar_left">
                        <div className="navbar_left-logo">
                            <p>CodeWithTsola</p>
                        </div>
                    </ul>
                    <ul className="navbar_right-desktop">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                        <li><NavLink to='/prices'>Skills</NavLink></li>

                    </ul>
                    {
                        state ? (
                            <ul className="navbar_right">
                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='/services'>Services</NavLink></li>
                                <li><NavLink to='/about'>About</NavLink></li>
                                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                                <li><NavLink to='/prices'>Skills</NavLink></li>

                            </ul>
                        ) :
                            ("")
                    }
                </div>

            </div>
            <div className="toggle" onClick={() => setState(!state)}>
                <FaAlignJustify />
            </div>
        </nav>
    )
}
