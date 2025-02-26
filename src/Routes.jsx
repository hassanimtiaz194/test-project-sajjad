import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { refreshToken } from "../services";

export const PublicPage = ({ children, redirect = "/", followFrom = false }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        if (followFrom && location.state?.from) {
            navigate(location.state.from, { replace: true });
            return null;
        }
        if (redirect) {
            return <Navigate replace to={redirect} />;
        }
    }

    return children;
};

export const PrivatePage = ({ children, condition = () => true, redirect = "/login" }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const accessToken = localStorage.getItem("accessToken");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                try {
                    const response = await refreshToken({ token });
                    localStorage.setItem("token", response.data.token);
                } catch (error) {
                    console.error("Token refresh failed:", error);
                    // localStorage.removeItem("accessToken");
                }
            }
            setLoading(false);
        };

        checkAuth();
    }, []);

    if (loading) return <div>Loading...</div>;

    return accessToken && condition(accessToken) ? children : <Navigate replace to={redirect} state={{ from: location }} />;
};
