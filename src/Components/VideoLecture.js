import React from 'react'
import './VideoLecture.css'

export default function VideoLecture() {
    return (
        <>
            <h1 className='text-center mt-5'>Video Lectures</h1>
            <div className='d-flex justify-content-around  mx-md-5 flex-wrap '>
                <video width='250px' className=' mt-5 mt-sm-5 rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className=' mt-5  mt-sm-5 rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className=' mt-5 mt-sm-5 rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className=' mt-5 mt-sm-5 rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
            </div>
        </>
    )
}
