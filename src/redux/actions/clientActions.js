export function setUser(payload) {
    return async function (dispatch) {
        try {
            return dispatch({
                type: "SET_USER",
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };
}