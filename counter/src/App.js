import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div>
        <div class="count">
          <h3>Counter App</h3>
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} class="button" />
          <Button title={"+"} action={incrementCount} class="button" />
          <Button title={"Reset"} action={resetCount} class="button" id="reset"/>
        </div>
      </div>
    </div>
  );
}
