import React from "react"
import { usePrevious } from "../../../hooks/previous.hook"
import "./Preloader.scss"

const Preloader = ({ loading }) => {
    const [closing, setClosing] = React.useState(true)

    const prevLoading = usePrevious(loading)

    React.useEffect(() => {
        if (prevLoading && !loading) {
            setClosing(true)

            setTimeout(() => {
                setClosing(false)
                console.log("closing end")
            }, 1000)
        }
    }, [loading])

    if (!loading && !closing) return null
    return (
        <div className={`preloader ${closing && "--closing"}`}>
            <div className="preloader__wall">
                <div className="preloader__spin-box"></div>
            </div>
        </div>
    )
}

export default Preloader
