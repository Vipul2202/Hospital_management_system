import Navbar from "./Navbar";
import Footer from './Footer';

import Bl from "./img/blo.jpg";
import { Link } from "react-router-dom";


export default function Blood() {
    return(
        <div>
            <Navbar />
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{fontFamily : "EB Garamond", fontSize : 25, textAlign : "justify"}}>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <img src={Bl} className="img-responsive" width={6000} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <center>
                        <h1><i>Blood Bank</i></h1>
                        <p>Maurya Group of Hospital has its own Blood Bank which runs 24 hrs x 365 days. Where blood and blood components are stored under ideal conditions with temperature control and alarm facilities, following stringent screening procedures. The Blood Bank accepts blood on a voluntary donor/ replacement basis only. The technologically advanced blood transfusion unit carries out all therapeutic procedures & ensures availability of blood & blood components round the clock. Blood donation is undertaken during all working days from 9 am to 5.00 pm.</p>

                        {/* <Link to="/Booking"><input type={'submit'}  className="btn btn-primary" value={'Book Appointment'}  /></Link> */}
                        </center>
                    </div>
                </div>
                <Footer/>
        </div>
    )}