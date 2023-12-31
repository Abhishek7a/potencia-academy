import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ScholorShip.css'
import scholorship from '../assets/formImage.png';
import emailjs from '@emailjs/browser';

export default function Form() {
    // const API_URL = 'http://localhost:3500/register'
    const API_URL = 'https://potencia-academy-backend.vercel.app/register';
    const formm = useRef();

    const userId = process.env.REACT_APP_EMAIL_USERID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [form, setform] = useState({ name: undefined, email: undefined, fatherName: undefined, classs: "9", contact: undefined })
    const handleSubmit = async () => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        //Response in Toast    
        const result = await res.json();
        if (res.status === 201) {
            toast.success(result.message);
            // Send Email
            const templateParams = {
                to_email: 'abhishekarora7327@gmail.com',
                message: JSON.stringify({
                    Form: "Scholorship Form",
                    name: form.name,
                    email: form.email,
                    fatherName: form.fatherName,
                    classs: form.class,
                    contact: form.contact
                }, null, 2),
            };

            emailjs.send('default_service', TEMPLATE_ID, templateParams, API_KEY)
                .then((response) => {
                    // console.log('Email sent successfully!', response);
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
            setform({ name: "", email: "", fatherName: "", classs: "9", contact: "" })
        }
        if (res.status === 406 || 422 || 409)
            toast.error(result.error);
        if (res.status === 500)
            toast.warn(result.error);
    }

    const handleOnChange = (e) => {
        setform({ ...form, [e.target.id]: e.target.value });
    }
    const sendForm = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={sendForm} ref={formm}>
            <h1 className='py-md-3 pt-3 text-center' style={{ color: "#212844" }}>Scholarship Test</h1>
            <div className=' mx-md-2 rounded formSection d-lg-flex d-md-flex justify-content-between '>
                <div className=' form p-lg-5  mx-auto mx-lg-5 p-4 px-md-0 px-lg-0 '>
                    <div className='mx-lg-5 px-lg-5 w-100'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Name</label>
                            <input type="text" onChange={handleOnChange} name="user_name" value={form.name} className="form-control " style={{ color: "#212844" }} id="name" aria-describedby="emailHelp" placeholder='Enter your name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" onChange={handleOnChange} name="user_email" value={form.email} className="form-control" style={{ color: "#212844" }} id="email" aria-describedby="emailHelp" placeholder='Enter your email' />
                            <div id="emailHelp" className="form-label text-secondary mt-1" style={{ fontSize: "12px" }}>We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" name="father_name" className="form-label">Father Name</label>
                            <input type="text" onChange={handleOnChange} value={form.fatherName} className="form-control" style={{ color: "#212844" }} id="fatherName" aria-describedby="emailHelp" placeholder='Enter your father name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Class</label>

                            <select className="form-select" onChange={handleOnChange} id="classs" aria-label="Default select example">
                                <option value="9"  >9th</option>
                                <option value="10" >10th</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' name="contact_number" className="form-label">Contact</label>
                            <input type="number" onChange={handleOnChange} className="form-control" placeholder='Enter your phone no.' value={form.contact} style={{ color: "#212844" }} id="contact" aria-describedby="emailHelp" />
                        </div>
                        <button onClick={handleSubmit} type='submit' className="btn border-2 border-white" style={{ border: "2px solid #212844" }}>Submit</button>
                        <ToastContainer className="w-75 z-1 pt-4 mt-5" />
                    </div>
                </div>
                <img src={scholorship} className='d-lg-block w-50 d-none rounded-end' alt="" />
            </div>
        </form >
    )
}
