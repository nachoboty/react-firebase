const initialState = {
    principal_data: undefined,
    principal_catalogo_data: undefined,
    principal_acumulado_data: undefined,
    principal_acumulado_catalogo_data: undefined,
    principal_pvps_data: undefined
};

function dataReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRINCIPAL_DATA":
            return {
                ...state,
                principal_data: action.payload,
            };
        case "SET_PRINCIPAL_CATALOGO_DATA":
            return {
                ...state,
                principal_catalogo_data: action.payload,
            };
        case "SET_PRINCIPAL_ACUMULADO_DATA":
            return {
                ...state,
                principal_acumulado_data: action.payload,
            };
        case "SET_PRINCIPAL_ACUMULADO_CATALOGO_DATA":
            return {
                ...state,
                principal_acumulado_catalogo_data: action.payload,
            };
        case "SET_PRINCIPAL_PVPS_DATA":
            return {
                ...state,
                principal_pvps_data: action.payload,
            };
        default:
            return state;
    }
}

export default dataReducer;