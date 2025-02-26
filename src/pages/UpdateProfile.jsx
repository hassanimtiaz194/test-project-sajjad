import React, { useState } from "react";
import { Container, TextField, Button, Typography, CircularProgress, Alert } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { updateUserProfile } from "../../services"; // Assume API function exists

const UpdateProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const oldData = location.state || {};

    const [formData, setFormData] = useState({
        id: oldData.id || "",
        username: oldData.username || "",
        deviceType: oldData.deviceType || "",
        status: oldData.status || "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!formData.username) {
            setError("Username is required.");
            setLoading(false);
            return;
        }

        try {
            await updateUserProfile(formData);
            navigate("/");
        } catch (error) {
            setError(error.response?.data?.message || "Update failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Update Profile
            </Typography>

            {error && <Alert severity="error">{error}</Alert>}

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    name="username"
                    fullWidth
                    margin="normal"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <TextField
                    label="Device Type"
                    name="deviceType"
                    fullWidth
                    margin="normal"
                    value={formData.deviceType}
                    onChange={handleChange}
                />
                <TextField
                    label="Status"
                    name="status"
                    fullWidth
                    margin="normal"
                    value={formData.status}
                    onChange={handleChange}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Update"}
                </Button>
            </form>
        </Container>
    );
};

export default UpdateProfile;
