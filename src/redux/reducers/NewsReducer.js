import { newsAPI } from "../../components/api/newsApi"
export const SET_NEWS = "SET_NEWS"

const defaultState = {
    news: [],
}

const NewsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...state.news, ...action.payload],
            }

        default:
            return state
    }
}
const setNews = (payload) => ({ type: SET_NEWS, payload })

export const getNews = () => async (dispatch) => {
    const news = await newsAPI.getNews()
    if (news && news.length !== 0) {
        const newsWithPrettyDate = news.map((post) => ({
            ...post,
            publishedAt: new Date(post.publishedAt)
                .toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })
                .split(" ")
                .join("-"),
        }))

        dispatch(setNews(newsWithPrettyDate))
    }
}

export default NewsReducer
