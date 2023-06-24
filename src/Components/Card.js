import React from 'react'
import './card.css'

export default function Card() {
  return (
    <div className="row mt-5 p-5 mx-lg-1 mx-md-5 mx-sm-5 " style={{ backgroundImage: "url(https://www.catestseries.org/Images/bg-banner.jpg)" }}>

      <div className="row mt-5 mx-5">
        <h1 className="text-center"> Select Course</h1>
        <div className="col-sm-4 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Foundation Course</h5>
              <p className="card-text" style={{ color: "#212844" }}>(9<sup>th</sup> / 10<sup>th</sup>)</p>
              <a href="#" className="btn d-block d-block mx-md-auto ">View Details</a>
              <a href="#" className="btn  d-block d-block mx-md-auto mt-2">Syllabus</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title"  style={{ color: "#212844" }}>Enthusiast</h5>
              <p className="card-text">(JEE / NEET)</p>
              <a href="#" className="btn btn-primary d-block mx-5">View Details</a>
              <a href="#" className="btn btn-primary d-block mx-5 mt-2">Syllabus</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Crash Course</h5>
              <a href="#" className=" mt-5 btn d-block  d-block mx-md-auto">View Details</a>
              <a href="#" className="btn d-block mx-md-auto mt-2">Syllabus</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Dropper Batch</h5>
              <a href="#" className=" mt-5 btn d-block mx-md-auto">View Details</a>
              <a href="#" className="btn d-block mx-md-auto mt-2">Syllabus</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title" style={{ color: "#212844" }}>Online Testing</h5>
              <a href="#" className=" mt-5 btn d-block mx-md-auto">View Details</a>
              <a href="#" className="btn d-block mx-md-auto mt-2">Syllabus</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
