import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function Booking() {

    var uri = "http://localhost:7000/";
    var navi = useNavigate();
    const[con, setcot] = useState();
    const[Nm, setnms] = useState();




    function mah(e){
        e.preventDefault()
        var data = new FormData(e.currentTarget);
        var names = data.get("name");
        var date = data.get("date1");
        var contact = data.get('contact');
        var special = data.get("special");
        var disease = data.get("disease");
    

        if(contact.length==10){
            // alert("six")
            setcot(contact);
        }else{
            alert("Please fill the !0 digits phone numbers");
            e.target.contact.focus();
            return (false);
        }

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

        var a = data.get('date1');

        var utc = new Date().toJSON().slice(0, 10);

        if (a == utc) {
            // alert("current date")
        }
        else if (a > utc) {
            // alert("future date")
        var bookingdata = {Name : names, Date : date, Contact : contact, Special : special, Disease : disease}
        axios.post(uri+"booking", bookingdata).then((succ)=>{
            console.log(succ);
            alert('data is added');
                console.log("Data successfully send");
        })
        } else if (a < utc) {
        alert("please fill the correct date of appointment")
        } else {
            // alert("enter date")
        }
        

        e.target.reset();

        e.target.name.focus();
}

    return (
        <>

           

        <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 Img27">
            <div className="container">
                
            
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
            <div className="alert alert-info r1">

            <center>
                <h2>Appointment Form</h2>
            </center>
           <form onSubmit={mah}>
            <div className="form">
                <div className="form-group df">
                    <label>Name: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input className="form-control" type={"text"} name="name" placeholder="enter your name" maxlength="20"/><br/>

            
                <label>Appointment Date:</label>&nbsp;&nbsp;
                <input className="form-control" type={"date"} name="date1" /><br/>
            
            
            
                <label>Contact:</label>&nbsp;&nbsp;&nbsp;&nbsp;    
                <input className="form-control" type={"number"} name="contact" placeholder="Contact Number" maxlength="10"/><br/>


                <label>Our Specialities:</label>&nbsp;&nbsp;&nbsp;&nbsp;    
                <select className='form-control' name='special'>
                    <option>Urology</option>
                    <option>Nephrology</option>
                    <option>Internal Medicine</option>
                    <option>Orthopedics</option>
                    <option>Mother/Child Care</option>
                    <option>Oncology/Cancer Care</option>
                    <option>Brain and Spain</option>
                    <option>Gastroenterology</option>
                    <option>Accident/Emergency</option>
                    <option>Transplant</option>
                    <option>Critical Care</option>
                    <option>Laser Surgery</option>
                </select><br/>

            
                {/* <label>Disease:</label>&nbsp;&nbsp;&nbsp;&nbsp;    
                <input className="form-control" type={"text"} name="disease" placeholder="" maxlength="20"/><br/> */}
            </div>
            </div>

            <div className="form-group">
                <center>
                <input type={'submit'} className="btn btn-primary" value={'Book Now'} />
                </center>
            </div>
            </form>
            </div>
            </div>

            






            </div>
        </div>
        </>
    )
}