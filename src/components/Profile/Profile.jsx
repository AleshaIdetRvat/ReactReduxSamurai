import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfHead from './ProfHead/ProfHead'
import mainImage from './main_image.png'
import './Profile.scss'

const Profile = (props) => {
    return (
        <div class="profile">
            <div class="profile__grid">
                <ProfHead Name="Alexey Alexeevskiy" profAva={mainImage} />
                <MyPosts
                    updateNewPostText={props.updateNewPostText}
                    profileData={props.profileData}
                    addPost={props.addPost} />
            </div>


        </div>
    )
}

export default Profile
