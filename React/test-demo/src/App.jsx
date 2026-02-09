import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        PLUS
      </button>
      {count}
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        MINUS
      </button>
    </div>
  );
};
export default App;
