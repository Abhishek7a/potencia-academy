import React from 'react'
import './review.css'

export default function Review() {
    return (
        <>
            <h1 className='text-center mt-5'>Reviews</h1>
            <div className=' d-flex flex-wrap my-2 my-lg-5  mx-md-5'>
                <div className=" text-center border rounded-3 bg-light px-3 pt-3  mx-md-5  mx-lg-0 mx-sm-5 col-lg-3  col-md-5 my-2 mt-sm-3 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/Ramandeep-Kaur.jpg" className="card-img-top img-thumbnail mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body my-3">
                        <h4>Ramandeep Kaur</h4>
                        <p className="card-text text-start  text-muted"> The teaching methods are deemed effective, with interactive lectures and hands-on practical sessions</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3  col-lg-3 col-md-5 my-2 mt-sm-3 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/rahul-maheshwari-150x150.jpg" className="card-img-top img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body my-3">
                        <h4>Rahul Maheshwari</h4>
                        <p className="card-text  text-start text-muted">The institute's emphasis on holistic development, extracurricular activities, and individual attention to each student has garnered appreciation.</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3 mx-md-5 mx-lg-0 mx-sm-5  col-lg-3 col-md-5 mt-sm-3 my-2 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/navjot.jpg" className="card-img-top  img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body my-3">
                        <h4>Navjot</h4>
                        <p className="card-text text-start text-muted">Friendly and encouraging environment fosters a sense of community, making the learning journey enjoyable and enriching.</p>
                    </div>
                </div>
                <div className="text-center border rounded-3 bg-light px-3 pt-3 col-lg-3  col-md-5 mt-sm-3 my-2 col-sm-5 ">
                    <img src="https://www.potencia.in/wp-content/uploads/2023/01/Sashwat1-150x150.jpg" className="card-img-top  img-thumbnail  mx-4" style={{ width: "50%", borderRadius: "50%" }} alt="review" />
                    <div className="card-body my-3">
                        <h4>Sashwat</h4>
                        <p className="card-text text-start text-muted">Students appreciate the well-equipped laboratories and resources available to enhance their learning experience. </p>
                    </div>
                </div>
            </div>

        </>
    )
}

