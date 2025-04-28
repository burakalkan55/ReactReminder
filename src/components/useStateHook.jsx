import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useState Hook Example 🚀</h1>
      <h2>{count}</h2>

      <button onClick={increase}>Increase ➕</button>
      <button onClick={decrease}>Decrease ➖</button>
    </div>
  );
}

export default UseStateHook;
