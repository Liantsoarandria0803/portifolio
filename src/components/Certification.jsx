import React , { useState, useEffect } from "react";
import "./certification.css";
import { Loading } from "./Loading";
export const Certification = () => {
    const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/dataCeritification.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Fetch error", error));
  }, []);

  return <section className="certification" id="certification">
            <h1>Certifications</h1>
            <div className="certification-container">
                {data ? (
                        Object.keys(data).map((key) => {
                            const ceritificat =  data[key];
                            return(
                                <div className="certification-card">
                                    <img src={ceritificat.path} alt="certification" />
                                </div>
                            );
                        })
                    ) : (
                        <div  className="loading">
                            <Loading />
                        </div>
                    )
                }
            </div>
        </section>;
};
