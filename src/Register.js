import React, { useState } from 'react'
import { auth } from './firebase.js';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';
import "./Register.css";


function Register() {
    const history = useHistory('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth.user) {
                    auth.user.updateProfile({
                        displayName: firstName + " " + lastName
                    }).then((s) => {
                        history.push("/")
                    })
                }
            })
            .catch((e) => {
                alert(e.message);
            })
    }

    const mystyle1 = {
        marginBottom: "25px"
      };

    return (
        <div className="register">
            <div className="register__container">
                <h1 className="create">Create A New Account</h1>

                <h3 className="Quick">Its quick an easy</h3>
                <form>
                    <center>
                    <PeopleAltIcon className="fa fa-plus-circle" color="primary" />

                        <TextField id="input-with-icon-grid" label="Enter First Name"
                        type="name" onChange={(e) => setFirstName(e.target.value)}
                        className="register__name"
                        placeholder="First Name" 
                        />
                    </center>
                    <center>
                    <PeopleAltIcon className="fa fa-plus-circle" color="primary" />

                        <TextField id="input-with-icon-grid" label="Enter Last Name"
                        type="name" onChange={(e) => setLastName(e.target.value)}
                         className="register__name"
                         placeholder="Last Name" 
                        />
                    </center>

                    <center>
                    <EmailIcon className="fa fa-plus-circle" color="primary" />

                        <TextField id="input-with-icon-grid" label="Enter Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email" 
                        />
                    </center>
                    <center>
                    <VisibilityIcon className="fa fa-plus-circle" color="primary" />

                    <TextField
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password" 
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    </center>
                    <center>
                    <form noValidate>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                    />
                    </form>
                    </center>

                    <center>
                    <h5 className="register__gender" style={{marginBottom: "15px", marginTop: "15px"}}>Gender</h5>
                    <div className="register__radiocontainer">
                        <input type="radio" name="gender" value="Male" />
                        <label>Male</label>
                        <input type="radio" name="gender" value="Female" />
                        <label>Female</label>
                        <input type="radio" name="gender" value="Other" />
                        <label>Other</label>
                    </div>

                    <p className="register__policy">
                        By clicking Sign Up, you agree to our{" "}
                        <span>Terms, Data Policy</span> and <span>Cookie Policy</span>. You
                    may recieve SMS notifications from us and can opt out at any time.
                    </p>
                    </center>
                    <center>
                        <Button style={mystyle1} className="register__register" onClick={register} type="submit" variant="contained" color="primary" disableElevation>
                            Register
                        </Button>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default Register;