import React, { Component } from 'react'
import { LanguageConsumer } from '../softExpert-context'


const hocSlider = (View) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                slide: 0,
                numberNextImg: 0,
                animateWidth: 'inherit',
                newImgIndex: 0,
                scrollPause: false, // пауза слайдера после нажатия стрелок
                clickCheker: false, // пауза автопроигрывания слайдера после нажатия стрелок
            }
        }

        slideRight(Users) {                       // возвращает номер текущего слайда
            this.setState(({ slide }) => {
                let newSlide = 0
                if (slide < Users.length - 1) {
                    newSlide = slide + 1;
                } else {
                    newSlide = slide
                }
                return {
                    slide: newSlide
                }
            })
        }

        slideLeft() {                                // возвращает номер текущего слайда
            this.setState(({ slide }) => {
                let newSlide = 0
                if (slide > 0) {
                    newSlide = slide - 1;
                } else {
                    newSlide = 0
                }
                return {
                    slide: newSlide
                }
            })
        }

        slideNextImg(nexNum) {                       // изменяет картинки в слайдере
            this.setState({ numberNextImg: nexNum })
            document.querySelector('#SliderBackImg').onload = () => {
                this.setState({ animateWidth: '0' })
                setTimeout(() => {
                    this.setState({
                        animateWidth: 'inherit',
                        newImgIndex: this.state.slide
                    })
                }, 400);
            }
        }

        scrollPause() {                              // пауза слайдера после нажатия стрелок
            this.setState({ scrollPause: true })
            setTimeout(() => {
                this.setState({ scrollPause: false })
            }, 800);
        }

        scrollAutoPlauPause() {                      // пауза автопроигрывания слайдера после нажатия стрелок
            this.setState({ clickCheker: true }) // отключает автопроигрывание слайдера
        }

        render() {
            return (
                <LanguageConsumer>
                    {
                        ({ getUsers }) => {
                            const Users = getUsers()
                            let SliderNumeric = this.state.slide

                            let IndexNewSlide = (index) => {
                                this.scrollAutoPlauPause()
                                this.setState({ slide: index })
                                this.slideNextImg(index)
                            }

                            let buttonRightClick = () => {
                                this.scrollAutoPlauPause()
                                if (this.state.scrollPause === false) {
                                    this.scrollPause()
                                    this.slideRight(Users)
                                    if (this.state.slide < Users.length - 1) {
                                        const nexNum = SliderNumeric + 1 >= Users.length - 1 ? Users.length - 1 : SliderNumeric + 1 // индекс следующей картинки
                                        this.slideNextImg(nexNum)
                                    }
                                }
                            }

                            let buttonLeftClick = () => {
                                this.scrollAutoPlauPause()
                                if (this.state.scrollPause === false) {
                                    this.scrollPause()
                                    this.slideLeft()
                                    if (this.state.slide > 0) {
                                        const previousNum = SliderNumeric - 1 <= 0 ? 0 : SliderNumeric - 1 // индекс предыдущей картинки
                                        this.slideNextImg(previousNum)
                                    }
                                }
                            }
                            return (
                                <View
                                    buttonLeftClick={buttonLeftClick}
                                    slide={this.state.slide}
                                    numberNextImg={this.state.numberNextImg}
                                    animateWidth={this.state.animateWidth}
                                    newImgIndex={this.state.newImgIndex}
                                    buttonRightClick={buttonRightClick}
                                    IndexNewSlide={IndexNewSlide}
                                />
                            )
                        }
                    }
                </LanguageConsumer>
            )
        }
    }
}

export default hocSlider