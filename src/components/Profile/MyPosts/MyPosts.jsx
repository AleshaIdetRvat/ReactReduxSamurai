import React from "react";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = ({ addPost, profileData, updateTextarea }) => {
    let postsElements = profileData.postsData.map((postData) => (
        <Post
            likes_count={postData.likes_count}
            message={postData.message}
            key={postData.id}
        />
    ));

    const textareaRef = React.createRef();

    const clickAddPost = () => {
        addPost();
    };

    const changeTextarea = () => {
        let innerTextarea = textareaRef.current.value;
        updateTextarea(innerTextarea);
    };

    return (
        <div class="myposts">
            <div class="myposts__body">
                <div class="myposts__newpost">
                    <textarea
                        onChange={changeTextarea}
                        ref={textareaRef}
                        value={profileData.innerTextarea}
                        placeholder="Your post"
                        cols="30"
                        rows="2"
                    ></textarea>
                    <button onClick={clickAddPost}>Add post</button>
                </div>

                <div class="myposts__grid">{postsElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
