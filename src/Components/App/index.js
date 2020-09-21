import React from "react"
import { Header } from "../pages"
import { connect } from "react-redux"
import AboutUs from "../AboutUs"
import Lang from "../languageServices"
import { Portfolio } from "../pages"
import { LanguageProvider } from "../softExpert-context"
import { hocApp } from "../hoc"
import { playAnimation } from "../redux/actions"
import "./fonts/fonst.scss"

const App = ({ launge, preloader }) => {
    return (
        <LanguageProvider value={new Lang(launge)}>
            {preloader}
            <Header />
            <AboutUs />
            <Portfolio />
        </LanguageProvider>
    )
}

const mapStateToProps = state => ({
    launge: state.launge,
    pageLoading: state.pageLoading
})

const mapDispatchToProps = dispatch => ({
    pageLoading: pageLoading => {
        dispatch(playAnimation(pageLoading))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(hocApp(App))
