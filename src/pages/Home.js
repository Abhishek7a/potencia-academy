import React from 'react'
import Crouser from '../Components/Crouser';
import About from '../Components/About';
import ScholorShip from '../Components/ScholorShip';
import Card from '../Components/Card';
import Facilities from '../Components/Facilities';
import VideoLecture from '../Components/VideoLecture';
import Review from '../Components/Review';
import ExpertLecture from '../Components/ExpertLecture';

export default function Home() {
    return (
        <>
            <Crouser />
            <About />
            <ScholorShip />
            <Card />
            <Facilities />
            <VideoLecture />
            <Review />
            <ExpertLecture />
        </>

    )
}
