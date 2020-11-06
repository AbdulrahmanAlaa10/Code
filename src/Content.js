import React, { Component, Fragment } from 'react';
import "./Content.css";

class Content extends Component {
  render() {
    return(
      <Fragment>



        {/* Background and heading */}

        <section className="home">
          <div className="container">
            <div className="row">
              <h1 className="h1h1h1">The best Live <span> courses </span> in</h1>
              <br />
              <p className="p2">the Arab world,  thanks to more than <br /> 10 thousand students</p>
              <img src="/images/landing_bg.png" className="iaiaiaimg" />
              <img src="/images/waves.png" className="waves" />
            </div>
          </div>
        </section>

        <section className="text-center why5">
            <div className="container">
                <h1>WHO WE SERVE</h1>
                <p style={{color: "rgba(80,170,163,0.5)"}}>_____</p>
            <div className="why55">

                <div className="col-md-4 col-lg-4 why22">
                <i className="fa fa-free-code-camp icoon" aria-hidden="true"></i>
                <h1>First Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                <div className="col-md-4 col-lg-4 why22">
                <i class="fa fa-cube icoon" aria-hidden="true"></i>
                    <h1>Second Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                <div className="col-md-4 col-lg-4 why22">
                <i class="fa fa-hourglass icoon" aria-hidden="true"></i>
                <h1>Third Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                </div>
            </div>
        </section>


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





      <img src="/images/second_section_.png" className="client" />

  
      <div className="container">
        <div className="col-lg-12 col-md-12">
          <img src="/images/Group 140.png" className="image" />
          <h5 className="H111">Super Fast Delivery </h5>
          <p className="pp">We only need 45-60 minutes to get your prodect into your customers hands</p>
        </div>

        <div className="col-lg-12 col-md-12">
          <img src="/images/Group 152.png" className="image1" />
          <h5 className="H1111">Super Fast Delivery </h5>
          <p className="ppp">We only need 45-60 minutes to get your prodect into your customers hands</p>
        </div>
      </div>


      <section className="miideles text-center">
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-md-6">
              <h4 className="h4h4h4 text-center">Why Choose <br /> <span>kudzoka</span></h4>
                 <img src="/images/why_kudzoka_bg.png" className="image2" />
              </div>

              <div className="col-lg-6 col-md-6 text-center">
                <img src="/images/Group 1020.png" className="image3" />
                <h5 className="H5555555">Discounts</h5>
                <p className="ppp555">We only need 45-60 minutes to get your prodect into your customers hands</p>
              </div>
          </div>
        </div>
      </section>

    <section className="features text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <img src="/images/Group 1006.png" className="imgg" />
          </div>
    
          <div className="col-lg-4 col-md-4 text-center">
          <img src="/images/Group 1007.png" className="imggg" />
          <h2 className="H2">Round the clock Support</h2>
          <p className="Parahrag">We only need 45-60 minutes to get your product<br /> into your customers hands</p>
          </div>

          <div className="col-lg-4 col-md-4">
          <img src="/images/Group 1008.png" className="imgg" />
          </div>

        </div>
      </div>
    </section>

      <center>
        <h1 className="headvideo" style={{fontSize: "25px", marginBottom: "16px", marginTop: "30px", fontFamily: "Montserrat"}}>LETS GO HOW TO BECOME FRONT END DEVELOPER</h1>
      <video style={{width: "680px", marginBottom: "50px"}} controls loop poster="images/119774406_362500515118692_1851406246242872128_n.png">
        <source src="images/احسن خريطة تمشي عليها في مجال ال Front end developer.mp4" />
      </video>
      </center>



        {/* Footer 

        <section className="footer">
              <div className="imggggggggggs">
                <img src="/images/120570240_1438492939673479_1452111268841416043_n-removebg-preview.png" style={{width: "400px"}} className="imggggggg"/>
                <div>
                      
                  <ul className="buttonnn list-unstyled">
                    <li className="li1"><img src="/images/apple.png"/>App Store </li>
                    <li className="li2"><img src="/images/play-store.png"/>Play Store </li>
                  </ul>
      
                  <ul className="list-unstyled three-columns linkks">
                    <li><img src="/images/Icon simple-whatsapp.png" /></li>
                    <li><img src="/images/Icon feather-facebook.png" /></li>
                    <li><img src="/images/Icon awesome-instagram.png" /></li>
                  </ul>

                  <ul className="list-unstyled social-list">
                    <li>Home </li>
                    <li>Services </li>
                    <li>About Us </li>
                    <li>Help Center </li>
                  </ul>
                </div>
              </div>
        </section>
    
        */}



        <section className="text-center why1">
            <div className="container">
                <h1>WHO WE SERVE</h1>
                <p style={{color: "rgba(80,170,163,0.5)"}}>_____</p>
            <div className="why">

                <div className="col-md-4 col-lg-4 why2">
                <i className="fa fa-free-code-camp icoon" aria-hidden="true"></i>
                <h1>First Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                <div className="col-md-4 col-lg-4 why2">
                <i class="fa fa-cube icoon" aria-hidden="true"></i>
                    <h1>Second Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                <div className="col-md-4 col-lg-4 why2">
                <i class="fa fa-hourglass icoon" aria-hidden="true"></i>
                <h1>Third Language</h1>
                    <p> Design and facilitate employer branding activities on and off campus</p>

                </div>

                </div>
            </div>
        </section>


        <section className="text-center Servise">
            <div className="container">
                <p style={{color: "white"}}>_____</p>
            <div className="service1">

                <div className="col-md-3 col-lg-3 service2">
                <h1 className="service2">15+ <span>ALL COURSES</span></h1>
                </div>

                <div className="col-md-3 col-lg-3 service2">
                    <h1 className="service2">10+ <span>ALL INSTRUCTORS</span></h1>

                </div>

                <div className="col-md-3 col-lg-3 service2">
                <h1 className="service2">5000+ <span>ALL STUDENTS</span></h1>

                </div>

                <div className="col-md-3 col-lg-3 service2">
                <h1 className="service2">30+ <span>ALL LANGUAGES</span></h1>

                </div>
                </div>
            </div>
        </section>



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



        


    </Fragment>

    )
  }
}

export default Content;