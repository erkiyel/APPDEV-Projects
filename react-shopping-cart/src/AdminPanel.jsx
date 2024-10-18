import React, { useState } from "react";
import Login from "./Login";

export default function AdminPanel(props) {
    let accounts = props.accounts;
    const [devlogs, setDevlogs] = useState([]);

    // function to add Devlogs
    function AddDevlog() {
        let devlog = {
            date: new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
            title: document.getElementById("text").value,
            content: document.getElementById("content").value,
        };
        setDevlogs(d => [...d, devlog]);
        document.getElementById("text").value = ""; 
        document.getElementById("content").value = "";
    }

    // function to render accounts
    const renderAccounts = () => {
        return (
            accounts.map((account) => {
                return (
                    <div key={account.id}>
                        <h2>{account.username}</h2>
                        <p>{account.role}</p>
                    </div>
                );
            })
        );
    }

    // function to render devlog history
    const renderDevlogHistory = () => {
        return (
            devlogs.map((devlog) => { 
                return (
                    <div>
                        <h2>{devlog.title}</h2>
                        <p>{devlog.date}</p>
                        <p>{devlog.content}</p>
                    </div>
                );
            })
        );
    }

    if (props.isLoggedIn === false) {
        return <Login />;
    } else {
        return (
            <div>
                <h1>This is the Admin Page!</h1>
                <p>These are the active accounts:</p>
                {renderAccounts()}
                <br />
                <br />
                <h4>Admin Devlogs</h4>
                Title: <input type="text" name="text" id="text" />
                <br />
                <br />
                Content:
                <br />
                <textarea name="content" id="content" cols="50" rows="10"></textarea>
                <br />
                <button type="submit" onClick={AddDevlog}>Submit</button> 
                <h4>Devlog History:</h4>
                {renderDevlogHistory()}
            </div>
        );
    }
}
