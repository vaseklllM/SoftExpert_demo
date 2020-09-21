import React from "react"
import { AboutUsBtn } from "."
import { PortfolioBtn } from "."
import { connect } from "react-redux"
import { hocLaungeConsumer } from "../hoc"

function Content({ launge: { getHeader }, pageLoading }) {
    const { paragraph, logoLeft, logoRight, commit } = getHeader()
    return (
        <div className='ContentBlock'>
            <p className={`ContentBlock-hello${!pageLoading ? "" : " none"}`}>
                {paragraph}
            </p>
            <h1 className={`ContentBlock-logo${!pageLoading ? "" : " none"}`}>
                {logoLeft} <br /> {logoRight}
            </h1>
            <p className={`ContentBlock-commit${!pageLoading ? "" : " none"}`}>
                {commit}
            </p>
            <div
                className={`ContentBlock-buttons ${
                    !pageLoading ? "" : "none-buttons"
                }`}
            >
                <PortfolioBtn />
                <AboutUsBtn />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    pageLoading: state.pageLoading
})

export default connect(mapStateToProps)(hocLaungeConsumer(Content))
