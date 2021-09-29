import React from 'react'
import { NavLink } from 'react-router-dom'
import './Person.scss'

const Person = (props) => {
    return (
        <NavLink to={"/dialogs/" + props.personId}>
            <div class="dial-sidebar__people people-dialog">
                <div div class="people-dialog__icon" >
                </div>

                <div class="people-dialog__name">
                    <span>{props.Name}</span>
                </div>
            </div >
        </NavLink >
    )
}

export default Person
