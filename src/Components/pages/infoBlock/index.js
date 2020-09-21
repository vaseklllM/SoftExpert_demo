import React from "react"
import { hocLaungeConsumer } from "../../hoc"
import liWrapper from "./Li"

function InfoBlock({ activeCart, launge: { getCarts, getPortfolio } }) {
    const carts = getCarts()[activeCart]
    const portfolio = getPortfolio()

    let left = carts.LeftTechnologies.map((items, index) => {
        return <li key={`left${index}`}>{liWrapper(items)}</li>
    })

    let right = carts.RightTechnologies.map((items, index) => {
        return <li key={`Right${index}`}>{liWrapper(items)}</li>
    })
    return (
        <div className='infoBlock'>
            <div className='description'>
                <div
                    className='description-title wow fadeInLeft'
                    data-wow-delay='0.3s'
                >
                    {carts.name}
                </div>
                <div
                    className='description-text wow fadeInUp'
                    data-wow-delay='0.3s'
                >
                    {carts.infoBlockText}
                </div>
            </div>
            <div className='technologies'>
                <div
                    className='technologies-title wow fadeInRight'
                    data-wow-delay='0.3s'
                >
                    {portfolio.title}
                </div>
                <div
                    className='technologies-technology wow fadeInUp'
                    data-wow-delay='0.3s'
                >
                    <div className='technologies-technology-list'>
                        <ul>{left}</ul>
                    </div>
                    <div className='technologies-technology-line' />
                    <div className='technologies-technology-list'>
                        <ul>{right}</ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default hocLaungeConsumer(InfoBlock)
