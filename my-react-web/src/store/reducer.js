const userName = ''

const reducer = (state = userName ,action) => {
    console.log(action,'ac')
    switch (action.type) {
        case "SET_USERNAME":
            return state = action.name;
        default:
            return state;
    }
}

export default reducer