import React, { useState, useEffect } from "react";
import './Counter.css';

interface CounterProps {
    onChange: (count: number) => void;
    };

const Counter: React.FC<CounterProps> = ({onChange}) => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        onChange(count);
    }, [count, onChange]);

  return (
    <div className="counter">
        <div className="dec-inc" onClick={() => {setCount(Math.max(count-1, 1))}}>-</div>
        <div className="count">{count}</div>
        <div className="dec-inc" onClick={() => {setCount(count+1)}}>+</div>
    </div>
  );
};

export default Counter;