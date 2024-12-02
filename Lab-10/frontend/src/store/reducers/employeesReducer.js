const initialState = {
    employees: [],
    loading: false,
    error: null,
};

const employeesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EMPLOYEES_REQUEST":
            return { ...state, loading: true };
        case "FETCH_EMPLOYEES_SUCCESS" :
            return { ...state, loading: false, employees: action.payload };
        case "FETCH_EMPLOYEES_FAILURE":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default employeesReducer;
