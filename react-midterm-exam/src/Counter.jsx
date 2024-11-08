import { useState } from 'react'
export default function Counter(){
    const [count, setCount] = useState(0)
      
    const increment = () => {
        setCount(prevCount => prevCount + 2)
    }
      
    const decrement = () => {
        setCount(prevCount => prevCount - 2)
    }
      
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment by 2</button>
            <button onClick={decrement}>Decrement by 2</button>
        </div>
        )
}   