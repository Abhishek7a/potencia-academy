import React, { useEffect, useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Career() {
    // const API_URL = 'http://localhost:3500/career'
    const API_URL = 'https://potencia-academy-backend.vercel.app/career';

    // const formm = useRef();

    const [form, setform] = useState({ name: undefined, specialization: undefined, experience: undefined, resume: undefined, lastSalary: undefined })
    // const [submitSuccess, setSubmitSuccess] = useState(0);
    const handleSubmit = async () => {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        // console.log(form)
        // emailjs.sendForm('service_uxv80ip', 'template_u19svt5', formm.current, 'XHYEBCkd47fUJJarO')
        //     .then((result) => {
        //         console.log(result.text);
        //         console.log("message send")
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        const result = await res.json();

        if (res.status === 201) {
            toast.success(result.message);
            setform({ name: "", specialization: "", experience: "", resume: "", lastSalary: "" })
        }
        if (res.status === 406)
            toast.error(result.error);
        if (res.status === 422)
            toast.info(result.error);
        if (res.status === 500)
            toast.warn(result.error);
    }
    // useEffect(() => {
    //     if (submitSuccess) {
    //         setform({ name: "", specialization: "", experience: "", resume: "", last_salary: "" })
    //         setSubmitSuccess(0);
    //     }
    // }, [submitSuccess])
    const handleOnChange = (e) => {
        setform({ ...form, [e.target.id]: e.target.value });
    }
    const sendForm = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h2 className='text-center '>Find Your Dream Job Now</h2>
            <p className='m-md-5 m-3'>Potencia Classes, the initiator in the field of coaching industry in Kota has opening of Faculty positions for their Study Centers in PHYSICS, CHEMISTRY (ORGANIC, INORGANIC, PHYSICAL), MATHS and BIOLOGY streams. By joining Potencia Classes you will enjoy the working culture, higher pay packets and many other facilities.</p>
            <h3 className='p-3 text-center' style={{ color: "#212844" }}>Details</h3>
            <div className=' mx-2 rounded formSection d-lg-flex d-md-flex justify-content-between '>
                <form  onSubmit={sendForm} className=' form p-md-5 p-3 mx-auto mx-lg-5 px-md-0 px-lg-0 '>
                    <div className='mx-lg-5 px-lg-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" onChange={handleOnChange} name="user_name" value={form.name} className="form-control" placeholder='Enter your name' style={{ color: "#212844" }} id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Specialization</label>
                            <input type="text" onChange={handleOnChange} name="specialization" value={form.specialization} className="form-control" placeholder='Enter your subject' style={{ color: "#212844" }} id="specialization" aria-describedby="emailHelp" />
                        </div>  <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Experience</label>
                            <input type="number" className="form-control" onChange={handleOnChange} name="experience" value={form.experience} style={{ color: "#212844" }} id="experience" aria-describedby="emailHelp" placeholder='Enter your experience' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label d-block">Upload CV</label>
                            <input type="file" id="resume" className='w-50' name="resume" onChange={handleOnChange} value={form.resume} placeholder='Upload your resume' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label">Last Salary</label>
                            <input type="number" className="form-control" onChange={handleOnChange} name="lasSalary" value={form.lastSalary} style={{ color: "#212844" }} id="lastSalary" aria-describedby="emailHelp" placeholder='Enter your last salary' />
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn" style={{ border: "2px solid white" }}>Submit</button>
                        <ToastContainer />
                    </div>
                </form>
                <img src="formImage.png" className='d-lg-block w-50 d-none ' alt="" />
            </div>
        </>
    )
}
