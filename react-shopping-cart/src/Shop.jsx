import React, { useState } from 'react';
import Login from './Login';

export default function Shop(props) {
    let shopItems = props.items;
    const [cart, setCart] = useState([]);

    function addItem(item) {
        setCart(c => [...c, item]);
    }

    const renderItems = () => {
        return (
            shopItems.map((item) => {
                return (
                    <div key={item.id}>
                        <li>{item.name}</li>
                        <p>Price per piece: ${item.price}</p>
                        <button onClick={() => addItem(item)}>Add to Cart!</button>
                        <br />
                    </div>
                );
            })
        );
    }

    const renderCart = () => {
        return (
            cart.map((product) => {
                return (
                    <div key={product.id}>
                        <li>{product.name}</li>
                        <p>Price: $ {product.price}</p>
                        <br />
                    </div>
                );
            })
        );
    }

    if (props.isLoggedIn === false) {
        return <Login />;
    } else {
        return (
            <>
                <h1>This is the Shop!</h1>
                <ul>{renderItems()}</ul>
                <h4>These are the cart items:</h4>
                <ul>{renderCart()}</ul>
            </>
        );
    }
}
