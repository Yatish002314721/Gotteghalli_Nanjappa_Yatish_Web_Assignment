import React from 'react'
import { Box, Button, Typography, Container, Grid, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import Navbar from "../Navbar";

function Home() {
    return (
        <>
            <Navbar/>
        <Container>

            <Box textAlign="center" mt={4}>
                <Typography variant="h2" gutterBottom>Welcome to the Job Portal</Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                    Discover your dream job or showcase your company to top talent. Our platform is designed
                    to help job seekers and employers connect seamlessly.
                </Typography>
                <Button
                    variant="contained"
                    color="grey"
                    size="large"
                    component={Link}
                    to="/jobs"
                    sx={{ mt: 2 }}
                >
                    Explore Jobs
                </Button>
            </Box>

            {/* Section for Features */}
            <Box mt={6}>
    <Typography variant="h4" align="center" gutterBottom>What We Offer</Typography>
    <Grid container spacing={4} mt={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Job Listings
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Browse thousands of job opportunities across different sectors and apply for roles that fit you best.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/jobs"
                        sx={{ mt: 2 }}
                    >
                        View Jobs
                    </Button>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div" gutterBottom>
                        Get in Touch
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Have questions? Contact us for more information or support with your job search.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={Link}
                        to="/contact"
                        sx={{ mt: 2 }}
                    >
                        Contact Us
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Box>

        </Container>
            </>
    )
}
export default Home