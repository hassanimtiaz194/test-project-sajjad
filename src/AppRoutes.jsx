import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { PrivatePage, PublicPage } from "./Routes";
import UpdateProfile from "./pages/UpdateProfile";

function AppRoutes() {
    const [auth, setAuth] = React.useState({ loading: true });

    React.useEffect(() => {
        setTimeout(() => setAuth({ loading: false }), 1000);
    }, []);

    if (auth.loading) return <Typography variant="h6">Loading...</Typography>;

    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={
                        <PrivatePage>
                            <Home />
                        </PrivatePage>
                    } />
                    <Route path="/update-profile" element={
                        <PrivatePage>
                            <UpdateProfile />
                        </PrivatePage>
                    } />
                    <Route
                        path="/login"
                        element={
                            <PublicPage>
                                <Login />
                            </PublicPage>
                        }
                    />
                    <Route
                        path="/signup"
                        element={
                            <PublicPage>
                                <Signup />
                            </PublicPage>
                        }
                    />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default AppRoutes;
