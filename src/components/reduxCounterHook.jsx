import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, reset } from './counterSlice';

function ReduxCounterHook() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit State Management 🚀</h1>

      <h2>{count}</h2>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch(increase())}>Increase ➕</button>
        <button onClick={() => dispatch(decrease())}>Decrease ➖</button>
        <button onClick={() => dispatch(reset())}>Reset 🔄</button>
      </div>
    </div>
  );
}

export default ReduxCounterHook;
