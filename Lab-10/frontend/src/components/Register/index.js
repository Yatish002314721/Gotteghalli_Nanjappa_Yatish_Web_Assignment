import React, { useState } from 'react'
import { registerUser } from '../../api'
import './register.css'
import Navbar from "../Navbar";

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        type: "",
    });

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    // handle form data change
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    // form validation login
    const validateForm = ()=>{
        if(!formData.email || !formData.fullName || !formData.password){
            setError('All fields are required')
            return false
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(formData.password)) {
            setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number')
            return false
        }
        if (!formData.type){
            setError('Please select a role')
            return false
        }
        setError('')
        return true
    }
    // Handle form submission
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!validateForm()) return;

        try{
            const response = await registerUser(formData.email, formData.fullName, formData.password, formData.type)
            if (!response.success) {
                setError(response.message)
                return
            }
            setError('')
            setSuccess(response.message)
            setFormData({email:'', fullName:'', password:'', type:''})
        }catch(err){
            setError(err.response?.data?.message||'Registration failed. Please try again.')
        }
    }
    
    return (
        <>
        <Navbar/>
        <div className="register-container">
        {success === "" ? (
            <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label><input type="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Full Name:</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Password:</label><input type="password" name="password" value={formData.password} onChange={handleChange} required/>
                </div>
                <div>
                    <label>Role:</label>
                    <select name="type" value={formData.type} onChange={handleChange} required>
                        <option value="">Select a role</option>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                    </select>
                </div>

                {error && <p className="error-message">{error}</p>}
                <button type="submit">Register</button>
            </form>
            <div style={{ textAlign: 'center' }}>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
            </>
        ):(
        <div style={{ textAlign: 'center' }}>
            <h3 className="success-message">{success}</h3>   
                <p>Go to <a href="/login">Login</a></p>
            </div>
        )}

        </div>
            </>
    )
}

export default Register