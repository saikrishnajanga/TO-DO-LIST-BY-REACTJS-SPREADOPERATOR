import React, { useState } from "react";

function App() {
  // input text value is defined
  //1. When new text is written into the input, its state should be saved.
  const [inputText, setInputText] = useState("");
  //whenever the item is added button is pressed should store in the array initially an emoty array that stores
  const [item, setItem] = useState([]); //array

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    setItem((prevValue) => {
      return [...prevValue, inputText]; //used the spread operator to store multiple all entered once
    });
    setInputText("");
    //give a arrow function => whatever we can name and add the items
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* passing the mapping function and arrow function for the array to store the items  */}
          {item.map(
            (allItems) => (
              <li>{allItems}</li>
            ) //wrapped inside the js and ()
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
