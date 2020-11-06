import React, { Fragment, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Router, Route , Link, NavLink, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { auth } from './firebase.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './HomeHeader.css';
import Ins from "./Ins";

function HomeHeader({ user }) {
    const history = useHistory('');

    if (user === false) {
        history.push("/Login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/Login");
    }
    return (

        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to="/">
                    <img src="images/1166842.jpg" alt="Facebook Logo" className="homeHeader__logo" />
                </Link>
            </div>

            <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="/ins" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Technology
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/ins">HTML</Link>
                <Link class="dropdown-item" to="#">HTML5</Link>
                <Link class="dropdown-item" to="#">CSS</Link>
                <Link class="dropdown-item" to="#">CSS3</Link>
                <Link class="dropdown-item" to="#">BootStrap</Link>
                <Link class="dropdown-item" to="#">JavaScript</Link>
                <Link class="dropdown-item" to="#">ReactJs</Link>
                <Link class="dropdown-item" to="#">Angluer</Link>
                <Link class="dropdown-item" to="#">VeuJs</Link>
                <Link class="dropdown-item" to="#">Jquery</Link>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Git & GitHub</a>
                </div>
            </li>
                
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Languages
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">JavaScript</a>
                <a class="dropdown-item" href="#">NodeJs</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Python</a>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/Ins" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Instructors
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="/Ins" exact >Abdulrahman Alaa</NavLink>
                <a class="dropdown-item" href="/Ins">Ahmed Ayman</a>
                <a class="dropdown-item" href="#">Basent Mohamed</a>
                <a class="dropdown-item" href="#">Eman Mokhtar</a>

                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">El-Sayed</a>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About Us
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Service</a>
                <a class="dropdown-item" href="#">YouTube</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Contact Us</a>
                </div>
            </li>

            <section>
                <div className="dropdown">
                    LogOut
                    <ArrowDropDownIcon className="dropdown" />
                    <div className="dropdown-content">
                        <a onClick={logout}><p>Logout</p></a>
                    </div>
                </div>
            </section>
            </div>



    )
}

export default HomeHeader;