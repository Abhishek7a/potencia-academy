import React from 'react'
import anmol from '../assets/Anmol.jpg';
import kushdeep from '../assets/kushdeep.jpg';
import prince from '../assets/prince.jpg';

export default function Results(props) {

  return (
    <>
      <div className=' justify-content-between my-2 my-lg-5  lg:gap-5 mx-md-5 mx-sm-5  row mx-4'>
        <h1 className='text-center'>{props.heading}</h1>
        <div className="text-center position-relative card col-md-3 mt-sm-5">
          <img className="card-img-top w-50 rounded-circle mt-5 mx-auto p-2 " style={{ border: "2px solid #212844", maxHeight: "150px", maxWidth: "150px" }} src={anmol} alt="Card image cap" />
          <div className="card-body my-3">
            <h4>Anmol</h4>
          </div>
          <span className="badge position-absolute p-2 right-0 top-0 fs-6 " style={{ backgroundColor: "#212844", right: "0" }}>2023</span>
        </div>
        <div className="text-center card col-md-3  mt-3 mt-sm-5">
          <img className="card-img-top w-50 rounded-circle mt-5 mx-auto p-2" style={{ border: "2px solid #212844", maxHeight: "150px", maxWidth: "150px" }} src={prince} alt="Card image cap" />
          <div className="card-body my-3">
            <h4>Prince</h4>
          </div>
          <span className="badge position-absolute p-2 top-0 fs-6 " style={{ backgroundColor: "#212844", right: "0" }}>2023</span>
        </div>
        <div className="text-center card col-md-3 mt-sm-5 mt-3">
          <img className="card-img-top w-50 rounded-circle mt-5 mx-auto p-2" style={{ border: "2px solid #212844", maxHeight: "150px", maxWidth: "150px" }} src={kushdeep} alt="Card image cap" />
          <div className="card-body my-3">
            <h4>Kushdeep</h4>
          </div>
          <span className="badge position-absolute p-2 top-0 fs-6 " style={{ backgroundColor: "#212844", right: "0" }}>2023</span>
        </div>
      </div>

      <div class="row mx-4 ">
        {props.path.map((data) => {
          return (
            <div className="col-md-3  mt-3" >
              <div className="card">
                <img className="card-img-top w-50 rounded-circle mt-5 mx-auto p-2" style={{ border: "2px solid #212844", maxHeight: "170px" }} src={data.link} alt="Card image cap" />
                <div className='p-3'>
                  <h5 className="card-title text-center">{data.name}</h5>
                  <p className="card-text text-muted text-center">{data.currently}</p>
                  {data.position ? <p className="card-text text-end"><small className="text-muted">{data.position}</small></p> : <div >&nbsp;</div>}
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

