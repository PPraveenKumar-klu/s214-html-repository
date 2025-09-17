import { useState } from "react";
function UseStateDemo() {
  const [count, setCount] = useState(13);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>UseState Demo</h1>
      <button type="button" className="btn btn-primary mx-3" onClick={incr}>
        Increment
      </button>
      {count}
      <button
        type="button"
        className="btn btn-outline-info mx-3"
        onClick={decr}
      >
        Decrement
      </button>
    </>
  );
}

export default UseStateDemo;
