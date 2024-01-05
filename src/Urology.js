
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from './Footer';

import Img2 from './img/image2.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';



import { Link } from "react-router-dom";



export default function Urology() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                <div className="container">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <img src={Img2} className="img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <center>
                            <h2><u>Urology</u></h2>
                        </center>
                        
                            {/* <h4>Diagnosis and Treatment of Urinary Disorders.</h4> */}
                            <p>The urology Department of Maurya Group of Hospital offers a wide range of services related to urological diseases. The Qualified & Expert team of Doctors are well experienced in the field of Laser Techniques, performs Laser surgery with minimal invasive techniques which enables patient to rehabilitate much early as compared to the conventional methods . The hospital is well equipped with modern facilities & latest equipments to treat all urological disorders which enables the team to provide comprehensive urology sevices.</p>
                            {/* <Link to="/Booking"><input type={'submit'} className="btn btn-primary" value={'Book Appointment'} /></Link> */}

                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20}}>
                        <center>
                            <h2>Explore our urology care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Urologic Diseases</h2>
                                   
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
                                    <h2>Urology Testimonials</h2>
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