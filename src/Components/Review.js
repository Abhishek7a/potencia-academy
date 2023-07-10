import React from 'react'
import './review.css'

export default function Review() {
    return (
        <>
            <h1 className='text-center mt-5'>Reviews</h1>
            <div className=' d-flex flex-wrap my-3 my-lg-5  mx-md-5'>
                <div className=" text-center border rounded-3 bg-light px-3 pt-3  mx-md-5  mx-lg-0 mx-sm-5 col-lg-3  col-md-5 my-2 mt-sm-3 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/Ramandeep-Kaur.jpg" className="card-img-top img-thumbnail mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body mt-3">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3  col-lg-3 col-md-5 my-2 mt-sm-3 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/rahul-maheshwari-150x150.jpg" className="card-img-top img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body mt-3">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3 mx-md-5 mx-lg-0 mx-sm-5  col-lg-3 col-md-5 mt-sm-3 my-2 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/navjot.jpg" className="card-img-top  img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body  mt-3">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3 col-lg-3  col-md-5 mt-sm-3 my-2 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/Sashwat1-150x150.jpg" className="card-img-top  img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

