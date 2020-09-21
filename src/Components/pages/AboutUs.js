import React from 'react'
import { hocLaungeConsumer } from '../hoc'

function AboutUs({ launge }) {
    const { aboutUs, aboutUsHover } = launge.getHeader().Buttons
    
    return (
        <button
            className='ContentBlock-buttons-btn aboutUs-btn'
            onClick={() => {
                document.getElementById('aboutUs').scrollIntoView({ block: "center", behavior: "smooth" })
            }}
        >
            <span data-title={aboutUsHover}>{aboutUs}</span>
        </button>
    )
}
export default hocLaungeConsumer(AboutUs)
