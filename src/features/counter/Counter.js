import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter Example</h2>
        <button className="btn btn-primary">Primary</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
