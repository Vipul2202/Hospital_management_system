

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from './img/logo.jpg'


export default function Navbar() {
    var uri = "http://localhost:7000";

    var userid = localStorage.getItem('useridlocal');
    console.log(userid)
    const [id, setid] = useState(false);
    function logout() {
        alert("logout");
        localStorage.removeItem("useridlocal");
        setid(false)
    }
    useEffect(() => {
        if (userid) {
            setid(true)
        }
    }, [userid])



    return (
        <div className="navbar navbar-success n1">
            <div className="container-fluid">
                <div className='navbar-header'>
                    <button type="button" class="navbar-toggle white" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar white"></span>
                        <span class="icon-bar white"></span>
                        <span class="icon-bar white"></span>
                    </button>
                    <div className='navbar-brand'>
                        {/* <b>logo</b> */}
                        {/* <a href=""><img src={img1} width={50} height={40} style={{ marginTop: -9 }} /></a> */}

                    </div>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav" style={{ marginLeft: '1%', fontFamily : "EB Garamond", fontSize : 22 }}>
                        <li><Link to="/">Home</Link></li>
                        {/* <li><Link to="/Services">Patient Services</Link></li> */}
                        <li><Link to="/About">About Us</Link></li>
                        <li><Link to="/Services">Services</Link></li>

                        {/* <a className='drop-down'>
                                <li className="dropdown-toggle" data-toggle="dropdown">
                                    <Link to="/Services">Patient Services</Link><span className='caret'></span>
                                </li>
                                <ul className='dropdown-menu '>
                                    <li><a href="#1">Outpatient Services</a></li>
                                    <li><a href="#2">Health Check-ups</a></li>
                                    <li><a href="#3">Visitor Information</a></li>
                                    <li><a href="#4">Visitor’s Pass</a></li>
                                </ul>

                            </a> */}
                        {/* <li>
                            <a className='drop-down'>
                                <li className="dropdown-toggle" data-toggle="dropdown">
                                    <Link to="/About">About Us</Link><span className='caret'></span>
                                </li>
                                <ul className='dropdown-menu '>
                                    <li><a href="#5">Founder's Message</a></li>
                                    <li><a href="#6">Mission & Vision</a></li>
                                    <li><a href="#7">Infrastructure and Facilities</a></li>
                                    <li><a href="#8">Health Byte</a></li>
                                </ul>

                            </a>
                        </li> */}
                        
                        {/* <li><a href="#9">Our Specialties</a></li> */}
                        
                        <li><Link to="/Contact">Contact us</Link></li>
                        {/* <li><Link to="/Booking">Book Appointment</Link></li> */}
                    </ul>
                    {id ? (
                        <ul className='nav navbar-nav navbar-right'>

                            <li onClick={logout}><Link to="">Logout</Link></li>
                        </ul>
                    ) : (
                        <ul className='nav navbar-nav navbar-right'  style={{fontFamily : "EB Garamond", fontSize : 22}}>
                            <li className="hv"><Link to="/Register">Register</Link></li>
                            <li className="hv"><Link to="/login">Login</Link></li>
                        </ul>
                    )}
                </div>
            </div>

            {/* <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact us</Link></li>
            </ul> */}

            {/* <ul className="nav navbar-nav navbar-right">
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Login">Login</Link></li>
                
            </ul> */}
        </div>
    )

}