import Navbar from './Navbar';
import Footer from './Footer';

import Img28 from './img/image28.webp';
import Img29 from './img/image29.webp';
import Img30 from './img/image30.webp';
import Img31 from './img/image31.webp';

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' id = "5" style={{ backgroundColor: "rgb(64,192,200)" }}>
                <center>
                    <h1 style={{ color: 'white' }}>Founder's Message</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30 }}>
                    <img src={Img28} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond' }}>
                    <p>It is indeed a great privilege for me and my team to present Maurya Group of Hospital, Visakhapatnam.We bring the tradition and experience of three and a half decades in delivering affordable healthcare services in a patient-friendly environment, with a strong belief in ethical and transparent medical practices. Maurya Group of Hospital has established itself as a comprehensive healthcare system in Visakhapatnam, providing multi-speciality tertiary care services to more than 50 million people across six states.
                        We offer a blend of the finest medical and surgical skills delivered with compassion and a patient-centric approach,within the reach of everyone.</p>
                </div>
            </div>

            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' style={{ backgroundColor: "rgb(64,192,200)", marginTop: 20 }}>
                <center>
                    <h1 style={{ color: 'white' }}>Mission & Vision</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30 }}>
                    <img src={Img29} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' id='6' style={{ fontSize: 25, marginTop: 50, fontFamily: 'EB Garamond' }}>
                    <h2 style={{ color: "rgb(20,70,157)" }}>Vision</h2>
                    <p>To evolve as a benchmark in quality healthcare available to one and all.</p>
                    <br />

                    <h2 style={{ color: "rgb(20,70,157)" }}>Mission</h2>
                    <ul>
                        <li>To ensure accessible and affordable quality healthcare by compassionate medical professionals to all.</li>
                        <li>To be the centre of excellence for medical research and academics.</li>
                        <li>To cultivate an environment of trust, honesty, mutual respect, equality, and ethics.</li>
                    </ul>
                    <br />

                    <h2 style={{ color: "rgb(20,70,157)" }}>Values</h2>
                    <p>​​To provide value added innovative, consistent, and continuously improving health and medical care to sustain and further improve clinical outcomes, patient safety, & patient satisfaction.</p>
                </div>
            </div>

            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'id='7' style={{ backgroundColor: "rgb(64,192,200)" }}>
                <center>
                    <h1 style={{ color: 'white' }}>Infrastructure and Facilities</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30 }}>
                    <img src={Img30} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond' }}>
                    <h2 style={{ color: "rgb(20,70,157)" }}>Healthcare Landmark</h2>
                    <p>Maurya Group of Hospital, a healthcare landmark, has been a household name to more than 50 million Indians across the nation.</p>

                    <h2 style={{ color: "rgb(20,70,157" }}>Making Your Care Comfortable</h2>
                    <p>Built on a sprawling area of 4000 sq.yds of land, huge building with 11 floors, occupying 2,00,000 sft of built up area. 300 bedded multi super specialty hospital,we offer an array of medical services, ranging from preventive to curative and consultancy. View the list of infrastructure and facilities which we have to offer.</p>

                </div>
            </div>

            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12' id='8' style={{ backgroundColor: "rgb(64,192,200)", marginTop: 20 }}>
                <center>
                    <h1 style={{ color: 'white' }}>Health Byte</h1>
                    <hr />
                </center>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12' style={{ marginTop: 30 }}>
                    <img src={Img31} className="img-responsive img-rounded" style={{ width: '100%', height: '30%' }} />
                </div>

                <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 ' style={{ fontSize: 30, marginTop: 50, fontFamily: 'EB Garamond' }}>
                    <p>Maurya Group of Hospital Health byte is our monthly edition where you get knowledge about various health aspects and medical concerns, healthcare measures ,causes of disease and treatments. healthy diet, etc. Also get exclusive updates on how our medical specialists successfully deal with rare and critical cases at Maurya Group of Hospital.</p>
                </div>

            </div>

            <Footer/>

        </div>
    )
}