import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseMobileCount,
  increaseMobileCount,
} from "../redux/todoToolkit/mobile";

const Mobile = () => {
  const mobileReducerState = useSelector((state) => state.mobileReducer);
  const { mobile_count } = mobileReducerState;
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decreaseMobileCount(1))}>Decrease</button>
      <strong>{mobile_count}</strong>
      <button onClick={() => dispatch(increaseMobileCount(1))}>Increase</button>
    </div>
  );
};

export default Mobile;
