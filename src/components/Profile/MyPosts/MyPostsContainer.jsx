import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from "../../../redux/state";

const MyPostsContainer = ({ dispatch, profileData }) => {
    const addPost = () => {
        dispatch(addPostActionCreator());
        dispatch(updateNewPostActionCreator());
    };

    const updateTextarea = (innerTextarea) => {
        dispatch(updateNewPostActionCreator(innerTextarea));
    };

    return (
        <MyPosts
            addPost={addPost}
            updateTextarea={updateTextarea}
            profileData={profileData}
        />
    );
};

export default MyPostsContainer;
