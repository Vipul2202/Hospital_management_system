import Navbar from "./Navbar";
import Footer from './Footer';

import Img3 from './img/image3.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from "react-router-dom";



export default function Nephrology() {
    return(
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src={Img3} className="img-responsive" />                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <center>
                        <u><h1>Nephrology</h1></u>
                    </center>

                        {/* <h4>Diagnosis and treatment of of kind of kidney disorders.</h4> */}
                        <p>The Nephrology department of Maurya Group of Hospital is highly  focused on kidneys and its disorders. The team is well trained to diagnose and treat all kinds of kidney diseases. We have expert team of kidney transplant, nephrologist and urologist. At Maurya Group of Hospital, we provide dialysis support, advanced diagnostics, comprehensive pre-operative evaluation.Latest facilities available in surgical procedures, and complete post-operative care to minimize chances of infection.</p>
                   {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}

                </div>
                </div>  
            </div>


            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{ fontFamily : "EB Garamond", marginTop : 20}}>
                        <center>
                            <h2>Explore our nephrological care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Nephrological Disorders</h2>
                                   
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 u2">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img24} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Clinical Team</h2>
                                </div>
                            </div>
                        </div>
                        

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2 u3">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img25} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                   <h2>Test and Treatment</h2>
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

            <Footer/>
        </div>
    )
}