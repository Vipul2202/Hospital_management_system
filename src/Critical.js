import Navbar from "./Navbar";
import Footer from './Footer';

import Img13 from './img/image13.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function Critical() {
    return(
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 28}}>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <img src={Img13} className="img-responsive" />                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{textAlign : "justify"}}>
                    <center>
                        <h1><u>Critical Care</u></h1>
                        </center>
                    
                        <p>Critical care is medical care for people who have life-threatening injuries and illnesses. It usually takes place in an intensive care unit (ICU). A team of specially-trained health care providers gives you 24-hour care. This includes using machines to constantly monitor your vital signs. It also usually involves giving you specialized treatments.</p>
                       
                    
                   {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20, fontFamily : "EB Garamond"}}>
                        <center>
                            <h2>Explore our critical care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img25} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                   <h2>Treatment</h2>
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
                        

                        </div>
                </div>  
            </div>
            <Footer/>
        </div>
    )
}