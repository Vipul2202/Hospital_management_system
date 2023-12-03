import Navbar from "./Navbar";
import Footer from "./Footer";

import Img2 from './img/image2.webp';
import Img3 from './img/image3.webp';
import Img5 from './img/image5.webp';
import Img6 from './img/image6.webp';
import Img8 from './img/image8.webp';
import Img9 from './img/image9.webp';
import Img10 from './img/image10.webp';
import Img19 from './img/image19.webp';
import Img32 from './img/image32.webp';
import Img33 from './img/image33.webp';
import Img34 from './img/image34.webp';
import Img35 from './img/image35.webp';


import { Link } from "react-router-dom";



export default function Services() {
    return(
        <div>
            <Navbar />
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'id = "1" style={{ backgroundColor: "rgb(64,192,200)" }}>
                <center>
                    <h1 style={{ color: 'white' }}>Outpatient Services</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30}}>
                    <img src={Img32} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond',textAlign : "justify" }}>
                    <ul>
                        <li>30 well equipped, centrally air-conditioned consulting rooms.</li>
                        <li>Priority Clinics for Fast Track Consultation Individual patient waiting areas to maximize patient & visitor's comfort as well as privacy.</li>
                        <li>Computerized OPDS for patient's details recording and archiving systems.</li>
                        <li>Morning and Evening OPDs to suit patient convenience.</li>
                    </ul>
                    <center><Link to="/Contact"><button className="btn btn-primary" style={{fontSize : 20}}>Contact us</button></Link></center>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="container">
                <h1 style={{color: "rgb(64,192,200)"}}>Appointments</h1>
                <ul style={{fontSize : 22, textAlign : "justify"}}>
                    <li>All patients need to be registered prior to consultation. You can book an appointment online. The registration fee (one time charge) is Rs. 100/. You will be issued a UHID card which is valid for all services of the hospital. Your medical record folder will be retained with the hospital.</li>
                    <li>If you are already registered, kindly mention your Maurya Group of Hospital UHID number when taking an appointment.</li>
                    <li>In case you are a non-appointment/walk-in patient, you may have to wait to see the doctor. You can visit our OPD from Monday - Saturday from 9.00am to 8.30pm.</li>
                </ul>
            </div>
            </div>



            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' id = "2" style={{ backgroundColor: "rgb(64,192,200)" }}>
                <center>
                    <h1 style={{ color: 'white' }}>Health Check-ups</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30, textAlign : "justify" }}>
                    <img src={Img33} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond',textAlign : "justify" }}>
                    <p>Good health is the key to a happy and fruitful life; it is also the most neglected asset. Our lifestyle today is ridden with unnecessary stress, irregular working hours,  poor eating habits, late night partying and inadequate rest. All these coupled with high pollution levels result in physical and psychological health problems.</p>
                    
                    <center><Link to="/Contact"><button className="btn btn-primary" style={{fontSize : 20}}>Contact us</button></Link></center>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign : "justify"}}>
                <div className="container">
                    <h1 style={{color : "rgb(64,192,200)"}}>Wellness Center at Maurya Group of Hospital</h1>
                    <p style={{fontSize : 20}}>We have an exclusively designed space for Health checkup where all diagnostic Services are available under one roof.</p>
                    <p style={{fontSize : 20}}>We offer several preventive health check packages to suit specific needs. We do make customized packages for corporate and insurance companies based on individual requirements. The aim of these packages is to promote good health, prevent disease and facilitate early diagnosis and treatment, thereby paving the way to “WELLNESS”.</p>
                    <center><h1 style={{color : "rgb(64,192,200)"}}>Health Check Packages:</h1></center>
                    <br/>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul style={{fontSize : 20}}>
                            <li>Heart Checkup</li>
                            <li>Thyroid Checkup</li>
                            <li>Child Health Check</li>
                            <li>Well Women Screening</li>
                            <li>Diabetes Check- up</li>
                            <li>Cancer Screening  (Male)</li>
                            <li>Cancer Screening  (Female)</li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul style={{fontSize : 20}}>
                            <li>Health Check-up</li>
                            <li>Basic Health Check</li>
                            <li>Master Health Check -Men</li>
                            <li>Master Health Check -Women</li>
                            <li>Executive Health Check - Men</li>
                            <li>Executive Health Check-Women</li>
                            <li>Liver Checkup</li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' id = "3" style={{ backgroundColor: "rgb(64,192,200)" }}>
                <center>
                    <h1 style={{ color: 'white' }}>Visitor Information</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30, textAlign : "justify" }}>
                    <img src={Img34} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond',textAlign : "justify" }}>
                    <p>The tradition and experience of two and a half decades in delivering affordable healthcare services in a patient-friendly environment with a strong belief in ethics and transparency is now a medical practice at Maurya Group of Hospital. We have established ourselves as a comprehensive healthcare system not just in Vishakhapatnam.</p>
                    
                    <center><Link to="/Contact"><button className="btn btn-primary" style={{fontSize : 20}}>Contact us</button></Link></center>

                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond"}}>

                    <center><h1 style={{color : "rgb(64,192,200)"}}>Visitor Information</h1></center>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="container">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{border : "2px solid Green", height : 220, marginRight : 80, textAlign : "justify"}}>
                                <center><h3>Visiting Hours</h3></center>
                                <ul>
                                    <li>The hospital visiting hours - Evening - 4.00 pm to 7.00 pm</li>
                                    <li>The ICU visiting hours - Evening - 4.00 pm to 7.00 pm</li>
                                    <li>Visiting hours on Sundays and Public Holidays - 10.00 am to 1.00 pm</li>
                                </ul>
                        
                            </div>
                            

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" id="4" style={{border : "2px solid Green", height : 220, marginRight : 80}}>
                                <center><h3>Visitor’s Pass</h3></center>
                                <ul>
                                    <li>You are requested to collect the Visitor’s and Attendant’s pass from the reception.</li>
                                    <li>Only one visitor pass is issued per patient.</li>
                                    <li>A reliever pass can be collected from the front office desk at the time of admission procedure.</li>
                                </ul>

                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3" style={{border : "2px solid Green", height : 220, marginRight : 80}}>
                                <center><h3>Admission</h3></center>
                                <ul>
                                    <li>Maurya Consultant advises admission</li>
                                        Or
                                    <li>Your personal doctor recommends hospitalisation</li>
                                        <center>Or</center>
                                    <li>Maurya Casualty Department advises admission.</li>
                                </ul>
                        
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{ backgroundColor: "rgb(64,192,200)", marginTop : 20 }}>
                <center>
                    <h1 style={{ color: 'white' }}>CORPORATE</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30, textAlign : "justify" }}>
                    <img src={Img35} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond',textAlign : "justify" }}>
                    <p>As a patient seeking medical treatments in a hospital, you might be interested in knowing about cashless mediclaim. We have tie-ups with various insurance companies for easy payments and would be glad to discuss payment options with your insurance provider, in case your policy covers services rendered away from your place of residence.</p>
                    
                    <center><Link to="/Contact"><button className="btn btn-primary" style={{fontSize : 20}}>Contact us</button></Link></center>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="container">
                    <center><h1 style={{color : "rgb(64,192,200)"}}>Visakhapatnam</h1></center>
                    <br/>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul style={{fontSize : 20}}>
                            <li>Aarogyasri Health Scheme</li>
                            <li>Airports Authority Of India</li>
                            <li>Andhra Pradesh Special Protection Force</li>
                            <li>APEPDCL</li>
                            <li>Arogya Sahayata</li>
                            <li>Bhabha Atomic Research Centre</li>
                            <li>Chief Qualty Assurance Establishment</li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <ul style={{fontSize : 20}}>
                            <li>Indian Institute Of Petroliun & Energy (Iipe)</li>
                            <li>Indian Rare Earth Limited</li>
                            <li>Material Organization Visakhapatnam</li>
                            <li>National Mineral Development Corporation Ltd</li>
                            <li>South Central Railway</li>
                            <li>Station Health Organization</li>
                            <li>Steel Authority Of India Limited</li>
                        </ul>
                        </div>
                        </div>
                </div>
            </div>


            <Footer/>
            
        </div>
    )}

















//     <center>
//     <h1><b>Our Services</b></h1>
// </center>
// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img2} className="img-responsive" />                    
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//         <h2>Urology</h2>
//         <h4>Diagnosis and Treatment of Urinary Disorders.</h4>
//         <p>The urology Department of Aykai Hospital offers a wide range of services related to urological diseases. The Qualified & Expert team of Doctors are well experienced in the field of Laser Techniques, performs Laser surgery with minimal invasive techniques which enables patient to rehabilitate much early as compared to the conventional methods . The hospital is well equipped with modern facilities & latest equipments to treat all urological disorders which enables the team to provide comprehensive urology sevices.</p>
//         </center>
//     </div>
//     </div>  
// </div>

// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Nephrology</h2>
//             <h4>Diagnosis and treatment of of kind of kidney disorders.</h4>
//             <p>The Nephrology department of Aykai is highly  focused on kidneys and its disorders. The team is well trained to diagnose and treat all kinds of kidney diseases. We have expert team of kidney transplant, nephrologist and urologist. At Aykai, we provide dialysis support, advanced diagnostics, comprehensive pre-operative evaluation.  Latest facilities available in surgical procedures, and complete post-operative care to minimize chances of infection.</p>
//         </center>
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img3} className="img-responsive" />                    
//     </div>
    
//     </div>
// </div>

// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img5} className="img-responsive" />                    
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Orthopedics and Joint Replacement</h2>
//             <h4>Diagnosis and Treatment of Orthopedics Disorders.</h4>
//             <p>This department is specifically dedicated to treat and cure issues related to the musculoskeletal system. In this, we look into resolving diseases related to bones, joints, ligaments, muscles, nerves.</p>
//         </center>
//     </div>
//     </div>
// </div>

// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Mother and Child</h2>
//             <p>The Mother and Child department of Aykai Hospital is highly focused on the comprehensive care for both mother and a child. The team is well trained to diagnose and treat problems a mother facing during and after pregnancy along with the health issues, a child would face after a birth . Our doctors are highly experienced and skilled to cater all the disorders related to mother and a child.</p>
//         </center>
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img6} className="img-responsive" />                    
//     </div>
//     </div>
// </div>



// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img8} className="img-responsive" />                    
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Brain and Spine</h2>
//             <h4>Diagnosis and treatment of all kind of neurological and spinal disorders</h4>
//             <p>This department of Aykai Hospital is focused on the nervous system and spinal disorders. The team is well trained to diagnose and treat problems in brain and spine.</p>
//         </center>
//     </div>
//     </div>
// </div>
// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
    
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Gastroenterology</h2>
//             <h4>Diagnosis and Treatment of Gastroenterological Disorders</h4>
//             <p>The Gastroenterology department of Aykai Hospital is the branch of medicine focused on the digestive system and its disorders. The team is well trained to diagnose and treat problems in your gastrointestinal (GI) tract and liver. These doctors also do routine procedures such as colonoscopies, which look at the inside of your colon.</p>
//         </center>
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img9} className="img-responsive" />                    
//     </div>
//     </div>
// </div>

// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img10} className="img-responsive" />                    
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Accident and Emergency</h2>
//             <h4>Treatment and great care for high-risk health circumstances.</h4>
//             <p>The Accident and Emergency Department at Aykai  comprises of team who specialize in managing all kind of emergencies. The hospital has Cardiovascular Life Support Ambulances which are well-equipped with essential life support systems and are managed by highly experienced doctors and trained nurses.  The team provide the extensive care to the patients starting from even before they reach the hospital, and hence increasing the chances</p>
//         </center>
//     </div>
//     </div>
// </div>

// x

// <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12">
//     <div className="container">
    
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <center>
//             <h2>Transplant</h2>
//             <p>The Transplant Department at Aykai Hospital provides the most sophisticated and clinically effective treatments to adults and children for whom a transplant is a must . Aykai Hospital Offers both Living & Cadaver Transplant for patients with end stage Renal & Liver Diseases. The Hospital has the most experienced and well qualified Transplant Team. The aim is to provide State of the Art facilities using evidence based guidelines & Protocols .The patients are being offered Transplantation and treatment for comprehensive kidney & Liver Diseases for patients under one roof.</p>
//         </center>
//     </div>
//     <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
//         <img src={Img19} className="img-responsive" />                    
//     </div>
//     </div>
// </div>




