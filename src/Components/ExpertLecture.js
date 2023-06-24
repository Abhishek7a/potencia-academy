import React from 'react'

export default function ExpertLecture() {
    return (
        <>
            <h1 className='text-center mt-5'>Expert Video</h1>
            <div className='d-flex justify-content-around my-5 mx-5 flex-wrap'>
                <video width='50%' muted loop controls autoPlay className='mx-5 mt-sm-5 col-10 col-md-4 rounded' src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='50%' muted loop controls autoPlay  className='mx-5 mt-sm-5 mt-5 col-10 col-md-4 rounded' src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>

            </div>
        </>
    )
}
