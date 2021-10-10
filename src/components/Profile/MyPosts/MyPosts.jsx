import React from "react"
import "./MyPosts.scss"
import Post from "./Post/Post"
import MyTextarea from "../../common/FormsControl/MyTextarea"
import { Formik } from "formik"
import * as yup from "yup"

const NewPostForm = ({ onSubmitPost }) => {
    const validationSchema = yup.object().shape({
        newPost: yup.string().max(40),
    })

    return (
        <Formik
            initialValues={{
                newPost: "",
            }}
            validateOnBlur
            onSubmit={(values) => {
                onSubmitPost(values)
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
            }) => {
                return (
                    <form onSubmit={handleSubmit} class="myposts__newpost">
                        <MyTextarea
                            name="newPost"
                            type="text"
                            placeholder="Your post"
                            cols="30"
                            rows="2"
                            value={values.newPost}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.newPost}
                            touched={touched.newPost}
                        />
                        <div class="myposts__error"> </div>
                        <button disabled={!isValid || !dirty} type="submit">
                            Add post
                        </button>
                    </form>
                )
            }}
        </Formik>
    )
}

const MyPosts = ({ addPost, profileData }) => {
    const postsElements = profileData.postsData.map((postData) => (
        <Post
            likes_count={postData.likes_count}
            message={postData.message}
            key={postData.id}
        />
    ))

    return (
        <div class="myposts">
            <NewPostForm
                onSubmitPost={(values) => {
                    addPost(values.newPost)
                }}
            />

            <div class="myposts__body">
                <div class="myposts__grid">{postsElements}</div>
            </div>
        </div>
    )
}

export default MyPosts
