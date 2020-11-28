import React from "react";
import ITypedText from "./ITypedText";

const BioData = (props) => {

  var currentQuotation = generateQuotation();
  console.log("User name: ",props.userName);

  return (
    <div
      className="jumbotron jumbotron-fluid temp"
      style={{ backgroundColor: "lightgreen" }}
    >
      <div className="container">
        <h1 className="display-2">
          Hey
        </h1>
        <ITypedText userName={props.userName || "Please Sign up"} key={props.userName}/>
        <p>{currentQuotation}</p>
        {getSubBanner()}
      </div>
    </div>
  );

  /**
   * The below function is now replaced with a npm package to generate the dynamic greeting message.
   * Npm Package: https://www.npmjs.com/package/greetingmessage
   */
  // function calculateTimeNow() {
  //   const date = new Date();
  //   const hours = date.getHours();

  //   if (hours < 12) timeNow = "Morning";
  //   else if (hours >= 12 && hours < 17) timeNow = "afternoon";
  //   else if (hours >= 17 && hours < 20) timeNow = "evening";
  //   else timeNow = "night";

  //   return timeNow;
  // }

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

  function getSubBanner() {
    if (localStorage.getItem("loggedIn") === null)
      return null;
    return(
      <div>
        <h3>There are {props.totalTodos} items in your checklist. Finished: {props.finishedTodos}, Yet To Finish: {props.totalTodos - props.finishedTodos}</h3>
      </div>
    )
  }
};

export default BioData;
