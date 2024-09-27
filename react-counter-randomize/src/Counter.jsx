import React, {useState} from 'react';
export default function Counter() {
    //useState hook for updating variable or statefull variables
    const [count, setCount] = useState(0)
    // to increment count
    const incrementCount = () => {
        //previous state => new state
        setCount(c => c + 1)
    }
    const decrementCount = () => {
        setCount(c => c - 1)
    }
    const resetCount = () => {
        setCount(c => c = 0)
    }
    const increment5Count = () => {
        //previous state => new state
        setCount(c => c + 5)
    }
    const decrement5Count = () => {
        setCount(c => c - 5)
    }
    const randomCount = () => {
        if(count > 0){
            setCount (c => c = Math.floor(Math.random() * -100))
        }else if(count < 0){
            setCount (c => c = Math.floor(Math.random() * 100))
        }else{
            setCount (c => c = Math.floor(Math.random() * 100))
        }   
    }
    return (
        <div className="container">
            <p className="counter-container">
                Counter: <br /> {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick={decrement5Count}>-5</button>
            <button className="button-container-decrement" onClick={decrementCount}>decrement</button>
            <button className="button-container-reset" onClick={resetCount}>reset</button>
            <button className="button-container-increment" onClick={randomCount}>random</button>
            <button className="button-container-increment" onClick={incrementCount}>increment</button>
            <button className="button-container-increment" onClick={increment5Count}>+5</button>
        </div>
    )
}