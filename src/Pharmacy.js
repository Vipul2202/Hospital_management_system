
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";

import Img20 from './img/image20.jpg';
import Img21 from './img/image21.webp';
import Img36 from './img/image36.jpg';
import Img37 from './img/image37.webp';
import Img38 from './img/image38.jpg';
import Img39 from './img/image39.jpg';

import { Link } from "react-router-dom";



export default function Pharmacy() {
    return (
        <div>
            <Navbar />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: "rgb(64,192,200)"}}>
            <center>
                    <h1 style={{ color: 'white' }}>Department of Pharmacy</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12' style={{ marginTop: 30 }}>
                    <img src={Img20} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{ fontSize: 26, marginTop: 50, fontFamily: 'EB Garamond', textAlign : "justify" }}>
                    <p>We enrich the lives of the diverse community we serve by being accountable for optimal patient outcomes through exceptional pharmacy practice, innovation, education, research and interdisciplinary collaboration.Hospital pharmacy is the health care service, which comprises the art, practice, and profession of choosing, preparing, storing, compounding, and dispensing medicines and medical devices, advising patients, doctors, nurses and other healthcare professionals on their safe, effective and efficient use.</p>
                    <center><Link to="/Contact"><button className="btn btn-primary" style={{fontSize : 25}}>Contact Us</button></Link></center>
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", textAlign : "justify"}}>
                <div className="container">
                    <h1 style={{color : "rgb(64,192,200)"}}>The missions of the hospital pharmacists:</h1>
                    <ul style={{fontSize : 26}}>
                        <li>To be part of the medication management in hospitals, which encompasses the entire way in which medicines are selected, procured, delivered, prescribed, administered and reviewed to optimise the contribution that medicines make to producing informed and desired outcomes.</li>
                        <li>to enhance the safety and quality of all medicine related processes affecting patients of the hospital to ensure the 7 “rights” are respected : right patient, right dose, right route, right time, right drug with the right information and documentation</li>
                    </ul>
                </div>
            </div>


            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{fontFamily : "EB Garamond", textAlign : "justify", marginTop : 20}}>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{marginTop : 25}}>
                    <img src={Img36} className="img-responsive"/>
                    <h3>About Us</h3>
                    <p style={{fontSize : 18}}>Learn more about how we provide innovative, comprehensive and multidisciplinary pharmacy services for Mass General.</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{marginTop : 25}}>
                    <img src={Img37} className="img-responsive"/>
                    <h3>Divisions</h3>
                    <p style={{fontSize : 18}}>Discover the different teams that make up the Department of Pharmacy at Mass General.</p>
                    
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{marginTop : 25}}>
                    <img src={Img38} className="img-responsive"/>
                    <h3>Pharmacy Residency Programs</h3>
                    <p style={{fontSize : 18}}>The Pharmacy Residency Programs at Mass General are committed to adhering to the most current accreditation standards.</p>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{marginTop : 25}}>
                <img src={Img39} className="img-responsive"/>
                    <h3>Contact Us</h3>
                    <p style={{fontSize : 18}}>Find information about our locations, email addresses and other methods of contact.</p>
                </div>
            </div> */}

            <Footer/>
        
        </div>
    )
}



















// <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", textAlign : "justify" }}>
//                 <div className="container">
//                     <center>
//                         <img src={Img20} className="img-responsive" />
//                         <h2>Our Pharmacy Services</h2>
//                             <p>All Drug Plans Accepted</p>
//                             <p>$2 Co-Pay Fee Waived</p>
//                             <p>Senior Discounts Everyday</p>
//                             <p>Prescription Refill Reminders</p>
//                             <p>Easy Prescription Transfer</p>
//                             <p>Free Medication Review</p>
//                             <p>Free Medication Disposal & Return</p>
//                             <p>Private Counselling Rooms</p>
//                             <p>Wheelchair Accessible Entrance</p>
//                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop : 20}}>
//                             <h2><b>Free Delivery!</b></h2>
//                             <p>We strive to ensure that getting your <br/>prescription to you is made as easy <br/> and accessible as possible. Call <br/> Pharmacy for details!</p>
//                             <Link to="/Contact"><button>Contact Us</button></Link>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{marginTop : 30}}>
//                             <img src={Img21} className="img-responsive" />
//                         </div>
//                     </center>
//                 </div>
//             </div>