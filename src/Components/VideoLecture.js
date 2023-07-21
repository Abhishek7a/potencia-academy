import React from 'react'
import './VideoLecture.css'

export default function VideoLecture() {
    return (
        <>
            <h1 className='text-center mt-5'>Video Lectures</h1>
            <div className='d-flex justify-content-around mt-5 mx-md-5 flex-wrap gap-5'>
                <video width='250px' className='  rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className='  rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className='  rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
                <video width='250px' className='  rounded' muted loop controls autoPlay src="https://www.potencia.in/wp-content/uploads/2023/01/introvid.mp4"></video>
            </div>
        </>
    )
}
