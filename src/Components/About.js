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
<<<<<<< HEAD
        <section className='mx-lg-3 rounded m-lg-5 m-md-5 about'>
            {/* <div   className='col-7 text-center bg-white rounded'> */}
            <h1 className='pt-5 text-center text-light fw-bold'>About Us</h1>
            <div className='d-lg-flex  text-center p-5 d-sm-block'>
                <div className='mx-lg-5 pb-5'>
                    <img src="https://www.potencia.in/wp-content/uploads/2023/03/Sir-1.webp" className='aboutImg mx-lg-5' alt="" />
                </div>
                <p className='mt-5 mx-lg-5 text-start fs-6  px-lg-5 px-md-1 mx-md-0 mx-sm-0 text-wrap text-light '>POTENCIA ACADEMY provides interactive lectures from qualified faculties to guide the students for their success in engineering and medical entrances and board examinations. Lays foundation from class IX for better future in any field. Also provides Aptitude classes for different competitive exams. All faculties are from IITs with good experience and the best knowledge in their respective subjects, who will lead you towards sucess by clearing basic concept without cramming them.</p>
=======
        <section className=' d-flex mx-5 mt-5  justify-content-between'>
            <div className='about_section col-7 text-center'>
                <h1 className='mt-2'>About Us</h1>
                <p className='mt-5 mx-5'>POTENCIA ACADEMY provides interactive lectures from qualified faculties to guide the students for their success in engineering and medical entrances and board examinations. Lays foundation from class IX for better future in any field. Also provides Aptitude classes for different competitive exams. All faculties are from IITs with good experience and the best knowledge in their respective subjects, who will lead you towards sucess by clearing basic concept without cramming them.</p>
            </div>
            <div className='form col-4'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Father Name</label>
                        <input type="text" className="form-control" id="exampleInputFatherName" aria-describedby="emailHelp" required />
                    </div>  <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Class</label>
                        <input type="number" className="form-control" id="exampleInputClass" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label">Contact</label>
                        <input type="number" className="form-control" id="exampleInputContact" aria-describedby="emailHelp" required />
                    </div>
                    {/* <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div> */}
                    {/* <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button className="btn btn-primary" onClick={() => {
                        setName(document.getElementById('exampleInputName').value);
                        setEmail(document.getElementById('exampleInputEmail').value);
                        setFatherName(document.getElementById('exampleInputFatherName').value);
                        setClasss(document.getElementById('exampleInputClass').value);
                        setContact(document.getElementById('exampleInputContact').value);
                        handleSubmit();
                    }}>Submit</button>
>>>>>>> e9319cf88bd63ffc604b16692ab0099a93299466
            </div>
            {/* <hr className='w-75 m-auto'></hr> */}

        </section>
    )
}
