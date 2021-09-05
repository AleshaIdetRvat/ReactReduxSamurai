import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/reducers/ProfileReducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profileData: state.Profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPost) => {
            dispatch(addPostActionCreator(newPost));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
