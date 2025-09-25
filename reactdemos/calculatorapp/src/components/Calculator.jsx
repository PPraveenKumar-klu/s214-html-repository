import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");

  function handleButtonClick(event) {
    console.log(event.target.value);
    setInput(input + event.target.value);
  }

  function handleButtonEquals() {
    try {
      let result = eval(input);
      console.log(result);
      setInput(result.toString());
    } catch (error) {
      setInput(error.message);
    }
  }
  return (
    <>
      <div className="container">
        <div className="input-text">
          <input
            type="text"
            name="inputtext"
            id="inputtext"
            value={input}
            readOnly
            className="input-field"
          />
        </div>
        <div className="buttons">
          <input
            type="button"
            value="del"
            className="my-button"
            onClick={() => setInput(input.slice(0, -1))}
          />
          <input
            type="button"
            value="C"
            className="my-button"
            onClick={() => setInput("")}
          />
          <input
            type="button"
            value="%"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="/"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <br />
          <input
            type="button"
            value="7"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="8"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="9"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="*"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />{" "}
          <br />
          <input
            type="button"
            value="4"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="5"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="6"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="-"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />{" "}
          <br />
          <input
            type="button"
            value="1"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="2"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="3"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="+"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />{" "}
          <br />
          <input
            type="button"
            value="+/-"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="0"
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="."
            className="my-button"
            onClick={(event) => handleButtonClick(event)}
          />
          <input
            type="button"
            value="="
            className="my-button"
            onClick={() => handleButtonEquals()}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
