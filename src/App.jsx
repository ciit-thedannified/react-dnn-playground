// import './css/App.css'
import Content from "./components/Content.jsx";
import {useState} from "react";
import { Accounts } from "./db/accounts.js";

function App() {

    let [loggedIn, setLoggedIn] = useState(false);

    function handleAuthLogin(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let fetchedUser = Accounts.get(username);

        if (!fetchedUser) {
            return alert("User account does not exist");
        } else {
            if (password !== fetchedUser.getPassword()) {
                return alert("Invalid credentials");
            } else {
                return setLoggedIn(true);
            }
        }

    }

    return (
        <>
            <div>
                {/* Log in interface */}
                {
                    !loggedIn &&
                    (
                        <>
                            <div className="login-form">
                                <h1> Log in </h1>
                                <form>
                                    <p className="form-label"> Username: </p>
                                    <input id="username" type="text" placeholder="Enter username"/>
                                    <p className="form-label"> Password: </p>
                                    <input id="password" type="password" placeholder="Enter username"/>
                                    <br/> <br/>
                                    <input type="button" value="Submit" onClick={e => handleAuthLogin(e)}/>
                                </form>
                            </div>
                        </>
                    )
                }

                {
                    loggedIn &&
                    <Content />
                }
            </div>
        </>
    )
}

export default App
