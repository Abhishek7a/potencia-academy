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
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <p className='text-center my-3 fw-bold heading ' style={{ color: "#212844" }}>POTENCIA ACADEMY -UNLEASH YOUR POTENTIAL</p>

            </div>
        </>
    )
}
