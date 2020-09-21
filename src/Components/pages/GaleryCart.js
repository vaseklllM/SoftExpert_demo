import React from "react"
import { hocLaungeConsumer } from "../hoc"

function Carts({ item, activeIndex, activeCart, launge: { getPortfolio } }) {
    return (
        <div
            className='galleryCart wow fadeInUp'
            data-wow-delay='0.3s'
            onMouseOver={() => (!activeCart ? activeIndex() : null)}
        >
            <div
                className='galleryCart-img'
                style={{
                    background: `url('${item.img}') no-repeat center center/cover`
                }}
            />
            <div className='galleryCart-info'>
                <div className='galleryCart-info-content'>
                    <h3>{item.name}</h3>
                    <p>{item.subtitle}</p>
                    <a href={item.link}>{getPortfolio().linkText}</a>
                    <hr />
                    <span>{item.time}</span>
                </div>
            </div>
        </div>
    )
}

export default hocLaungeConsumer(Carts)
