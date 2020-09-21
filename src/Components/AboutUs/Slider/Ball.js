import React from 'react'
import { hocLaungeConsumer } from '../../hoc'

function Balls({ slide, IndexNewSlide, launge }) {
    const Li = launge.getUsers().map((item, index) => {
        return (
            <li
                key={index}
                onClick={() => {
                    IndexNewSlide(index)
                }}
            />
        )
    })

    return (
        <ul className='sliderBlock-balls'>
            <li style={{ left: `${slide * 25}px` }} />
            {Li}
        </ul>
    )
}
export default hocLaungeConsumer(Balls)
