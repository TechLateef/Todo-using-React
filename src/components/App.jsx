import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const [items, addItem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setTodo(newValue);
  }

  function handleClick() {
    addItem((prevItem) => {
      return [...prevItem, todo];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={todo} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
