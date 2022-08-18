import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Details from "./Details";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    const response = await fetch(url);
    const fetchData = await response.json();
    setData(fetchData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data[0]);

  // const FilterData = (id) => {
  //   const reqData = data.filter((item) => item.id === id);
  //   setShowCard(reqData);

  //   console.log(showCard);
  //   console.log(reqData);
  // };
  console.log(data[value]);

  //NOTE
  //this works fine when "data" changes into "Details"

  const { company, dates, duties, title } = data[value] || {};

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {data.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty) => {
            return (
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon" />

                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
