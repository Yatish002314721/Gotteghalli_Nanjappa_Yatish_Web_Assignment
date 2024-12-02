export const setUser = (userType, userName) => {
    return { type: "SET_USER", payload: { userType, userName } };
};

export const logoutUser = () => {
    return { type: "LOGOUT_USER", payload: { "userType":null, "userName":null }};
};
