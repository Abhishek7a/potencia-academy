import React from 'react'

export default function AboutUs() {
    return (
        <section className='mx-lg-3  mt-lg-1 mb-5 m-md-5 about'>
            <div className=''>
                <h1 className='pt-5 text-center text-light fw-bold'>About Us</h1>
                <div className='d-lg-flex  text-center p-lg-5 px-3 d-sm-block mt-3'>
                    <div className='mx-lg-5 pb-5'>
                        <img src="https://www.potencia.in/wp-content/uploads/2023/01/IMG_20230122_125135745-scaled-385x485.webp" className='aboutImg mx-lg-5 rounded' alt="" />
                    </div>
                    <p className='mt-lg-5 mx-lg-5 text-start fs-6  px-lg-5 px-sm-1  mx-md-0 mx-sm-0 text-wrap text-light '>POTENCIA ACADEMY provides interactive lectures from qualified faculties to guide the students for their success in engineering and medical entrances and board examinations. Lays foundation from class IX for better future in any field. Also provides Aptitude classes for different competitive exams. All faculties are from IITs with good experience and the best knowledge in their respective subjects, who will lead you towards sucess by clearing basic concept without cramming them.</p>
                </div>
            </div>
            <div className='bg-light mt-5 rounded-md' style={{ border: "1px solid #212844" }}>
                <h1 className='pt-5 text-center fw-bold'>Our Mission</h1>
                <div className='d-lg-flex  text-center p-lg-5 p-3'>
                    <div className='mx-lg-5 pb-5'>
                        <img src="https://www.potencia.in/wp-content/uploads/2023/01/dotid2023_students_achieveing_excellence_study_educational_envi_66991705-d634-48ff-8a31-4b8be6735cf4.webp" className='aboutImg  rounded' alt="" />
                    </div>
                    <p className='mt-lg-5 mx-lg-5 text-start fs-6  px-lg-5 px-md-1 mx-md-0 mx-sm-0 text-wrap  '>Our Mission is to perspire for the augmentation of the aspiration of even the average students to climb the pinnacle with utmost diligence and maximum dexterity. This institution with the motto “Chiselling the brilliants" continue to be the leading provider of entrance coaching programmes of the highest quality to those students who have the potential and motivation to become professionals who will be able to contribute towards professional excellence</p>
                </div>
            </div>
        </section>
    )
}

