import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostActionCreator,
    updateNewPostActionCreator,
} from "../../../redux/store";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                    store.dispatch(updateNewPostActionCreator());
                };

                const updateTextarea = (innerTextarea) => {
                    store.dispatch(updateNewPostActionCreator(innerTextarea));
                };
                return (
                    <MyPosts
                        addPost={addPost}
                        updateTextarea={updateTextarea}
                        profileData={store.getState().Profile}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
