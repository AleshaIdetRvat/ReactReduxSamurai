import React from 'react'
import './Post.scss'
import postImage from './dice.png'

const Post = (props) => {
    return (
        <div class="post">
            <img src={postImage} alt="postImage" />
            <div class="post__msg">{props.message}</div>
            <div class="post__likes likes">
                <span class="likes__count">{props.likes_count}</span>
                <span> Likes</span>
            </div>
        </div>
    )
}

export default Post
