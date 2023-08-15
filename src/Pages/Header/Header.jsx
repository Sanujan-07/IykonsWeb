import React from 'react'
import '../assets/vendor/animate.css/animate.min.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/remixicon/remixicon.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../css/Header.css'
export default function Header() {
  return (
    <>
    
    {/* ======= Top Bar ======= */}
    <section id="topbar" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center">
            <a href="mailto:contact@example.com">info@iykons.com</a>
          </i>
          <i className="bi bi-phone d-flex align-items-center ms-4">
            <span>+44 20 3598 2904</span>
          </i>
        </div>
        <div className="social-links d-none d-md-flex">
          <a href="#" className="twitter">
            <i className="bi bi-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="linkedin">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </section>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="#">
              <span>IYKONS</span>
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto " href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#">
                Blog
              </a>
            </li>
            
            <li className="dropdown">
              <a href="#">
                <span>Services</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">Technology & Innovation</a>
                </li>
                
                <li>
                  <a href="#">Accounting & Finance</a>
                </li>
                <li>
                  <a href="#">Digital Marketing & Branding</a>
                </li>
                <li>
                  <a href="#">Business & Personal Finance</a>
                </li>
                <li>
                  <a href="#">Business Support & Consultancy</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Product</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">IYPAY</a>
                </li>
                
                <li>
                  <a href="#">IYCONNECT</a>
                </li>
                <li>
                  <a href="#">IYCLOCK</a>
                </li>
               
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
    {/* End Header */}
    </>
  )
}
