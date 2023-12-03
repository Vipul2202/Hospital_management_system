import Navbar from "./Navbar";
import Footer from './Footer';

import Di from "./img/diag.png";
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";


export default function Diagnostic() {
    return(
        <div>
            <Navbar />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <img src={Di} className="img-responsive" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <center>
                        <h1><u>Diagnostic Center</u></h1>
                        </center>

                        <p>A healthcare “value chain” is triggered when screening, or the suspicion of disease, leads to the application of a diagnostic test. The information obtained from the test may provide more certainty about the best course of action and thus improve patient management (i.e., intrinsic value of information). The information obtained may lead to further testing or, on the contrary, to no further action [5, 6]. It may also lead to treatment, or to a better choice of the most (cost-)effective treatment for a specific patient, thereby potentially avoiding the use of an ineffective treatment. Diagnostic information may also support decisions about family planning, future plans, or end-of-life patient care.</p>
                        {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{marginTop : 20}}>
                        <center>
                            <h2>Explore our diagnostic care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Diagonstic Disorders</h2>
                                   
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
                <Footer/>
        </div>
    )}