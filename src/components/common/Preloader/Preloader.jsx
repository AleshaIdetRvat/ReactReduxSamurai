import React from "react"
import { CSSTransition } from "react-transition-group"
import "./Preloader.scss"

const Preloader = ({ loading }) => {
    console.log("loading: ", loading)
    return (
        <CSSTransition
            in={loading}
            timeout={500}
            classNames='preloader'
            mountOnEnter
            unmountOnExit
        >
            <div className='preloader'>
                <div className='preloader__wall'>
                    <div className='preloader__spin-box' />
                </div>
            </div>
        </CSSTransition>
    )
}
export default React.memo(Preloader)
