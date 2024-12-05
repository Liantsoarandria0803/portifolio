import React from "react";
import "./about.css"

export const About =()=>{
    return(
        <section id="about">
            <div className="contentAbout">
                <div className="image2">
                    <div className="image">

                    </div>
                    <img src="/sary.png" alt="" />
                </div>
                <div className="about">
                    <ul>
                        <li>
                            <h3>Profile</h3>
                            <p>Self-taught,passionate about mathematics, computer
                                science and especially the field of data science and artificial
                                intelligence, agile, young innovator and productive..</p>
                        </li>
                        <li> 
                            <h3>Students from University of Antananarivo</h3>
                            <p>First year of master degree in Mathematics,Computer Sciences and applied statistics (MISA)</p>
                        </li>
                        <li>
                            <h3>Project coordinator of SMART KAJY</h3>
                            <p>Manage all activities and project in this club</p>
                        </li>
                        <li>
                            <h3>Info</h3>
                            <p>21 years old , lives in Imerintsiatosika</p>
                        </li>
                    </ul>
                </div>
            </div>
           
        </section>
    )
}