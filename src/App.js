import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [inputData, setInputData] = useState([{ name: "", email: "" }]);
  const [storeData, setStoreData] = useState([]);

  function handleAddInput(evt) {
    evt.preventDefault();
    setInputData([...inputData, { name: "", email: "" }]);
  }
  function handleChange(event, idx) {
    const { name, value } = event.target;
    const list = [...inputData];
    list[idx][name] = value;
    setInputData(list);
  }

  function handleRemoveInput(evt, idx) {
    evt.preventDefault();
    const list = [...inputData];
    list.splice(idx, 1);
    setInputData(list);
  }
  function submitData() {
    setStoreData(inputData);
  }
  return (
    <>
      <h1>Dynamic form in React</h1>
      <div className="container">
        <form>
          {inputData.map((input, idx) => (
            <div key={idx} className="form">
              <div className="form__line">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={input.name}
                  onChange={(e) => handleChange(e, idx)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={input.email}
                  onChange={(e) => handleChange(e, idx)}
                />
              </div>
              {inputData.length !== 1 && (
                <button onClick={(e) => handleRemoveInput(e, idx)}>
                  Remove
                </button>
              )}
              {inputData.length - 1 === idx && (
                <button onClick={handleAddInput}>Add More</button>
              )}
            </div>
          ))}
        </form>
        <button className="submit__btn" onClick={submitData}>
          Submit Data
        </button>
        <p>
          {storeData.map((s) => (
            <li>
              name:{s.name} | email: {s.email}
            </li>
          ))}
        </p>
      </div>
    </>
  );
};

export default App;
