import React from "react"

export default function PreloaderClass({ preloadState }) {
    return (
        <div className={`preloader${preloadState ? "" : " preloader-none"}`}>
            <h2>Soft Expert</h2>
        </div>
    )
}
