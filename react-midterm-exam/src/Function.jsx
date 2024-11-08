import { useState } from 'react'
export default function Function(){
    const [count, setCount] = useState(0)

    const number = () => {
        if (count === 0 || count % 2 === 0){
            setCount((count + 1)* 2)
        } else {
            setCount((count + 1)+ 1)
        }
    }
    
    return (
        <div>
            <h1>Number: {count}</h1>
            <button onClick={number}>Update</button>
        </div>
    )
}   