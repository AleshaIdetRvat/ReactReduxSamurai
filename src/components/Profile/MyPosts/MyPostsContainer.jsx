import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from "../../../redux/store";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profileData: state.Profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateTextarea: (innerTextarea) => {
            dispatch(updateNewPostActionCreator(innerTextarea));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
