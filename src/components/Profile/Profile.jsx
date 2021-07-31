import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfHead from "./ProfHead/ProfHead";
import mainImage from "./main_image.png";
import "./Profile.scss";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div class="profile">
            <div class="profile__grid">
                <ProfHead Name="Alexey Alexeevskiy" profAva={mainImage} />
                <MyPostsContainer />
            </div>
        </div>
    );
};

export default Profile;
