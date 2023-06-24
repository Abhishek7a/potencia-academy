import React from 'react'
import { useState } from 'react'
import './about.css'

export default function About() {
    const API_URL = 'http://localhost:3500/register'
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [classs, setClasss] = useState('')
    const [contact, setContact] = useState('')

    const handleSubmit = async () => {
        const data = {
            name,
            email,
            fatherName,
            classs,
            contact
        }
        console.log(data)
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()
        console.log(result)
    }

    return (
        <section className='mx-lg-3 rounded m-lg-5 m-md-5 about'>
            {/* <div   className='col-7 text-center bg-white rounded'> */}
            <h1 className='pt-5 text-center text-light fw-bold'>About Us</h1>
            <div className='d-lg-flex  text-center p-5 d-sm-block'>
                <div className='mx-lg-5 pb-5'>
                    <img src="https://www.potencia.in/wp-content/uploads/2023/03/Sir-1.webp" className='aboutImg mx-lg-5' alt="" />
                </div>
                <p className='mt-5 mx-lg-5 text-start fs-6  px-lg-5 px-md-1 mx-md-0 mx-sm-0 text-wrap text-light '>POTENCIA ACADEMY provides interactive lectures from qualified faculties to guide the students for their success in engineering and medical entrances and board examinations. Lays foundation from class IX for better future in any field. Also provides Aptitude classes for different competitive exams. All faculties are from IITs with good experience and the best knowledge in their respective subjects, who will lead you towards sucess by clearing basic concept without cramming them.</p>
            </div>
    
        </section>
    )
}
