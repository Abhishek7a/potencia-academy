import React from 'react'
import { FaFacebookF,FaGoogle,FaLinkedinIn} from 'react-icons/fa';
import { BsInstagram} from 'react-icons/bs';
export default function Footer() {
    return (
        <footer className=" text-center text-lg-start  text-muted mt-5" style={{ backgroundColor: "#212844" }} >
            <section >
                <section className="d-flex justify-content-between flex-wrap  py-4 px-2" style={{backgroundColor:"rgb(36 47 88)"}} >
                    <div className="md:me-5 ">
                        <span className='text-white fw-bold text-wrap '>Get connected with us on social networks:</span>
                    </div>
                    <div className='text-center w-sm-100 mx-sm-0 mx-auto'>
                        <a href="https://www.facebook.com/potenciacademy" target='_blank'  className="text-white md:me-4 me-2">
                            <FaFacebookF/>
                        </a>
                        <a href="https://www.instagram.com/academypotencia/" target='_blank' className="text-white md:me-4 me-2">
                            <BsInstagram/>
                        </a>
                        <a href="https://www.linkedin.com/company/potencia-academy/about/" target='_blank' className="text-white md:me-4">
                            <FaLinkedinIn/>
                        </a>
                    </div>
                </section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-5 col-lg-4 col-xl-3  mb-4">
                            <img className=" d-flex flex-start w-75" src="Potencia-Academy-logo2.png" style={{  }} alt="Error Load Image" />
                            <p className='text-start mt-3  text-light'>
                                POTENCIA ACADEMY offers interactive lectures from qualified IIT faculties for success in engineering and medical entrances and board exams, starting from class IX. Aptitude class  for competitive exams also offered. Led by experienced educators who focus on building basic concepts.
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mb-4 text-start">
                            <h6 className="text-uppercase fw-bold mb-4 text-light">
                                Quick links
                            </h6>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link " >Careers</a>
                            </p>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link " >Results</a>
                            </p>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link ">Prex</a>
                            </p>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link ">Online Testing </a>
                            </p>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link ">About</a>
                            </p>
                            <p className='text-light'>
                                <a href="#" className="text-reset nav-link ">Contant</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-2 col-xl-3  mb-md-0 mb-4">
                            <h6 className="text-uppercase text-start fw-bold mb-4 text-light">Contact</h6>
                            <p className='text-start text-light'>Near DR. Maheshwari Chowk, Opp.Petrol Pump, 100 Feet Road Bathinda</p>
                            <p className='text-start text-light'>
                                <i className=" text-start fas fa-envelope "></i>
                                info@potencia.in
                            </p>
                            <p className='text-start  text-light'><i className="fas fa-phone  "></i>
                                +91 92395-00001
                            </p>
                            <p className='text-start  text-light'><i className="fas fa-print text-start "></i> +91 98557-38100</p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-start">
                            <h6 className="text-uppercase fw-bold mb-4  text-light">
                                LOCATION ON MAP
                            </h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d441314.3459939722!2d74.954738!3d30.215159000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a52bd4b15f%3A0xdd00ea48d73589c!2sPotencia%20Academy%20For%20IIT-JEE%20%7C%20NEET%20%7C%20Foundation!5e0!3m2!1sen!2sus!4v1682072292188!5m2!1sen!2sus" width="250" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4  text-light" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2023 Copyright <a className="text-reset fw-bold nav-link" href="#"> Potencia Academy</a>
            </div>
        </footer >
    )
}
