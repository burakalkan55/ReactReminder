import useCounterStore from "./counterStore";

function ZustandCounterHook() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Zustand State Management 🚀</h1>

      <h2>{count}</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={increase}>Increase ➕</button>
        <button onClick={decrease}>Decrease ➖</button>
        <button onClick={reset}>Reset 🔄</button>
      </div>
    </div>
  );
}

export default ZustandCounterHook;
