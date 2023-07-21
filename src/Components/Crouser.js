import React from 'react'
import './Crouser.css'
export default function Crouser() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-lg-1  mx-lg-3" data-bs-ride="carousel" data-ride="carousel">
                <div className="carousel-inner  border ">
                    <div className="carousel-item active h-md-100 ">
                        <img src="https://www.catestseries.org/Images/WebBanner5.webp" className="d-block w-100 crouser_img" alt="..." />
                    </div>
                    <div className="carousel-item rounded-3">
                        <img src="https://www.catestseries.org/Images/WebBanner1.webp" className="d-block w-100 crouser_img " alt="..." />
                    </div>
                    {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a> */}
                {/* </div> */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-black opacity-75 z-1" aria-hidden="true"></span>
                    <span className="visually-hidden ">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-black opacity-75" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <p className='text-center my-3 fw-bold heading ' style={{ color: "#212844" }}>POTENCIA ACADEMY -UNLEASH YOUR POTENTIAL</p>

        </div >
        </>
    )
}
