import React from 'react'
import './Crouser.css'
export default function Crouser() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide my-lg-1  mx-lg-3" data-bs-ride="carousel">
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item active h-md-100 ">
                        <img src="https://www.catestseries.org/Images/WebBanner5.webp" className="d-block w-100 crouser_img" alt="..." />
                        {/* <img src="crouser_img_1.webp" className="d-block w-100 " alt="..."/> */}
                    </div>
                    <div className="carousel-item rounded-3">
                        <img src="https://www.catestseries.org/Images/WebBanner1.webp" className="d-block w-100 crouser_img " alt="..." />
                        {/* <img src="crouser_img_1.webp" className="d-block w-100 crouser_img" alt="..."/> */}
                    </div>
                </div>
                    <p className='text-center my-3 fw-bold' style={{ color: "#212844" }}>POTENCIA ACADEMY - UNLEASH YOUR POTENTIAL</p>
                {/* <div id="carouselExampleControls" className="carousel slide mx-5 my-2" data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img src="crouser_img_1.webp" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="crouser_img_2.webp" className="d-block w-100" alt="..." />
                        </div>
                      
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    <h3 className='text-center my-3 ' style={{ color: "#212844" }}>POTENCIA ACADEMY - UNLEASH YOUR POTENTIAL</h3>
                </div> */}
            </div>
        </>
    )
}
