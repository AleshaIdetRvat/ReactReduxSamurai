import React from "react"
import ProfHeadFuncComponent from "./ProfHead/ProfHeadFuncComponent"
import "./Profile.scss"

const Profile = (props) => (
    <div class='profile'>
        <div class='profile__grid'>
            <ProfHeadFuncComponent
                {...props.userProfileData}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                updateAvatar={props.updateAvatar}
                isMyProfile={props.isMyProfile}
                isAuth={props.isAuth}
                toggleSetFetching={props.toggleSetFetching}
            />
        </div>
    </div>
)

export default Profile
