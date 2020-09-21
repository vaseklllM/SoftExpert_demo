import React from "react"
import { Galerry, InfoBlock } from "."
import { hocPortfolio } from "../hoc"

const Portfolio = ({ bacgroundImg, label, activeCart, activeIndex }) => {
    return (
        <section className='portfolio' id='portfolio'>
            <div
                className='portfolio-bacground wow fadeIn'
                data-wow-delay='0.3s'
                style={{ background: `url(${bacgroundImg}) no-repeat center` }}
            />
            <h3 className='portfolio-label wow fadeInUp' data-wow-delay='0.3s'>
                {label}
            </h3>
            <InfoBlock activeCart={activeCart} />
            <Galerry activeCart={activeCart} activeIndex={activeIndex} />
            <div
                id='ScrollRow'
                className='scrollRow wow fadeIn'
                data-wow-delay='1s'
            >
                <div className='scrollRow-scroll' />
            </div>
        </section>
    )
}

export default hocPortfolio(Portfolio)
