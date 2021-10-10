import { addPostActionCreator, ProfileReducer, deletePost } from "./ProfileReducer"

const defaultState = {
    postsData: [{ id: 2 }, { id: 1 }, { id: 3 }],
}

it("length of posts should be incremented", () => {
    // 1) test data
    const action = addPostActionCreator("sometext")
    // 2) action data
    const newState = ProfileReducer(defaultState, action)
    // 3) expectation
    expect(newState.postsData.length).toBe(defaultState.postsData.length + 1)
})

it("after deleting length of posts should be decremented", () => {
    // 1) test data
    const action = deletePost(2)
    // 2) action data
    const newState = ProfileReducer(defaultState, action)
    // 3) expectation
    expect(newState.postsData.length).toBe(defaultState.postsData.length - 1)
})

it("new post id should be valid", () => {
    // 1) test data
    const newPostsTestAmount = 5

    let newState = {
        postsData: [],
    }

    let postsValidIds = []

    // 2) action data

    for (let i = 0; i < newPostsTestAmount; i++) {
        newState = ProfileReducer(
            newState,
            addPostActionCreator("sometextsometextsometextsometext")
        )
        postsValidIds.push(newState.postsData[newState.postsData.length - 1].id)
    }

    const postsIds = newState.postsData.map((post) => Number(post.id))
    // console.log("postsIds", postsIds)
    // console.log("postsValidIds", postsValidIds)

    // 3) expectation
    expect(JSON.stringify(postsIds)).toBe(JSON.stringify(postsValidIds))
})
