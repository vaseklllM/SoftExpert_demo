import React, { Component } from "react"
import { ClassScroll } from "../utils"
import { LanguageConsumer } from "../softExpert-context"

const hocPortfolio = Pages => {
    return class extends Component {
        state = {
            activeCart: 0
        }

        componentDidMount() {
            let scroll = new ClassScroll(
                document.querySelector("#ScrollRow"),
                document.querySelector("#Galerry")
            )
            scroll.push()
        }

        render() {
            let activeIndex = id => {
                // изменяет фон блока портфолио
                this.setState(() => {
                    return {
                        activeCart: id
                    }
                })
            }
            const { activeCart } = this.state

            return (
                <LanguageConsumer>
                    {({ getCarts, getPortfolio }) => {
                        return (
                            <Pages
                                bacgroundImg={
                                    getCarts()[this.state.activeCart]
                                        .bacgroundImg
                                }
                                label={getPortfolio().label}
                                activeCart={activeCart}
                                activeIndex={activeIndex}
                            />
                        )
                    }}
                </LanguageConsumer>
            )
        }
    }
}
export default hocPortfolio
