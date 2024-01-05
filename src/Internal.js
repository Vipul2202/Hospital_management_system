
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from './Footer';

import Img4 from './img/image4.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";



export default function Internal() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{ fontFamily : "EB Garamond", fontSize : 23, textAlign : "justify" }}>
                <div className="container">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <img src={Img4} className="img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <center>
                            <h1><u>Internal Medicine</u></h1>
                            </center>
                        
                            {/* <h3>Diagnose and treatment of all acute and chronic health disorder</h3> */}
                            <p>Internal medicine department of Maurya Group of hospital aims to provide best overall care to adults, geriatric, surgical and medical patients. By using multidisciplinary teamwork approach guided by evidence based practice.We Provide quality compassionate care. While using newest treatments. We specialize in evaluation, diagnosis and management of routine and complex diseases and conditions in patients. Along with preventive health checkups. Expert care for a full spectrum of problems including heart diseases, lung diseases, gastrointestinal problems, kindly problems, endocrine disorders like diabetes, thyroid disorders.</p>

                            {/* <Link to="/Booking"><input type={'submit'} className="btn btn-primary" value={'Book Appointment'} /></Link> */}

                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20, fontFamily : "EB Garamond"}}>
                        <center>
                            <h2>Explore our internal medicine care and features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Common Disorders</h2>

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

                </div>
            </div>
            <Footer/>
        </div>
    )
}