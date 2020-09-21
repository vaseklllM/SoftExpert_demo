import React from 'react'
import { hocLaungeConsumer } from '../../hoc'
import './weAre.scss'

function WeAre({ launge }) {
    const { title, subTitle } = launge.getAboutUs()
    return (
        <div className="weAreBlock wow fadeInUp">
            <div className='weAreBlock-title' id='title'>
                <h4 className='weAreBlock-text'>{title}</h4>
                <div className="weAreBlock-yellowBox" />
            </div>
            <p className="weAreBlock-content">{subTitle}
            </p>
        </div>
    )
}
export default hocLaungeConsumer(WeAre)