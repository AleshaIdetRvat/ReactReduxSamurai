import axios from "axios"

const API_KEY = "fdb221eb5b83436ca4e2d455f845a5d4"

const increment = (() => {
    let counter = 0
    return () => ++counter
})()

export const newsAPI = {
    getNews: async () => {
        const options = {
            method: "GET",
            url: "https://newsapi.org/v2/everything",
            params: {
                q: "apple",
                from: "2021-11-06",
                to: "2021-11-06",
                sortBy: "relevancy",
                apiKey: API_KEY,
                page: increment(),
                pageSize: "10",
            },
        }
        try {
            const response = await axios.request(options)

            return response.data.articles
        } catch (error) {
            console.error(error)
        }
    },
}
