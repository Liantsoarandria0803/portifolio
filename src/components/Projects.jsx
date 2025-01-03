import React, { useState, useEffect } from "react";
import "./pro.css";
import { Loading } from "./Loading";
export const Project = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/dataProject.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Fetch error", error));
  }, []);

  return (
    <section id="projects">
      <div className="content">
        {data ? (
          // Map over the project data and render each project
          Object.keys(data).map((key) => {
            const project = data[key];
            return (
              <div className="project-card" key={key}>
                <h3 className="titrePro">{project.name}</h3>
                <p className="descri"dangerouslySetInnerHTML={{ __html: project.description }} />
                <div className="imagePro">
                  {/* Dynamically render images based on the availability of keys */}
                  {project.image1 && <img src={project.image1} alt="Project Image 1" />}
                  {project.image2 && <img src={project.image2} alt="Project Image 2" />}
                </div>
                <a className="link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            );
          })
        ) : (
          <div  className="loading">
             <Loading />
          </div>
        )}
      </div>
    </section>
  );
};
