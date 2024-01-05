
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Footer from './Footer';

import Mot1 from './img/mother.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";



export default function Mother() {
    return(
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{ fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <img src={Mot1} className="img-responsive" />                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <center>
                       <h1><u>Mother and Child</u></h1>
                       </center>
                    
                       <p>The Mother and Child department of Maurya Group of Hospital Hospital is highly focused on the comprehensive care for both mother and a child. The team is well trained to diagnose and treat problems a mother facing during and after pregnancy along with the health issues, a child would face after a birth . Our doctors are highly experienced and skilled to cater all the disorders related to mother and a child.</p>
                    
                   {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}

                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{ fontFamily : "EB Garamond", marginTop : 20 }}>
                        <center>
                            <h2>Explore our mother and child care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Mother/Child Health Issues</h2>
                                   
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
                                   <h2>Treatment</h2>
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



















// import Navbar from "./Navbar";
// import Img4 from './img/image4.webp';
// import { Link } from "react-router-dom";



// export default function Internal() {
//     return(
//         <div>
//             <Navbar />
//             <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//                 <div className="container">
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//                     <img src={Img4} className="img-responsive" />                    
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//                     <center>
                       
                    
//                    <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link>

//                     </center>
//                 </div>
//                 </div>  
//             </div>
//         </div>
//     )
// }