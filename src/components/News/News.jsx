import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import { getNews } from "../../redux/reducers/NewsReducer"

const News = () => {
    const news = useSelector(({ News }) => News.news)
    const dispatch = useDispatch()
    console.log(news)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const fetchMoreData = () => {
        if (news.length >= 100) {
            setHasMore(false)
            return
        }
        dispatch(getNews())
    }

    return (
        <div>
            <h1>demo: react-infinite-scroll-component</h1>
            <hr />
            <InfiniteScroll
                dataLength={news.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {news.map((post, index) => (
                    <div key={index}> {post.content}</div>
                ))}
            </InfiniteScroll>
        </div>
    )
}

export default News
