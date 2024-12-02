import {getAllUser} from "../../api";

export const fetchEmployees = () => async (dispatch) => {
    dispatch({ type: "FETCH_EMPLOYEES_REQUEST" });
    try {
        const response = await getAllUser();
        if (response.status === 200 || response.status === 201 || response.statusText === "OK") {
            dispatch({ type: "FETCH_EMPLOYEES_SUCCESS", payload: response.data });
        } else {
            dispatch({ type: "FETCH_EMPLOYEES_FAILURE", payload: "Failed to fetch employees." });
        }
    } catch (error) {
        dispatch({ type: "FETCH_EMPLOYEES_FAILURE", payload: error.message });
    }
};