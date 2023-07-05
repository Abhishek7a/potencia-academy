import React from 'react'
export default function Results(props) {
  return (
    <>
      <h1 className='text-center'>{props.heading}</h1>
      <div className='flex flex-wrap sm:w-50 w-75  mx-auto'>
        {props.path.map((data) => {
          return (
            <div className="card my-2 lg:mx-5 mx-5" key={data.id} style={{ display: "inline-block" }}>
              <div className='m-5' style={{ border: "2px solid #212844", borderRadius: "50%" }}>
                <img src={data.link} className="card-img-top p-2 " style={{ borderRadius: "50%" }} alt="..." />
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
      </div>
    </>
  )
}
