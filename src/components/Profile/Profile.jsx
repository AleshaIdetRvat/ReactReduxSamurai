import React from "react"
import "./Profile.scss"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfHeadFuncComponent from "./ProfHead/ProfHeadFuncComponent"

const Profile = (props) => {
    console.log("____PROFILE RENDER")
    return (
        <div class="profile">
            <div class="profile__grid">
                <ProfHeadFuncComponent
                    {...props.userProfileData}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                    updateAvatar={props.updateAvatar}
                    isMyProfile={props.isMyProfile}
                    isAuth={props.isAuth}
                    toggleSetFetching={props.toggleSetFetching}
                />
                {/* <MyPostsContainer /> */}
            </div>
        </div>
    )
}

export default Profile
