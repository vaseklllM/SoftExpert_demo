import React from 'react'
import { hocLaungeConsumer } from '../hoc'

function Portfolio({ launge }) {
    const { portfolio, portfolioHover } = launge.getHeader().Buttons
    return (
        <button className='ContentBlock-buttons-btn portfolio-btn'
            onClick={() => {
                document.getElementById('portfolio').scrollIntoView({ block: "center", behavior: "smooth" })
            }}
        >
            <span data-title={portfolioHover}>{portfolio}</span>
        </button>
    )
}
export default hocLaungeConsumer(Portfolio)