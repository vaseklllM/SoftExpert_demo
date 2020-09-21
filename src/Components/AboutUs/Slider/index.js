import React from 'react'
import { ReactComponent as SvgRightArrow } from './img/right.svg';
import { ReactComponent as SvgLeftArrow } from './img/left.svg';
import Content from './Content'
import Ball from './Ball'
import './slider.scss'
import { hocSlider } from '../../hoc'


const Slider = ({ buttonLeftClick, slide, numberNextImg, animateWidth, newImgIndex, buttonRightClick, IndexNewSlide }) => {
    return (
        <div className='sliderBlock'>
            <button className='sliderBlock-buttonLeftArrow wow slideInLeft'
                onClick={buttonLeftClick}
            >
                <SvgLeftArrow />
            </button>

            <Content
                SliderNumeric={slide}
                numberNextImg={numberNextImg}
                animateWidth={animateWidth}
                newImgIndex={newImgIndex}
            />

            <button className='sliderBlock-buttonRightArrow wow slideInRight'
                onClick={buttonRightClick}
            >
                <SvgRightArrow />
            </button>
            <Ball
                slide={slide}
                IndexNewSlide={IndexNewSlide}
            />
        </div>
    )
}

export default hocSlider(Slider)