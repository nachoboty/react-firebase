const initialState = {
    user: null
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRINCIPAL_DATA":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_PRINCIPAL_CATALOGO_DATA":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_PRINCIPAL_ACUMULADO_DATA":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_PRINCIPAL_ACUMULADO_CATALOGO_DATA":
            return {
                ...state,
                user: action.payload,
            };
        case "SET_PRINCIPAL_PVPS_DATA":
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
}

export default dataReducer;