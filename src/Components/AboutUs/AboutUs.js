import React from "react"
import WeAre from "./WeAre"
import Slider from "./Slider"
import { hocLaungeConsumer } from "../hoc"
import "./aboutUs.scss"

function AboutUs({ launge }) {
    const { label } = launge.getAboutUs()
    return (
        <div id='aboutUs'>
            <h3 className='aboutUs-label wow fadeInUp'>{label}</h3>
            <WeAre />
            <Slider />
        </div>
    )
}
export default hocLaungeConsumer(AboutUs)
