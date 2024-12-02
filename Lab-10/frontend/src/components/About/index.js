// frontend/src/components/About.js
import React from 'react';
import { Container, Typography, Box, Card, Grid, CardContent } from '@mui/material'
import Navbar from "../Navbar";

function About() {
    return (
        <>
            <Navbar/>
        <Container>
            <Box textAlign="center" mt={4}>
                <Typography variant="h2" gutterBottom>About Us</Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    Welcome to our job portal, where we connect talented job seekers with top companies
                    across various industries. Our mission is to facilitate meaningful connections that
                    empower careers and foster innovation.
                </Typography>
            </Box>           
        </Container>
            </>
    )
}

export default About;