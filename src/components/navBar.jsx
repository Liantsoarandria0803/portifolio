import React from "react";
import { useState } from "react";
import "./navBar.css"
export const Navbar =()=>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav>
            <a href="/" className="titre">Portifolio</a>
            <div className={`menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#certification">Certification</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="burger" onClick={toggleMenu}>
                &#9776;
            </div>
        </nav>
    )
}