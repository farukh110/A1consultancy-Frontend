import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = sessionStorage.getItem('token');

    if (!token) {
        return <Navigate to="/admin/login" />;
    }

    return children;
};

export default ProtectedRoute;
