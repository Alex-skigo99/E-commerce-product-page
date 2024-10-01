import React from "react";
import './counter.css';

interface CounterProps {
    count: number;
    onChange: (count: number) => void;
    };

const Counter: React.FC<CounterProps> = ({count, onChange}) => {

  return (
    <div className="counter">
        <div className="dec-inc" onClick={() => {onChange(Math.max(count-1, 1))}}>-</div>
        <div className="count">{count}</div>
        <div className="dec-inc" onClick={() => {onChange(count+1)}}>+</div>
    </div>
  );
};

export default Counter;