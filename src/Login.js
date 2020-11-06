import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';

import "./Login.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory('');

    const Login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
                console.log(auth)

            })
            .catch((e) => {
                if (
                    e.message ===
                    "The password is invalid or the user does not have a password."
                ) {
                    alert("Please check your credentials again");
                } else if (
                    e.message ===
                    "There is no user record corresponding to this identifier. The user may have been deleted."
                ) {
                    history.push("/Register");
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    alert(e.message);
                }
            })
    }

    const mystyle = {
        marginTop: "15px",
        marginBottom: "10px"
      };
      const mystyle3 = {
        marginTop: "0px",
        marginBottom: "15px"
      }

    return (
        <div className="login">
            <div className="login__container">
                <h3 className="Sign">Log In</h3>
                <Icon className="fa fa-plus-circle" color="primary" />
                <hr />

                <form>
                    <center>
                        <div>
                        <EmailIcon className="fa fa-plus-circle" color="primary" />

                                <TextField id="input-with-icon-grid" label="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                type="text"
                                placeholder="Email Address" 
                                />
                        </div>
                    </center>
                    <center>
                    <VisibilityIcon className="fa fa-plus-circle" color="primary" />

                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" 
                    />
                    </center>
                    <center>
                        <Button style={mystyle} onClick={Login} type="submit" variant="contained" color="primary" disableElevation>
                            Log In
                        </Button>
                    </center>

                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to="/Register">
                        <Button style={mystyle3} variant="contained" color="primary" disableElevation>
                            Do Not have account Please Sign in
                        </Button>
                        </Link>

                    </center>
                </form>
            </div>
        </div>
    )
}

export default Login;
