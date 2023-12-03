import Navbar from "./Navbar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const uri = "http://localhost:7000";
  const navigate = useNavigate();
  const [Nm, setNms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('You are successfully logged in Now You are have take  services of this hospital !!');
    setTimeout(() => {
      window.location.href = '/';
    }, 700); 

    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const username = data.get('username');
    const email = data.get('email');
    const password = data.get('password');
    const password2 = data.get('password2');

    // Your validation and Axios logic here...

    // Instead of calling axios.post here, you should separate your API calls and handle responses accordingly.
    // Then, you can use `navigate("/Login")` when needed.

    // Reset the form and focus on the name field
    e.target.reset();
    e.target.name.focus();
  };

  return (
    <>
      <Navbar />
      <div className="img1">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-10 ">
          <div className="alert alert-info r1">
            <center><h2>LOGIN</h2></center>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type={'text'} name='email' className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type={'password'} name='password' className="form-control" placeholder="Password" maxLength="8" required />
              </div>
              <div className="form-group">
                <input type={'submit'} className="btn btn-primary" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
