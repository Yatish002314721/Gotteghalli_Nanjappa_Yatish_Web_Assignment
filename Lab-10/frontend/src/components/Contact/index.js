import React, { useState } from 'react'
import { TextField, Button, Typography, Box } from '@mui/material'
import './contact.css'
import Navbar from "../Navbar";
function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        // Update the specified field in formData while keeping the other fields unchanged.
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData)
    }

    return (
        <>
            <Navbar/>
        <div className="contact-container">
            <Box className="contact-box" display="flex" flexDirection="column" alignItems="center" mt={4}>
                <Typography variant="h4" gutterBottom>Contact Us</Typography>
                <TextField
                    label="Name"
                    name="name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    label="Message"
                    name="message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    fullWidth
                    onChange={handleChange}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                    Send Message
                </Button>
            </Box>
        </div>
        </>
    )
}

export default Contact;
