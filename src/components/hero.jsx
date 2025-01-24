import React from "react";
import "./hero.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importation des icônes

export const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <h1 className="title">I'm Liantsoa RANDRIA</h1>
                <p>I'm a junior web developer, AI and ML enthusiast, computer scientist. Reach out if you'd like to learn more.</p>
                <a href="mailto:liantsoarandrianasimbolarivelo@gmail.com" className="mail">Contact me</a>
                
                {/* New Skills Section */}
                <div className="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>Statistics</li>
                        <li>Machine Learning</li>
                        <li>Web developpement</li>
                        <li>Mobile developpement</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="resaux">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/liantsoa-rantoniaina-randrianasimbolarivelo-90789a314/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Liantsoarandria0803" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="/sariko.png" alt="myimage" className="myimage" />
        </div>
    );
};