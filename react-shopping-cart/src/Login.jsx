import { useState } from 'react';
import Shop from "./Shop";
import AdminPanel from './AdminPanel';

export default function Login() {
    // items for the shop component
    let items = [
        { id: 1, name: "Grapes", price: 50 },
        { id: 2, name: "Orange", price: 20 },
        { id: 3, name: "Pickles", price: 40 }
    ];

    // credentials for the account
    let accounts = [
        { id: 1, username: "customer", password: "customer", role: "customer" },
        { id: 2, username: "admin", password: "admin", role: "admin" },
        { id: 3, username: "customer2", password: "customer2", role: "customer" },
    ];

    // boolean variable for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // variable for the entered credentials
    const [role, setRole] = useState("");
    const [enterUsernames, setEnteredUsernames] = useState("");
    const [enterPasswords, setEnteredPasswords] = useState("");

    // function to get entered usernames
    function getUsername(event) {
        setEnteredUsernames(event.target.value);
    }

    // function to get entered passwords
    function getPassword(event) {
        setEnteredPasswords(event.target.value);
    }

    function handleLogin(event) {
        let loggedIn = false;
        accounts.map((account) => {
            if (account.username === enterUsernames && account.password === enterPasswords) {
                setIsLoggedIn(true);
                setRole(account.role);
                loggedIn = true; 
            }
        });
        if (!loggedIn) {
            alert("Your credentials are wrong"); 
        }
    }

    function renderLogin() {
        return (
            <div>
                <h1>Login: </h1>
                Username: <input type="text" placeholder="username" id="username" onChange={getUsername} /> <br />
                Password: <input type="password" placeholder="password" id="password" onChange={getPassword} /> <br />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    // function to render the shop
    function renderShop() {
        return (
            <Shop isLoggedIn={isLoggedIn} items={items} />
        );
    }

    function renderAdmin() {
        return (
            <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />
        );
    }

    if (isLoggedIn === false) {
        return renderLogin();
    } else {
        if (role === "admin") {
            return renderAdmin();
        } else {
            return renderShop();
        }
    }
}
