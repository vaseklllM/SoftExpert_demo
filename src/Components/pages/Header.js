import React from "react"
import { connect } from "react-redux"
import { BackgroundBox, Content, LaungeTogle } from "."
import MouseScrollDownImg from "../assets/header-img/mouseScrollDown.png"

function Header({ pageLoading }) {
    return (
        <section id='header'>
            <div
                className='bacgroundImg'
                style={{ transform: pageLoading ? "translateX(50%)" : null }}
            />
            <LaungeTogle />
            <BackgroundBox />
            <Content />
            <img
                className='MouseScrollDown'
                alt=''
                src={MouseScrollDownImg}
                style={{
                    transform: pageLoading
                        ? "translate(-50%, 200%)"
                        : "translate(-50%, 0)"
                }}
            />
        </section>
    )
}

const mapStateToProps = state => ({
    pageLoading: state.pageLoading
})

export default connect(mapStateToProps)(Header)
