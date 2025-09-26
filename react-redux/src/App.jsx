import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/feature/counterSlice";

function App() {
  const [incrementByValue, setIncrementByValue] = useState(2);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <button className="decrement" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <div className="counter">{count}</div>
      <button className="decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <input
        type="text"
        className="incrementbyvalue"
        value={incrementByValue}
        onChange={(e) => setIncrementByValue(e.target.value)}
      />
      <button className="" onClick={() => dispatch(incrementByAmount(incrementByValue))}>Increment By Amount</button>
    </>
  );
}

export default App;
