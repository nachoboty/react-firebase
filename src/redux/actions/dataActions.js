export function setPrincipalData(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_PRINCIPAL_DATA",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function setPrincipalCatalogoData(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_PRINCIPAL_CATALOGO_DATA",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function setPrincipalAcumuladoData(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_PRINCIPAL_ACUMULADO_DATA",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function setPrincipalAcumuladoCatalogoData(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_PRINCIPAL_ACUMULADO_CATALOGO_DATA",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function setPrincipalPvpsData(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_PRINCIPAL_PVPS_DATA",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

