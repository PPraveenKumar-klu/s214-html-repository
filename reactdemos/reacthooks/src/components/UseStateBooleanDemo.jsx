import { useState } from "react";

function UseStateBooleanDemo() {
  const [isEligible, setIsEligible] = useState(false);

  let age = 10;
  const handleClick = () => {
    console.log("Button Clicked");
    if (age >= 18) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
  };
  return (
    <>
      <h1>UseState Boolean Demo</h1>

      <button
        type="button"
        className="btn btn-primary mx-3"
        onClick={() => handleClick()}
      >
        Update Eligibility
      </button>

      {isEligible ? "You can vote" : "You cannot vote"}
    </>
  );
}

export default UseStateBooleanDemo;
