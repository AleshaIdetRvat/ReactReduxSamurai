import React from 'react'

import './ProfHead.scss'
const ProfHead = (props) => {
    return (
        <div class="prof-head">
            <div class="prof-head__body">
                <div class="prof-head__image">
                    <img src={props.profAva} />
                </div>
                <div class="prof-head__name">{props.Name}</div>
            </div>

        </div>
    )
}

export default ProfHead
