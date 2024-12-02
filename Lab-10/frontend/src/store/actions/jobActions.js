import {getAllJobs} from "../../api";

export const fetchJobs = () => async (dispatch) => {
    dispatch({ type: "FETCH_JOBS_REQUEST" });
    try {
        const response = await getAllJobs();
        if (response.success) {
            dispatch({ type: "FETCH_JOBS_SUCCESS", payload: response.jobs });
        } else {
            dispatch({ type: "FETCH_JOBS_FAILURE", payload: response.message });
        }
    } catch (error) {
        dispatch({ type: "FETCH_JOBS_FAILURE", payload: error.message });
    }
};
