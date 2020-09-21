import React from "react"
import { GaleryCart } from "../pages"
import { hocLaungeConsumer } from "../hoc"

function Galerry({ activeIndex, activeCart, launge: { getCarts } }) {
    const cart = getCarts().map((item, index) => {
        return (
            <GaleryCart
                key={`cart${index}`}
                item={item}
                activeCart={activeCart === index ? true : false}
                activeIndex={() => {
                    activeIndex(index)
                }}
            />
        )
    })
    return <div id='Galerry'>{cart}</div>
}
export default hocLaungeConsumer(Galerry)
