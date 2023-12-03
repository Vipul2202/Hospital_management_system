import Navbar from "./Navbar";
import Footer from './Footer';

import Img10 from './img/image10.webp';
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';


import { Link } from "react-router-dom";



export default function Accident() {
    return(
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{ fontFamily : "EB Garamond", fontSize : 25}}>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <img src={Img10} className="img-responsive" />                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{textAlign : "justify"}}>
                        <center><h2><u>Accident and Emergency</u></h2></center>
                        {/* <h4>Treatment and great care for high-risk health circumstances.</h4> */}
                        <p>The Accident and Emergency Department at Maurya Group of Hospital comprises of team who specialize in managing all kind of emergencies. The hospital has Cardiovascular Life Support Ambulances which are well-equipped with essential life support systems and are managed by highly experienced doctors and trained nurses.  The team provide the extensive care to the patients starting from even before they reach the hospital, and hence increasing the chances of patient survival.</p>
                    
                   {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}

                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20}}>
                        <center>
                            <h2>Explore our accident and emergency care features</h2>
                        </center>

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