import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
    const user=useSelector((state)=>state.userInfo)
    console.log(user.user)
    if (!user.user) {
        return <Navigate to="/login" /> ;
    }
    return children;
};

export default ProtectedRoute;

