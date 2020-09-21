import React, { Component } from "react"
import { Preloader } from "../pages"
import WOW from "wowjs"

const hocApp = Page => {
    return class extends Component {
        componentDidMount() {
            new WOW.WOW().init()
        }
        state = {
            preload: true
        }
        render() {
            const { launge, pageLoading } = this.props
            window.onload = () => {
                setTimeout(() => {
                    this.setState({ preload: false })
                    setTimeout(() => {
                        pageLoading(false)
                    }, 2200)
                }, 1500)
            }
            const { preload } = this.state
            const preloader = pageLoading ? (
                <Preloader preloadState={preload} />
            ) : null // убирает прелоадер после загрузки
            return <Page launge={launge} preloader={preloader} />
        }
    }
}

export default hocApp
