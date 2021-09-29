import React from "react"
import "./Preloader.scss"

const Preloader = ({ loading = true }) => {
    if (!loading) return <></>
    return (
        <div class="preloader">
            <div class="preloader__wall">
                <div class="preloader__spin-box"></div>
            </div>
        </div>
    )
}

export default Preloader
