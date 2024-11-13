

import React, { useState } from 'react';
import './Login.css'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
    const requestBody = { email, password };
    fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Login successful!');
          localStorage.setItem('token', data.token);
          navigate('/home/');
        } else {
          alert(data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  return (
    <div className='container'>

        <h3> Job Portal </h3>
         <Form onSubmit={handleLogin} className="col-lg-6 offset-lg-3">
               <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                <Form.Text type="invalid">
                    {Error}
                </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" >
                   Submit
                </Button>
                
        </Form>
        </div>
    
  );
};

export default Login;