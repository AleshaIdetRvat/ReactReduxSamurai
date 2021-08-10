import React from "react";
import "./Preloader.scss";

const Preloader = () => {
    return (
        <div class="preloader">
            <div class="preloader__wall">
                <div class="preloader__spin-box"></div>
            </div>
        </div>
    );
};

export default Preloader;
