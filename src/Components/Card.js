import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

export default function Card() {
  const goToTop = () => {
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className=" mt-5 lg-p-5 md-p-5 py-1 p-md-3 mx-lg-1 mx-md-0  mx-0 " style={{ backgroundImage: "url(https://www.catestseries.org/Images/bg-banner.jpg)" }}>

      <div className="row mt-5 mx-auto mx-5 ">
        <h1 className="text-center"> Select Course</h1>
        <div className="col-sm-12 col-lg-4 col-md-6   mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Foundation Course</h5>
              <p className="card-text" style={{ color: "#212844" }}>(9<sup>th</sup> / 10<sup>th</sup>)</p>
              <Link to="/syllabus" onClick={goToTop} className="btn d-block  mx-md-auto ">View Details</Link>
              <Link to="/syllabus" onClick={goToTop} className="btn  d-block  mx-md-auto mt-2">Syllabus</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4  col-md-6 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Enthusiast</h5>
              <p className="card-text" style={{ color: "#212844" }}>(JEE / NEET)</p>
              <Link to="/syllabus" onClick={goToTop} className="btn  d-block  mx-md-auto ">View Details</Link>
              <Link to="/syllabus" onClick={goToTop} className="btn mt-2 d-block mx-md-auto">Syllabus</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 col-md-6 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Crash Course</h5>
              <Link to="/syllabus" onClick={goToTop} className=" mt-5 btn d-block  d-block mx-md-auto">View Details</Link>
              <Link to="/syllabus" onClick={goToTop} className="btn d-block mx-md-auto mt-2">Syllabus</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 col-md-6 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Dropper Batch</h5>
              <Link to="/syllabus" onClick={goToTop} className=" mt-5 btn d-block mx-md-auto">View Details</Link>
              <Link to="/syllabus" onClick={goToTop} className="btn d-block mx-md-auto mt-2">Syllabus</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 col-md-6 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Online Testing</h5>
              <Link to="/syllabus" onClick={goToTop} className=" mt-5 btn d-block mx-md-auto">View Details</Link>
              <Link to="/syllabus" onClick={goToTop} className="btn d-block mx-md-auto mt-2">Syllabus</Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
