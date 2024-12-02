// frontend/src/App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import JobListings from './components/JobListings'
import Contact from './components/Contact'
import CompanyShowcase from './components/CompanyShowcase'

import Login from './components/Login'
import Register from './components/Register'

import ProtectedRoute from "./components/ProtectedRoute";

import EmployeesPage from "./components/Employees";
import AddJob from "./components/Job/AddJob";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<ProtectedRoute allowedTypes={["employee"]}><Home /></ProtectedRoute>}  />
          <Route path="/about" element={<ProtectedRoute allowedTypes={["employee"]}><About /></ProtectedRoute>} />
          <Route path="/jobs" element={<ProtectedRoute allowedTypes={["employee"]}><JobListings /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute allowedTypes={["employee"]}><Contact /></ProtectedRoute>} />
          <Route path="/companies" element={<ProtectedRoute allowedTypes={["employee"]}><CompanyShowcase /></ProtectedRoute>} />

          <Route path="/admin/employees" element={<ProtectedRoute allowedTypes={["admin"]}><EmployeesPage /></ProtectedRoute>}/>
          <Route path="/admin/addjob" element={<ProtectedRoute allowedTypes={["admin"]}><AddJob /></ProtectedRoute>}/>

        <Route path="*" element={<h1>Thanks for coming...We'll Reach out to you soon</h1>} />
      </Routes>
    </Router>
  )
}

export default App;
