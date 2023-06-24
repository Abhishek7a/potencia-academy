import React from 'react'
const results = require('./resultsAPI');
export default function Results() {
  return (
    <>
    <h1 className='text-center'>Medical</h1>
    {results.medical.map((data) => {
      return (
        <div className="card mx-5 my-2 " key={data.id} style={{width: "18rem", display: "inline-block" }}>
          <div className='m-5' style={{border:"2px solid #212844",borderRadius:"50%"}}>
            <img src={data.link} className="card-img-top p-2 " style={{borderRadius:"50%"}} alt="..." />
          </div>
            <div className="card-body">
              <h5 style={{ color: "#212844" }}>{data.name}</h5>
              <p className="card-text" style={{ color: "#212844" }}>{data.currently}</p>
              {data.position !== '' ? <p className="card-text">{data.position}</p> : ""}
            </div>
          </div>
      )
    })
  }
    </>
  )
}
