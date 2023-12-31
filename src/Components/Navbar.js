import React, { useState } from 'react'
import './navbar.css'
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/Potencia-Academy-logo.png';

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
            <nav className="navbar navbar-expand-lg bg-body-tertiary z-3 px-lg-5 px-md-5 nav_bar shadow py-md-2 py-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                <div className="container-fluid d-flex justify-content-between ">
                    <img className="img " src={logo} alt="Error Load Image" />
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-2 fw-bold ">
                            <Link onClick={goToTop} className={`${location.pathname === "/" ? "link m-lg-2 my-2" : "nav-link"}`} style={{ color: "#212844", }} aria-current="page" to="/">  <li className="nav-item " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home </li></Link>

                            <Link onClick={goToTop} className={`${location.pathname === "/career" ? "link  m-lg-2 my-2" : "nav-link"}`} aria-current="page" style={{ color: "#212844" }} to="/career" > <li className="nav-item " data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" > Career</li></Link>

                            <li className="nav-item dropdown mx-lg-2">
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#212844" }}>
                                    Results<span className="mx-1" style={{ clipPath: "polygon(49% 74%, 0 39%, 100% 39%)", backgroundColor: "#212844" }}> ...</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <Link onClick={goToTop} className="nav-link px-2" style={{ color: "#212844" }} to="/medical"><li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Medical </li></Link>
                                    <Link onClick={goToTop} className="nav-link px-2" style={{ color: "#212844" }} to="/non-medical"><li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Non-Medical</li></Link>
                                    <Link onClick={goToTop} className="nav-link px-2" style={{ color: "#212844" }} to="/broad"><li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Boards</li></Link>
                                    <Link onClick={goToTop} className="nav-link px-2" style={{ color: "#212844" }} to="/others"><li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Others</li></Link>
                                </ul>
                            </li>

                            <Link onClick={goToTop} className={`${location.pathname === "/aboutUs" ? "link  m-lg-2 my-2" : "nav-link"}`} style={{ color: "#212844" }} to="/aboutUs"> <li className="nav-item mx-lg-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About Us </li></Link>

                            <li className="nav-item dropdown mx-lg-2" >
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#212844" }}>
                                    Students<span className="mx-1" style={{ clipPath: "polygon(49% 74%, 0 39%, 100% 39%)", backgroundColor: "#212844" }}> ...</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <Link onClick={goToTop} className="px-2  nav-link" style={{ color: "#212844" }} to="#"> <li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Courses Find </li></Link>
                                    <Link onClick={goToTop} className="px-2  nav-link" style={{ color: "#212844" }} to="#"> <li data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Answer Key </li></Link>
                                </ul>
                            </li>

                            <Link to='https://frontend-testing-portal-potencia.vercel.app/' onClick={goToTop} className={`${location.pathname === "/prex" ? "link m-lg-2 my-2" : "nav-link"}`} style={{ color: "#212844" }}  ><li className="nav-item mx-lg-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Prex  </li></Link>


                            <Link onClick={goToTop} className={`${location.pathname === "/contactUs" ? "link  m-lg-2 my-2" : "nav-link"}`} style={{ color: "#212844" }} to="/contactUs"><li className="nav-item mx-lg-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}