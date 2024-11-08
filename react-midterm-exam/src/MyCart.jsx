import React, { useState } from 'react'

export default function MyCart() {
    const [myCart, setMyCart] = useState([])
    const [item, setItem] = useState('')

    const addItem = () => {
        if (item.trim()) {
            setMyCart([...myCart, item])
            setItem('')
        }
    }

    return (
        <div>
            <h3>My Cart</h3>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add an item"
            />
            <button onClick={addItem}>Add to Cart</button>
            <ul>
                {myCart.map((cartItem, index) => (
                    <li key={index}>{cartItem}</li>
                ))}
            </ul>
        </div>
    )
}