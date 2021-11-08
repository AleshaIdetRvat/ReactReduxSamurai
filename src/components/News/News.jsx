import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import InfiniteScroll from "react-infinite-scroll-component"
import { getNews } from "../../redux/reducers/NewsReducer"
import "./News.scss"

const Article = (props) => {
    const { author, title, description, urlToImage, publishedAt, url } = props

    const wrapper = document.createElement("div")
    wrapper.innerHTML = description
    const strDescription = wrapper.innerText

    return (
        <article className='news-article'>
            <div className='news-article__body'>
                <div className='news-article__row'>
                    <div className='news-article__content article-content'>
                        <div className='article-content__grid'>
                            <h2 className='article-content__title'>{title}</h2>
                            <div className='article-content__desc'>
                                {strDescription},{" "}
                                <a
                                    className='article-content__desc'
                                    target='_blank'
                                    rel='noreferrer'
                                    href={url}
                                >
                                    See more
                                </a>
                            </div>
                            <div className='article-content__author'>
                                Author: <i>{author}</i>
                            </div>
                            <div className='article-content__date'>
                                {publishedAt}
                            </div>
                        </div>
                    </div>
                    <div className='news-article__image-container'>
                        <img
                            className='news-article__image'
                            src={urlToImage}
                            alt='news-image'
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}

const News = () => {
    const news = useSelector(({ News }) => News.news)
    const dispatch = useDispatch()
    console.log(news)
    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        dispatch(getNews())
    }, [])

    const fetchMoreData = () => {
        if (news.length >= 1000) {
            setHasMore(false)
            return
        }

        dispatch(getNews())
    }

    return (
        <>
            <div className='news'>
                <h1 className='news__title'>News</h1>

                <InfiniteScroll
                    className='news__container'
                    style={{ overflow: "unset" }}
                    dataLength={news.length}
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {news.map((post, index) => (
                        <Article {...post} key={index} />
                    ))}
                </InfiniteScroll>
            </div>
        </>
    )
}

export default News
