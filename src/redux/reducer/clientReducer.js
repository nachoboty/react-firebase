const initialState = {
    user: undefined
};

function clientReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}

export default clientReducer;