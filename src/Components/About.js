import React from 'react';
import './about.css';
import about from '../assets/about.png';

export default function About() {

    return (
        <section className='mx-lg-3 rounded-md m-lg-5 m-md-5 about'>
            <div className='d-lg-flex  text-center  d-sm-block '>
                <img src={about} className='d-lg-block w-50 h-25 d-none ' alt="" />
                <div className='flex  p-lg-5 p-md-3 p-2 '>
                    <h1 className='pt-5 text-center text-light fw-bold'>About Us</h1>
                    <p className='mt-md-5 mt-3 mx-lg-5 text-start   px-lg-5 px-md-1 mx-md-0 mx-sm-0 text-wrap text' style={{ color: "#ced9eb" }}>POTENCIA ACADEMY provides interactive lectures from qualified faculties to guide the students for their success in engineering and medical entrances and board examinations. Lays foundation from class IX for better future in any field. Also provides Aptitude classes for different competitive exams. All faculties are from IITs with good experience and the best knowledge in their respective subjects, who will lead you towards sucess by clearing basic concept without cramming them. Aptitude classes for different competitive exams. </p>
                </div>
            </div>
        </section>
    )
}
