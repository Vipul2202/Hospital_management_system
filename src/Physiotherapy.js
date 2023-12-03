import Navbar from "./Navbar";
import Footer from './Footer';

import Phy from "./img/physio.webp";
import Img23 from './img/image23.webp';
import Img24 from './img/image24.webp';
import Img25 from './img/image25.webp';
import Img26 from './img/image26.webp';

import { Link } from "react-router-dom";


export default function Physiotherapy() {
    return(
        <div>
            <Navbar />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <img src={Phy} className="img-responsive" width={6000} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <center>
                        <h2><u>Physiotherapy / Physical Therapy</u></h2>
                        </center>
                        <p>Physiotherapy as described by World Physiotherapy is a health care profession concerned with human function and movement and maximising physical potential. It is concerned with identifying and maximising quality of life and movement potential within the spheres of promotion, prevention, treatment/intervention, habilitation and rehabilitation. It uses physical approaches to promote, maintain and restore physical, psychological and social well-being, taking into account variations in health status.  It is science-based, committed to extending, applying, evaluating and reviewing the evidence that underpins and informs its practice and delivery.  The exercise of clinical judgement and informed interpretation is at its core.</p>
                        {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u1" style={{fontFamily : "EB Garamond", marginTop : 20}}>
                        <center>
                            <h2>Explore our physiotherapy care features</h2>
                        </center>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 u2">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <img src={Img23} className="img-responsive" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                    <h2>Physiotherapy Disorders</h2>
                                   
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