import React, { useState } from 'react';

export default function Shop() {
    const [grapeCount, setGrapeCount] = useState(0);
    const [orangeCount, setOrangeCount] = useState(0);
    const [kiwiCount, setKiwiCount] = useState(0);
    const [bananaCount, setBananaCount] = useState(0);
    const [cucumberCount, setCucumberCount] = useState(0);
    const [payment, setPayment] = useState(0);
    const [showReceipt, setShowReceipt] = useState(false);

    const items = [
        { name: "Grapes", price: 5, count: grapeCount, setCount: setGrapeCount },
        { name: "Orange", price: 4, count: orangeCount, setCount: setOrangeCount },
        { name: "Kiwi", price: 6, count: kiwiCount, setCount: setKiwiCount },
        { name: "Bananas", price: 4, count: bananaCount, setCount: setBananaCount },
        { name: "Cucumber", price: 3, count: cucumberCount, setCount: setCucumberCount }
    ];

    const totalPrice = 
        grapeCount * items[0].price +
        orangeCount * items[1].price +
        kiwiCount * items[2].price +
        bananaCount * items[3].price +
        cucumberCount * items[4].price;

    const handlePayment = (e) => setPayment(Number(e.target.value));
    const generateReceipt = () => setShowReceipt(true);

    return (
        <div className="shop-container">
            <div className="available-items">
                <h2>Available Items</h2>
                {items.map((item, index) => (
                    <div key={index} className="item-container">
                        <li>{item.name} - ${item.price}</li>
                        <button onClick={() => item.setCount(count => count + 1)}>Add</button>
                        <button onClick={() => item.setCount(count => Math.max(count - 1, 0))}>Remove</button>
                        <button onClick={() => item.setCount(count => Math.max(count = 0, 0))}>Reset</button>
                        <p>Count: {item.count}</p>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Cart Summary</h2>
                <p>Total Price: ${totalPrice}</p>
            </div>

            <div className="checkout">
                <h2>Checkout</h2>
                <label>Enter Payment: </label>
                <input type="number" value={payment} onChange={handlePayment} />
                <button onClick={generateReceipt}>Generate Receipt</button>
            </div>

            {showReceipt && payment >= totalPrice && (
                <div className="receipt">
                    <h3>Receipt</h3>
                    <ul>
                        {items.map((item, i) => 
                            item.count > 0 && <li key={i}>{item.name} x {item.count} - ${item.price * item.count}</li>
                        )}
                    </ul>
                    <p>Total Price: ${totalPrice}</p>
                    <p>Amount Paid: ${payment}</p>
                    <p>Change: ${payment - totalPrice}</p>
                </div>
            )}

            {showReceipt && payment < totalPrice && (
                <p>Insufficient Payment! Please enter an amount greater than or equal to the total price.</p>
            )}
        </div>
    );
}