import React from "react";
import "./hero.css"
export const Hero =()=>{
    return(
        <div className="hero">
            <div className="content">
               <h1 className="title">I'm Liantsoa RANDRIA</h1>
               <p>I'm junior web developper,AI and ML enthusiast,computer scientist.Reach out if you'd like to learn more.</p>
               <a href="mailto:liantsoarandrianasimbolarivelo@gmail.com" className="mail">Contact me</a>
            </div>
            <img src="/sariko.png" alt="myimage" className="myimage"/>
        </div>   
    )
}