import Navbar from "./Navbar";
import Footer from "./Footer";


// import Img1 from './img/image1.jpg';
import Img2 from './img/image2.webp';
import Img3 from './img/image3.webp';
import Img4 from './img/image4.webp';
import Img5 from './img/image5.webp';
import Img6 from './img/image6.webp';
import Img7 from './img/image7.webp';
import Img8 from './img/image8.webp';
import Img9 from './img/image9.webp';
import Img10 from './img/image10.webp';
import Img11 from './img/image11.webp';
import Img12 from './img/image12.webp';
import Img13 from './img/image13.webp';
// import logo from './img/logo1.jpg';
import logo1 from './img/logo1.jpg';

import Img15 from './img/image15.webp';
import Img16 from './img/image16.webp';
import Img17 from './img/image17.webp';
import Img18 from './img/image18.webp';


import { Link } from "react-router-dom";

export default function Home() {
    const handleImageClick = () => {
        // Show an alert message
        alert("Are you sure you are logged in? You need to log in to access the services of this hospital.");
        
    }
    return (
        <div>
            <Navbar />

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Img1" style={{fontFamily : "EB Garamond", marginTop : -19}}>
                <center style={{ marginTop: 180, color: 'white' }}>
                    <h1><i><u>DMC Hospital Ludhiana</u></i></h1>
                    <h4 className="para">YOUR HEALTH IS OUR PRIORITY</h4>
                    <Link to="/Contact"><input type={'submit'} className="btn btn-primary" value={'Contact Us'} /></Link>
                </center>
            </div>



            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="9" style={{ fontFamily: "EB Garamond", textDecoration: 'underline' }}>
                <center style={{ fontSize: 40, fontFamily: "EB Garamond" }}>
                    <p><b>Our Specialities</b></p>
                </center>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Urology"><img src={Img2} className="img-responsive"
                    onClick={handleImageClick} />
                        <p>Urology</p></Link>
                    {/* <Link to="/Services"><button>Enquire Now</button></Link> */}
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Nephrology"><img src={Img3} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Nephrology</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Internal"><img src={Img4} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Internal Medicine</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Orthopedics"><img src={Img5} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Orthopedics</p></Link>
                </div>
            </div>


            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Mother"><img src={Img6} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Mother and Child</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Oncology"><img src={Img7} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Oncology/Cancer Care</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Brain"><img src={Img8} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Brain and Spain</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Gastroenterology"><img src={Img9} className="img-responsive" 
                      onClick={handleImageClick} />
                        <p>Gastroenterology</p></Link>
                </div>

            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ fontFamily: "EB Garamond", textDecoration: 'underline' }}>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Accident"><img src={Img10} className="img-responsive" />
                        <p>Accident/Emergency</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Transplant"><img src={Img11} className="img-responsive" />
                        <p>Transplant</p></Link>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Critical"><img src={Img13} className="img-responsive" />
                        <p>Critical Care</p></Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Laser"><img src={Img12} className="img-responsive" />
                        <p>Laser Surgery</p></Link>
                </div>


            </div>


            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="container">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6" style={{ marginTop: 60 }} >
                         <img src={logo1} className="img-responsive"/> 
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{ marginTop: 10, fontFamily : "EB Garamond", fontSize : 21, textAlign : "justify" }}>
                        <p>Our healthcare offerings are supported by the team of highly skilled medical professionals with great experience, who have expertise in their respective fields.DMC Hospital Ludhiana is serving the society with its world class facilities and has the privilege for quality medical &amp; surgical treatment revolutionizing the medical treatment in India. The main focus of the hospital is on excellence, in patient care and innovation.  At DMC Hospital Ludhiana every employee has one goal in mind that “Being an DMC Hospital Ludhiana family member it is our moral duty and responsibility to perform our duties with honesty and diligence when it comes to patient care. It is aptly said that “Innovation is thinking in new possibilities.</p>
                    </div>
                </div>
            </div>

             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ fontFamily: "EB Garamond", textDecoration: 'underline' }}>
                <center>
                    <h2><b><u>We Possess</u></b></h2>
                </center>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                    <Link to ="/Physiotherapy"><img src={Img15} className="img-responsive"/>
                        <center>
                            <h2>Physiotherapy Center</h2>
                        </center>
                    </Link>
                </div>
                
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                    <Link to ="/Blood"><img src={Img16} className="img-responsive"/>
                        <center>
                            <h2>Blood Bank</h2>
                        </center>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                    <Link to ="/Diagnostic"><img src={Img17} className="img-responsive"/>
                        <center>
                            <h2>Diagnostic Center</h2>
                        </center>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" >
                    <Link to ="/Pharmacy"><img src={Img18} className="img-responsive" />
                        <center>
                            <h2>Pharmacy Center</h2>
                        </center>
                    </Link>
                </div>

            </div>


            {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ fontFamily: "EB Garamond", textDecoration: 'underline' }}>
                <center style={{ fontSize: 40, fontFamily: "EB Garamond" }}>
                    <p><b>We Possess</b></p>
                </center>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Physiotherapy"><img src={Img15} className="img-responsive" />
                        <center>
                            <h2>Physiotherapy Center</h2>
                        </center></Link>
                </div>
                

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Blood"><img src={Img16} className="img-responsive" />
                        <center>
                            <h2>Blood Bank</h2>
                        </center></Link>
                </div>

                

                {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Diagnostic"><img src={Img17} className="img-responsive" />
                        <center>
                            <h2>Diagnostic Center</h2>
                        </center></Link>
                </div> */}

            {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                    <Link to="/Pharmacy"><img src={Img18} className="img-responsive" />
                        <center>
                            <h2>Pharmacy</h2>
                        </center></Link>
                </div>
            </div>  */}

            




            <Footer/>



        </div>
    )
}