import React from "react";

const BioData = (props) => {
  var timeNow = calculateTimeNow();
  var currentQuotation = generateQuotation();

  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "lightgreen" }}
    >
      <div className="container">
        <h1 className="display-1">
          Hey, <br /> Good {timeNow} <br /> Chaitu Maverick
        </h1>
        <p>{currentQuotation}</p>
        <h3>There are {props.totalTodos} items in your checklist</h3>
      </div>
    </div>
  );

  function calculateTimeNow() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) timeNow = "Morning";
    else if (hours >= 12 && hours < 17) timeNow = "afternoon";
    else if (hours >= 17 && hours < 20) timeNow = "evening";
    else timeNow = "night";

    return timeNow;
  }

  function generateQuotation() {
    const quotes = [
      "Affirm the good and the bad will vanish...!",
      "Experience is the name everyone gives to their mistakes...!",
      "First, solve the problem. Then, write the code...!",
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code...!",
      "Before software can be reusable it first has to be usable...!",
    ];

    return quotes[Math.floor(Math.random() * 4) + 1];
  }
};

export default BioData;
