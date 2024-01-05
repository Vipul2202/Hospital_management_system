
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Doctor() {
return(
    <div>
        <center>
            <h2><u><b>Doctor Login</b></u></h2>
        </center>
        <div className="container">

        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">

            <form >
                <div className="form-group">
                    <input type={'text'} className="form-control" placeholder="Doctor Name" name="name" /><br/>
                    <input type={'text'} className="form-control" placeholder="Doctor Qualification" name="qual" /><br/>
                    <input type={'text'} className="form-control" placeholder="Specialities" name="spec" /><br/>
                    
                    <input type={'text'} className="form-control" placeholder="Contact" name="con" /><br/>
                    <input type={'text'} className="form-control" placeholder="User ID" name="id" /><br/>
                    <input type={'password'} className="form-control" placeholder="Password" name="password" /><br/>
                    <center><input type={'submit'} className="btn btn-primary"  value="Submit" /></center>



                </div>

                

            </form>
            </div>
            </div>
        </div>





    </div>
)
}