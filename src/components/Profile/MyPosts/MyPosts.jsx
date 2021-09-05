import React from "react";
import "./MyPosts.scss";
import { Field, reduxForm } from "redux-form";
import Post from "./Post/Post";
import { required, maxLenghtCreator } from "../../utils/validators/validators";
import MyTextarea from "../../common/FormsControl/MyTextarea";

const maxLenght10 = maxLenghtCreator(10);
const NewPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} class="myposts__newpost">
            <Field
                name="newPost"
                component={MyTextarea}
                type="text"
                placeholder="Your post"
                validate={[required, maxLenght10]}
                cols="30"
                rows="2"
            />
            <div class="myposts__error"> </div>
            <button>Add post</button>
        </form>
    );
};

const NewPostReduxForm = reduxForm({ form: "newPost" })(NewPostForm);

const MyPosts = ({ addPost, profileData }) => {
    const postsElements = profileData.postsData.map((postData) => (
        <Post
            likes_count={postData.likes_count}
            message={postData.message}
            key={postData.id}
        />
    ));

    return (
        <div class="myposts">
            <NewPostReduxForm
                onSubmit={(values) => {
                    console.log(values.newPost);
                    addPost(values.newPost);
                }}
            />

            <div class="myposts__body">
                <div class="myposts__grid">{postsElements}</div>
            </div>
        </div>
    );
};

export default MyPosts;
