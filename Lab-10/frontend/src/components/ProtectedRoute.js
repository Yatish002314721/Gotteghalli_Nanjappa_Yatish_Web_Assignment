import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedTypes }) => {
    const dispatch = useDispatch();
    const { userType, isAuthenticated, userName } = useSelector((state) => state.user);

    dispatch({ type: "GET_USER", payload: {} })

    if (!isAuthenticated || !allowedTypes.includes(userType)) {
        if(userType === 'admin'){
            return <Navigate to="/admin/employees" />;
        }
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
