import useCounter from "./useCounter";

function CustomHookExample() {
  const { count, increase, decrease, reset } = useCounter(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Hook Example 🚀</h1>

      <h2>{count}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={increase}>Increase ➕</button>
        <button onClick={decrease}>Decrease ➖</button>
        <button onClick={reset}>Reset 🔄</button>
      </div>
    </div>
  );
}

export default CustomHookExample;
