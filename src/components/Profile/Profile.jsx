import React from "react"
import ProfHead from "./ProfHead/ProfHead"
import "./Profile.scss"
import MyPostsContainer from "./MyPosts/MyPostsContainer"
import ProfHeadProfHeadFuncComponent from "./ProfHead/ProfHeadFuncComponent"

const Profile = (props) => {
    return (
        <div class="profile">
            <div class="profile__grid">
                <ProfHeadProfHeadFuncComponent
                    {...props.userProfileData}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                    isMyProfile={props.isMyProfile}
                    isAuth={props.isAuth}
                />
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile
