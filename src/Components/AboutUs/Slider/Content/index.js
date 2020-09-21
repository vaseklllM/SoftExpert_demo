import React from "react";
import itemLi from './itemLi'
import { hocLaungeConsumer } from '../../../hoc'
import './content.scss'

function Content({ SliderNumeric, numberNextImg, animateWidth, newImgIndex, launge }) {
  const skill = launge.getUserSlider(SliderNumeric)

  const leftLi = skill.LeftList.map((item, index) => {
    return itemLi(item, index)
  })
  const rightLi = skill.RightList.map((item, index) => {
    return itemLi(item, index)
  })
  return (
    <div className='sliderContent' >
      <div className="wow fadeInUp">
        <span className='sliderContent-userName'>{skill.userName}</span>
        <div className='sliderContent-imeges'>
          <div>
            <img id="SliderBackImg" src={launge.getUserSlider(numberNextImg).imgUrl} alt="Person" />
          </div>
          <div style={{ width: animateWidth }}>
            <img src={launge.getUserSlider(newImgIndex).imgUrl} alt="Person" />
          </div>
        </div>
      </div>
      <div className="sliderContent-skill">
        <div className="sliderContent-skill-titleBlock wow fadeInUp">
          <span className='sliderContent-skill-titleBlock_title' >{skill.title}</span>
          <div className='sliderContent-skill-titleBlock_box' />
        </div>
        <div className="sliderContent-skill-wraper">
          <div className="sliderContent-skill-wraper-list">
            <ul>
              {leftLi}
            </ul>
          </div>
          <div className="sliderContent-skill-wraper-line wow zoomIn" />
          <div className="sliderContent-skill-wraper-list" >
            <ul>
              {rightLi}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hocLaungeConsumer(Content)