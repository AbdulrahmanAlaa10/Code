import React, { Component, Fragment } from 'react';
import { Router , Route } from "react-router-dom";
import "./Content.css";

class Ins extends Component {
  render() {
    return(
      <Router>

        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item">
            <img src="images/pexels-pixabay-267885.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>YOU CAN LEARN ANY PROGRAMMING LANGUAGES</h5>
            </div>
            </div>
            <div class="carousel-item active">
            <img src="images/pexels-thisisengineering-3862130.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>YOU CAN TO BE A WEB DEVELOPER</h5>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>







                <footer className="footer">
                    <div className="container Abodt">

                    <div className="col-md-6 col-lg-6">
                        <h1>About us</h1>
                        <p>iCareer is a career advisory company. We provide different career services that enables youth to bridge the gap between the academic offerings and labor market requirements. Our services include; capacity building programs, personality assessments, career coaching, mentorship, hiring events, direct recruitment, job placement, entrepreneurship training programs and others</p>

                    </div>

                    <div className="col-md-6 col-lg-6">
                        <h1>Contact us</h1>
                        <i className="fa fa-map-marker icooooon" aria-hidden="true"><span>Place: Egypt Cairo 6 Octobar 47 street</span></i>
                        <br />
                        <i className="fa fa-phone-square icooooon" aria-hidden="true"><span>Phone: 0201008698567</span></i>
                        <br />
                        <i className="fa fa-envelope icooooon" aria-hidden="true"><span>E-mail: Abdulrahmaanalaa199@gmail.com</span></i>

                    </div>

                    </div>
                </footer>


                <Route path="/Ins" component={Ins} exact />


        


    </Router>

    )
  }
}

export default Ins;