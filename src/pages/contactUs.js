import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../assets/formImage2.png';

export default function ContactUs() {
    // const API_URL = 'http://localhost:3500/contactUs'
    const API_URL = 'https://potencia-academy-backend.vercel.app/contactUs';

    const [form, setform] = useState({ name: undefined, email: undefined, subject: undefined, message: undefined });
    const handleSubmit = async () => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        const result = await res.json();

        if (res.status === 201) {
            toast.success(result.message);
            setform({ name: "", email: "", subject: "", message: "" })
        }
        if (res.status === 406)
            toast.error(result.error);
        if (res.status === 422)
            toast.info(result.error);
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
        <section className='mb-5 '>
            <h1 className='p-md-3 text-center ' style={{ color: "#212844" }}>Contact Us</h1>
            <div className=' mx-2 rounded formSection d-lg-flex d-md-flex justify-content-between '>
                <form onSubmit={sendForm} className=' form p-lg-5 p-4 mx-auto mx-lg-5 px-md-0 px-lg-0 '>
                    <div className='mx-lg-5 px-lg-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label ">Name</label>
                            <input type="text" className="form-control" name="name" style={{ color: "#212844" }} onChange={handleOnChange} value={form.name} id="name" aria-describedby="emailHelp" placeholder='Enter your name' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" onChange={handleOnChange} name="email" value={form.email} style={{ color: "#212844" }} id="email" aria-describedby="emailHelp" placeholder='Enter your email' />
                            <div id="emailHelp" className="form-label text-secondary">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                            <input type="text" className="form-control" onChange={handleOnChange} name="subject" value={form.subject} placeholder='Enter your subject' style={{ color: "#212844" }} id="subject" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label">Message</label>
                            <textarea type="textarea" rows="5" className="form-control " onChange={handleOnChange} name="text" value={form.message} style={{ color: "#212844" }} id="message" aria-describedby="emailHelp" placeholder='Enter your message' />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn " style={{ border: "2px solid  #212844" }}>Submit</button>
                    </div>
                    <ToastContainer
                            style={{ width: "50%" }}
                            className="mx-auto"
                        />
                </form>
                <img src={image} className='d-lg-block w-50 d-none' alt="" />
            </div>
            <div className='d-lg-flex justify-content-lg-center'>
                <div className='mt-5 mx-lg-5 '>
                    <h1 className='text-center'>BATHINDA</h1>
                    <div className='rounded-md p-lg-5 p-3' style={{ border: "2px solid #212844" }}>
                        <h3>ADDRESS :</h3>
                        <p>Near DR. Maheshwari Chowk, Opp. Petrol Pump, 100 Feet Road, Bathinda</p>
                        <h3>PHONE :</h3>
                        <p>+91 92395-00001</p>
                        <p>+91 98557-38100</p>
                        <h3>E-MAIL :</h3>
                        <a href="" className='' style={{ textDecoration: "none" }}>info @potencia.in</a>
                    </div>
                </div>
                <div className='mt-5 mx-lg-5 '>
                    <h1 className='text-center'>MOGA</h1>
                    <div className='rounded-md p-lg-5 p-3  py-5' style={{ border: "2px solid #212844", backgroundColor: "#212844", color: "#fff" }}>
                        <h3>ADDRESS :</h3>
                        <p>Dasmesh Nagar , St.No. 10 , Near Dasmesh Park , Armritsar Road</p>
                        <h3>PHONE :</h3>
                        <p>+91 98726-50200</p>
                        <br />
                        <h3>E-MAIL :</h3>
                        <a href="" className='' style={{ textDecoration: "none" }}>info @potencia.in</a>
                    </div>
                </div>
            </div>
            <h1 className='text-center mt-5 '>Map</h1>
            <div className='d-lg-flex justify-content-center  '>
                
                <iframe className=" mx-lg-5 mx-auto mt-3  m-md-50 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d441314.3459939722!2d74.954738!3d30.215159000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a52bd4b15f%3A0xdd00ea48d73589c!2sPotencia%20Academy%20For%20IIT-JEE%20%7C%20NEET%20%7C%20Foundation!5e0!3m2!1sen!2sus!4v1682072292188!5m2!1sen!2sus" width="500" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <iframe className=" mx-lg-5 rounded mt-3 w-100 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.992161547728!2d75.16754807570427!3d30.830885774537148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a098f68cfa8f1%3A0x62f75a1071480240!2sPOTENCIA%20ACADEMY%2C%20MOGA!5e0!3m2!1sen!2sin!4v1684493854075!5m2!1sen!2sin" width="500" style={{ border: "0" }} allowFullScreen=""  height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section >
    )
}
