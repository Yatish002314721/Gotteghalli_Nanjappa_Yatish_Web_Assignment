import React, { useState } from "react";
import "./AddJob.css";
import {createJob} from "../../api";
import Navbar from "../Navbar";

const AddJob = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        jobTitle: "",
        description: "",
        salary: "",
        requirements: "",
        applyLink: "",
    });

    const [feedbackErr, setFeedbackErr] = useState("");
    const [feedbackSuccess, setFeedbackSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFeedbackErr("");
        setFeedbackSuccess("");

        try {
            const response = await createJob(formData.companyName, formData.jobTitle, formData.description,formData.salary, formData.requirements, formData.applyLink);

            if (response.success) {
                setFeedbackErr("");
                setFeedbackSuccess("Job added successfully!");
                setFormData({
                    companyName: "",
                    jobTitle: "",
                    description: "",
                    salary: "",
                    requirements: "",
                    applyLink: "",
                }); // Reset the form
            } else {
                setFeedbackSuccess("");
                setFeedbackErr(response.message || "Failed to add job.");
            }
        } catch (error) {
            setFeedbackSuccess("");
            setFeedbackErr("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar/>
        <div className="add-job-container">
            <h1>Add a New Job</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Job Title:
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Salary:
                    <input
                        type="text"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Requirements:
                    <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Apply Link:
                    <input
                        type="text"
                        name="applyLink"
                        value={formData.applyLink}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Add Job</button>
            </form>

            {feedbackSuccess && <div className="feedbackSuccess">{feedbackSuccess}</div>}
            {feedbackErr && <div className="feedbackErr">{feedbackErr}</div>}

        </div>
            </>
    );
};

export default AddJob;
