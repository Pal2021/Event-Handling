import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("hellow");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick() {
    setheadingText("Submited");
  }

  function handleMouseover() {
    setMouseOver(true);
  }
  function handleMouseout() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseover}
        onMouseOut={handleMouseout}
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
