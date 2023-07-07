import React from 'react'
export default function Results(props) {
  return (
    <>
      <h1 className='text-center'>{props.heading}</h1>
      <div class="row mx-4 ">
        {props.path.map((data) => {
          return (
            <div class="col-md-4 mt-3">
              <div class="card">
                <img class="card-img-top w-50 rounded-circle mt-5 mx-auto p-2" style={{ border: "2px solid #212844" }} src={data.link} alt="Card image cap" />
                <div className='p-3'>

                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">{data.currently}</p>
                  <p class="card-text"><small class="text-muted">{data.position}</small></p>
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
{/* // <div className=" bg-white w-50 my-2 lg:mx-5 mx-5 sm-w-50 w-25 " key={data.id} style={{ display: "inline-block" }}>
            //   <div className='m-5 w-50 mx-auto' style={{ border: "2px solid #212844", borderRadius: "50%" }}>
            //     <img src={data.link} className="card-img-top  " style={{ borderRadius: "50%"}} alt="..." />
            //   </div>
            //   <div className="card-body">
            //     <h5 style={{ color: "#212844" }} className='text-wrap '>{data.name}</h5>
            //     <p className="card-text" style={{ color: "#212844" }}>{data.currently}</p>
            //     {data.position !== '' ? <p className="card-text">{data.position}</p> : ""}
            //   </div>
            // </div> */}




             //   <div class="card w-25 mt-5">
          //   <img class="card-img-top w-25 rounded-circle mt-5 mx-auto p-2" style={{ border: "2px solid #212844"}} src={data.link} alt="Card image cap"/>
          //   <div class="card-body">
          //     <h5 class="card-title">{data.name}</h5>
          //     <p class="card-text">{data.currently}</p>
          //     <p class="card-text"><small class="text-muted">{data.position}</small></p>
          //     {/* <p class="card-text"><small class="text-muted">{data.}</small></p> */}
          //   </div>
          // </div>