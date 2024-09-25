import React, {useState} from 'react';
export default function Counter() {
    //useState hook for updating variable or statefull variables
    const [count, setCount] = useState(1)
    // to increment count
    const incrementCount = () => {
        //previous state => new state
        setCount(c => c + c)
    }
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    const resetCount = () => {
        setCount(c => c = 0)
    }
    return (
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrementCount}>decrement</button>
            <button className="button-container-reset" onClick={resetCount}>reset</button>
            <button className="button-container-increment" onClick={incrementCount}>increment</button>
        </div>
    )
}