import { useState } from "react";

function UseStateArrayDemo() {
  const [items, setItems] = useState([]);
  console.log("items:", items);

  const addNewItem = () => {
    const newItem = `item${items.length + 1}`;
    setItems([...items, newItem]);
  };

  return (
    <>
      <h2>UseStateArrayDemo</h2>
      <ul style={{ listStyleType: "none", padding: "20px" }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          addNewItem();
        }}
      >
        Add Item
      </button>
    </>
  );
}

export default UseStateArrayDemo;
