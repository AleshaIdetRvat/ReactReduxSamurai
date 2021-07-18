//import rerenderTree from "../render"

//tempText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus saepe, odit ipsam blanditiis corporis natus, rem quasi numquam cupiditate voluptas quae nihil dolorem iure. Tempore voluptate atque accusantium est!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus saepe, odit ipsam blanditiis corporis natus, rem quasi numquam cupiditate voluptas quae nihil dolorem iure. Tempore voluptate atque accusantium est!";
export let store = {


    _state: {

        Messages: {
            usersData: [
                { name: "Ivan Ivanov", id: '1' },
                { name: "Petya Kozlov", id: '2' },
                { name: "Nina Shpagina", id: '3' }
            ],

            usersMsgData: [
                { text: "tempText", id: '1', myMsg: true },
                { text: "tempText", id: '2', myMsg: false },
                { text: "tempText", id: '3', myMsg: false },
                { text: "tempText", id: '4', myMsg: false },
                { text: "tempText", id: '5', myMsg: true },
                { text: "tempText", id: '6', myMsg: false },
                { text: "tempText", id: '7', myMsg: true },
                { text: "tempText", id: '8', myMsg: false },
            ],
            innerInput: "",
        },

        Profile: {
            postsData: [
                { id: 1, likes_count: "34", message: "Hello everybody" },
                { id: 2, likes_count: "5", message: "How are they?" },
                { id: 3, likes_count: "12", message: "Good day!!!" },
                { id: 4, likes_count: "34", message: "Hello everybody" },
                { id: 5, likes_count: "5", message: "How are they?" },
                { id: 6, likes_count: "12", message: "Good day!!!" },
            ],
            innerTextarea: "",
        }

    },

    dispatch(action) {
        switch (action.type) {
            case "ADD-POST":
                this.addPost();
                break;
            case "ADD-MESSAGE":
                this.addMessage();
                break;
            case "UPDATE-NEW-POST":
                this.updateNewPostText(action.newText);
                break;
            case "UPDATE-NEW-MESSAGE":
                this.updateNewMessageText(action.newText);
                break;

            default:
                break;
        }
    },

    getState() {
        return this._state;
    },

    _callBackRerender() { },

    addPost() {
        const newPost = {
            likes_count: '0',
            message: this._state.Profile.innerTextarea,
            id: 7
        }

        this._state.Profile.postsData.push(newPost)
        this._callBackRerender(this._state);
    },

    addMessage() {
        if (this._state.Messages.innerInput != "") {
            const newMessage = {
                text: this._state.Messages.innerInput,
                id: '1',
                myMsg: true,
            }

            this._state.Messages.usersMsgData.push(newMessage)
            this._callBackRerender(this._state);
        }
    },

    updateNewPostText(newText) {

        this._state.Profile.innerTextarea = newText;

        this._callBackRerender(this._state);
    },

    updateNewMessageText(newText) {

        this._state.Messages.innerInput = newText;

        this._callBackRerender(this._state);
    },

    subscribe(observer) {
        this._callBackRerender = observer;
    },
}


