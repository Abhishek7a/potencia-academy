import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Career() {
    const API_URL = 'http://localhost:3500/career'
    // const formm = useRef();

    const [form, setform] = useState({ name: undefined, specialization: undefined, experience: undefined, resume: undefined,last_salary: undefined })
    const [submitSuccess, setSubmitSuccess] = useState(0);
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

        if (res.status === 201){
            toast.success(result.message);
            setform({ name: "", email: "", fatherName: "", classs: "9", contact: "" })
        }
        if (res.status === 406)
            toast.error(result.error);
        if (res.status === 422)
            toast.info(result.error);
        if (res.status === 409)
            toast.warn(result.error);
        if (res.status === 500)
            toast.warn(result.error);

    }
    return (
        <>
            <h1 className='text-center'>Find Your Dream Job Now</h1>
            <p className='m-5'>Potencia Classes, the initiator in the field of coaching industry in Kota has opening of Faculty positions for their Study Centers in PHYSICS, CHEMISTRY (ORGANIC, INORGANIC, PHYSICAL), MATHS and BIOLOGY streams. By joining Potencia Classes you will enjoy the working culture, higher pay packets and many other facilities.</p>
            <h3 className='p-3 text-center' style={{ color: "#212844" }}>Details</h3>
            <div className=' mx-2 rounded formSection d-lg-flex d-md-flex justify-content-between '>
                <form className=' form p-5 mx-auto mx-lg-5 px-md-0 px-lg-0 '>
                    <div className='mx-lg-5 px-lg-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control"  placeholder='Enter your name' style={{ color: "#212844" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Specialization</label>
                            <input type="text" className="form-control"  placeholder='Enter your subject' style={{ color: "#212844" }} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>  <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Experience</label>
                            <input type="number" className="form-control" style={{ color: "#212844" }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your experience'/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label d-block">Upload CV</label>
                            <input type="file"  id="myFile" name="filename"  placeholder='Upload your resume' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" autoComplete='off' className="form-label">Last Salary</label>
                            <input type="number" className="form-control" style={{ color: "#212844" }} id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='Enter your last salary' />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ border: "2px solid white" }}>Submit</button>
                    </div>
                </form>
                <img src="formImage.png" className='d-lg-block w-50 d-none ' alt="" />
            </div>
        </>
    )
}
