import React from 'react'
import './MyPosts.scss'
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/state'


const MyPosts = (props) => {

    let postsElements = props.profileData.postsData.map(postData => <Post likes_count={postData.likes_count} message={postData.message} />)

    const textareaRef = React.createRef();

    const clickAddPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostActionCreator());
    }

    const changeTextarea = () => {
        let innerTextarea = textareaRef.current.value;
        props.dispatch(updateNewPostActionCreator(innerTextarea));

    }

    return (
        <div class="myposts">
            <div class="myposts__body">
                <div class="myposts__newpost">
                    <textarea onChange={changeTextarea} ref={textareaRef} value={props.profileData.innerTextarea} placeholder="Your post" cols="30" rows="2"></textarea>
                    <button onClick={clickAddPost}>Add post</button>
                </div>

                <div class="myposts__grid">
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts
