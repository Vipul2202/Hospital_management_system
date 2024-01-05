
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function Footer() {
    return(
        <div>
            
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12 f1" style={{marginTop : 20}}>
                <center>
                    <h1><i><u>DMC Hospital Ludhiana</u></i></h1>
                </center>
                <div className="col-lg-3 col-sm-3 col-xs-6 col-md-3">
                    {/* <h2 style={{ color : "black" }}>About Us</h2> */}
                    <p ><a href="/about" style={{ color : "white" }}>About Us</a></p>
                    <p><a href="/contact" style={{ color : "white" }}>Contact Us</a></p>
                    <p><a href="/Services" style={{color : "white"}}>Services</a></p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                {/* <h2 style={{ color : "black" }}>News</h2> */}
                <p><a href="/Pharmacy" style={{color : "white"}}>Pharmacy</a></p>
                <p><a href="" style={{color : "white"}}>News & Events</a></p>
                <p><a href="/Booking" style={{color : "white"}}>Appointment</a></p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                {/* <h2 style={{ color : "black" }}>More</h2> */}
                <p><a href="" style={{color : "white"}}>Diseases</a></p>
                <p><a href="" style={{color : "white"}}>Facilities</a></p>
                <p><a href="" style={{color : "white"}}>Infrastructure</a></p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 co-xs-6">
                {/* <h2 style={{ color : "black" }}>Subscribe</h2> */}
                <p><a href="" style={{color : "white"}}>Discover the latest stories and inspirations from our world, right in your inbox.</a></p>
                <p style={{color : "white"}}>Privacy Policy</p>
                <p style={{color : "white"}}>Terms and Conditions</p>
                

                </div>
                
            </div>
        </div>
    )}
