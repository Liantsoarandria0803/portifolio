import React from "react";
import  "./skills.css"

export const Skills=()=>{
    return(
        <section id="skills">
                <div class="container">
                    <div class="skills-text">
                        <h2>SKILLS</h2>
                    </div>

                    <div class="skills-content">
                        <div class="category">
                            <h3>Languages</h3>
                            <ul>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>SQL</li>
                                <li>PHP</li>
                                <li>HTML</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        <div class="category">
                            <h3>Databases</h3>
                            <ul>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                                <li>SQLITE</li>
                            </ul>
                        </div>
                        <div class="category">
                            <h3>Stacks & Libraries</h3>
                            <ul>
                                <li>React</li>
                                <li>Django</li>
                                <li>Scikit-Learn</li>
                                <li>Tensorflow</li>
                            </ul>
                        </div>
                        <div class="category">
                            <h3>Tools</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Gitlab</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            
        </section>
    )
}