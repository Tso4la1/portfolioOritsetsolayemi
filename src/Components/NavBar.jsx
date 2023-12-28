import React from 'react';
import { FaAlignJustify } from "react-icons/fa"

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
                        <li><a href="#Header">Home</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                    {
                        state ? (
                            <ul className="navbar_right">
                                <li><a href="Home">Home</a></li>
                                <li><a href="Services">Services</a></li>
                                <li><a href="About">About</a></li>
                                <li><a href="Portfolio">Portfolio</a></li>
                                <li><a href="Skills">Skills</a></li>

                                <li><a href="Contact">Contact</a></li>
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
