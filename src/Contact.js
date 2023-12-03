import axios from "axios";
import { data } from "jquery";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Contact() {
    var uri = "http://localhost:7000/";

    var navi = useNavigate()
    const[phon, setcot] = useState();
    const[Nm, setnms] = useState();




    function mah(e) {
        e.preventDefault()
        var data = new FormData(e.currentTarget);
        var names = data.get("name");
        var email = data.get("email");
        var message = data.get("message");

        var phone = data.get('phone');

        var reg = /[A-Za-z ]/

        for (var i = 0; i <= names.length; i++) {
            if (reg.test(names[i])) {
                if (i == names.length) {
                    // console.log("alphabets")
                    setnms(names);
                }
                // else{
                // 	alert("enter alphabets only")
                // 	data.get('name')
            } else {
                alert("please enter alphabets")
                e.target.name.focus();
                return (false);
            }

        }

        if(phone.length==10){
            // alert("six")
            setcot(phone);
        }else{
            alert("Please enter the 10 digits phone numbers");
            e.target.phone.focus();
            return (false);
        }

        var obj = {
            Name: names,
            Email: email,
            Phone: phone,
            Message: message

        }
        axios.post(uri + "mahi", obj).then((succ) => {
            console.log(succ);


            if (succ.data == "added") {

                alert("data send succ")
                // console.log(succ.data._id);

            } else {
                alert("not send");
            }
        })

        e.target.reset();

        e.target.email.focus();
    }
    return (

        <div>

            <Navbar />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="c1"></div>
                <center>
                    <h2><b>Contact Us</b></h2>
                </center>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" style={{textAlign : "justify"}}>
                <center>
                    <h3>Information</h3>
                    <p>Contact us to make an order or get more information about any <br />
                        tour or trip you are interested in operators will provide you <br />
                        with all the information about your health.
                    </p>
                </center>
                <div className="col-lg-offset-4">
                    <p className="glyphicon glyphicon-earphone">&nbsp;CallFree:&nbsp;109338388292</p><br />
                    <p className="glyphicon glyphicon-envelope">&nbsp;Contact:&nbsp;dmchospital@gmail.com</p><br />
                    {/* <p className="glyphicon glyphicon-time">&nbsp;Mon-Sat 8:00am-6:00pm</p> */}
                    <p className="">Address : Civil Lines, Ludhiana - 141001 (Tagore Nagar) PUNJAB 141001 </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <form onSubmit={mah}>
                    <div className="form-group">
                        <input type={"text"} className="form-control" name="name" placeholder="Your Name" maxlength="20" required/>
                    </div>
                    <div className="form-group">
                        <input type={"email"} className="form-control" name="email" placeholder="Email" required/>
                    </div>
                    <div className="form-group">
                        <input type={"number"} className="form-control" name="phone" placeholder="Phone" maxlength="10" required/>
                        
                    </div>
                    <div className="form-group">
                        <input type={"text"} className="form-control" name="message" placeholder="Message" required/><br/>
                        <input type={"submit"}  className="btn btn-primary" value="Send Message" />
                    </div>
                  

                </form>

            </div>
        </div>
    )
}