import React from "react"
import { connect } from "react-redux"

function BackgroundBox({ pageLoading }) {
    return (
        <div className='BgBox' style={{ opacity: !pageLoading ? "1" : "0" }}>
            <div className='BgBox-smallBox' />
            <div className='BgBox-BigBox' />
        </div>
    )
}
const mapStateToProps = state => ({
    pageLoading: state.pageLoading
})

export default connect(mapStateToProps)(BackgroundBox)
