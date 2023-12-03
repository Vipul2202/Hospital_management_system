import Navbar from "./Navbar";
import Footer from './Footer';

import Img12 from './img/image12.webp';

import { Link } from "react-router-dom";



export default function Laser() {
    return(
        <div>
            <Navbar />
            <div className="col-lg-12 col-sm-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                <div className="container">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <img src={Img12} className="img-responsive" />                    
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <center>
                       <h1><u>Laser Surgery</u></h1>
                    </center>

                       <p>Laser surgery is a type of surgery that uses special light beams instead of instruments for surgical procedures.Certain parts of the skin, called chromophones, absorb the light. When these chromophones absorb the light, physical, mechanical, chemical, or temperature changes may occur in the tissue.There are many different types of lasers, including the carbon dioxide laser, the YAG (neodymium, or yttrium aluminum garnet) laser, and the argon laser. Each one works in a different manner and may be used for different treatment options.</p>
                    
                   {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}

                </div>
                        

                        
                </div>  
            </div>
            <Footer/>
        </div>
    )
}