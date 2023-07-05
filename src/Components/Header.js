import React, { useState } from 'react'
import './Header.css'
import { Link, useLocation } from "react-router-dom";
export default function Header() {
    const [load, setload] = useState("1");
    const loading = () => {
        setload("0");
        // When user in the middle of the page and click on nav item then the component is change but user get still middle of the page to solve the problem use this line of code.
        document.documentElement.scrollTop = 0;
        // In which 0 timeout means runs when program is finished
        setTimeout(() => {
            setload("1");
        }, 0);
    }
    const goToTop = () => {
        document.documentElement.scrollTop = 0;
        loading();
    }
    let location = useLocation();
    return (
        <>
            <div className={load === "0" ? "unload" : "load"}></div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary px-lg-5 px-md-5 nav_bar" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                <div className="container-fluid d-flex justify-content-between ">
                    <img className="img " src=".\Potencia-Academy-logo.png" alt="Error Load Image" />
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-2 fw-bold ">
                            <li className="nav-item mx-lg-2"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link onClick={goToTop} className={`${location.pathname === "/" ? "link my-2" : "nav-link"}`} style={{ color: "#212844", }} aria-current="page" to="/"><span>Home</span></Link>
                            </li>
                            <li className="nav-item mx-lg-2 " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
                                <Link onClick={goToTop} className={`${location.pathname === "/career" ? "link my-2 " : "nav-link"}`} aria-current="page" style={{ color: "#212844" }} to="/career"> Career</Link>
                            </li>
                            <li className="nav-item dropdown mx-lg-2">
                                <a className={`${location.pathname === "/results" ? "link my-2" : "nav-link"}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#212844" }}>
                                    Results<span className="mx-1" style={{ clipPath: "polygon(49% 74%, 0 39%, 100% 39%)", backgroundColor: "black" }}> ...</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/medical">Medical</Link></li>
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/non-medical">Non-Medical</Link></li>
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/broad">Boards</Link></li>
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/others">Others</Link></li>
                                </ul>
                            </li>
                            {/* dropdown-item */}
                            <li className="nav-item mx-lg-2"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link onClick={goToTop} className={`${location.pathname === "/aboutUs" ? "link my-2" : "nav-link"}`} style={{ color: "#212844" }} to="/aboutUs">About Us</Link>
                            </li>
                            <li className="nav-item dropdown mx-lg-2"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <a className={`${location.pathname === "/students" ? "link my-2" : "nav-link"}`} role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#212844" }}>
                                    Students<span className="mx-1" style={{ clipPath: "polygon(49% 74%, 0 39%, 100% 39%)", backgroundColor: "black" }}> ...</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    {/* <li><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/login">Login</span></Link></li> */}
                                    {/* <li><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/prex">Prex</span></Link></li> */}
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/courses">Courses Find</Link></li>
                                    <li  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"><Link onClick={goToTop} className="nav-link mx-2" style={{ color: "#212844" }} to="/answerKey">Answer Key</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-lg-2"  data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <Link onClick={goToTop} className={`${location.pathname === "/prex" ? "link my-2" : "nav-link"}`} to="/prex" style={{ color: "#212844" }}>Prex</Link>
                            </li>
                            <li className="nav-item mx-lg-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
                                <Link onClick={goToTop} className={`${location.pathname === "/contactUs" ? "link my-2" : "nav-link"}`} to="/contactUs" style={{ color: "#212844" }}>Contact Us</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        </>
    )
}