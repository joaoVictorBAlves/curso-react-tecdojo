import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <div className="Controls">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <div className="Number">{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
