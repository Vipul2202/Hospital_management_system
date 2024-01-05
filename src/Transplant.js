

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from './Footer';

import Img19 from './img/image19.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";



export default function Transplant() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                <div className="container">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <img src={Img19} className="img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                            <center>
                                <h1><u>Transplant</u></h1>
                            </center>

                                <p>The Transplant Department at Maurya Group of Hospital provides the most sophisticated and clinically effective treatments to adults and children for whom a transplant is a must . Maurya Group of Hospital Offers both Living & Cadaver Transplant for patients with end stage Renal & Liver Diseases. The Hospital has the most experienced and well qualified Transplant Team. The aim is to provide State of the Art facilities using evidence based guidelines & Protocols .The patients are being offered Transplantation and treatment for comprehensive kidney & Liver Diseases for patients under one roof.</p>

                            {/* <Link to="/Booking"><input type={'submit'} className="btn btn-primary" value={'Book Appointment'} /></Link> */}

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20}}>
                        <center>
                            <h2>Explore our urology care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 u2">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img24} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Clinical Team</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 u2">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img26} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Testimonials</h2>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}