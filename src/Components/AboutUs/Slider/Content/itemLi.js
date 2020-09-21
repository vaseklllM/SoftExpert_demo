import React from 'react'

const itemLi = (item, index) => {
    return (
        <li key={index} className="liSkillBlock wow zoomIn">
            <div className='liSkillBlock-skillBlock' >
                <span className='liSkillBlock-skillBlock-name'>{item.name}</span>
                <span className='liSkillBlock-skillBlock-level'>{item.level}%</span>
            </div>
            <div className="liSkillBlock-levelLoad" >
                <div
                    className="liSkillBlock-levelLoad-load wow slideInLeft"
                    style={{ width: `${item.level}%` }}
                    data-wow-delay="0.4s"
                    data-wow-duration="2s"
                />
            </div>
        </li>
    )
}
export default itemLi