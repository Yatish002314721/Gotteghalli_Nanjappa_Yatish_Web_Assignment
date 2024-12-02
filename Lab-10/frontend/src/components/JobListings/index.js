// import React, {useEffect, useState} from 'react'
// import './jobListings.css'
//
// import {createJob, deleteAllJob, getAllJobs} from "../../api";
// import {jobPosts} from '../../jobPosts'
//
// const JobListings_bkp = () => {
//     const [jobs, setJobs] = useState([]);
//     const [error, setError] = useState("");
//
//     useEffect(() => {
//         // const deledtedJobs = async () => {
//         //     try {
//         //         const response = await deleteAllJob();
//         //         setError(response.message || "Failed to fetch jobs.");
//         //
//         //     } catch (err) {
//         //         setError("An error occurred while fetching jobs.");
//         //     }
//         // }
//         //
//         // const importJobs = async () => {
//         //     try {
//         //         jobPosts.forEach(async (job) => {
//         //             const response = await createJob(job.company, job.title, job.description, job.salary, job.requirements, job.applyLink);
//         //             if (!response.success) {
//         //                 setError(response.message || "Failed to import jobs.");
//         //             }
//         //         })
//         //     } catch (err) {
//         //         setError("An error occurred while fetching jobs.");
//         //     }
//         // }
//         // deledtedJobs();
//         // importJobs();
//
//
//         const fetchJobs = async () => {
//             try {
//                 const response = await getAllJobs();
//                 if (response.success) {
//                     setJobs(response.jobs);
//                 } else {
//                     setError(response.message || "Failed to fetch jobs.");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching jobs.");
//             }
//         };
//         fetchJobs();
//     }, []);
//
//
//     return(
//         <div className="job-listing-container">
//             <h1>Available Jobs</h1>
//             {error && <div className="error-message">{error}</div>}
//             {!error && jobs.length > 0 ? (
//                 <ul className="jobs-list">
//                     {jobs.map((job) => (
//                         <li key={job._id} className="job-list-item">
//                             <h3 className="job-title">{job.jobTitle}</h3>
//                             <p className="job-description">{job.jobDescription}</p>
//                             <p className="job-requirements"><strong>Requirements:</strong>{job.jobRequirements}</p>
//                             <p className="job-salary"><strong>Salary:</strong>{job.jobSalary}</p>
//                             <p className="job-lastUpdated"><strong>LastUpdated:</strong>{job.lastUpdated}</p>
//                             <a href={job.linkToApply} className="apply-link">Apply Now</a>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 !error && <p>No jobs available.</p>
//             )}
//         </div>
//     )
// }
//
// export default JobListings_bkp
//
//



import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../store/actions/jobActions";
import './jobListings.css'
import Navbar from "../Navbar";

const JobListings = () => {
    const dispatch = useDispatch();

    // Access Redux state
    const { jobs, loading, error } = useSelector((state) => state.jobs);

    useEffect(() => {
        dispatch(fetchJobs());
        console.log(jobs)
    }, [dispatch]);

    return (
        <>
         <Navbar/>
        <div className="job-listing-container">
            <h1>Available Jobs</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && jobs.length > 0 ? (
                <ul className="jobs-list">
                    {jobs.map((job) => (
                        <li key={job._id} className="job-list-item">
                            <h3 className="job-title">{job.jobTitle}</h3>
                            <p className="job-description">{job.jobDescription}</p>
                            <p className="job-requirements"><strong>Requirements:</strong>{job.jobRequirements}</p>
                            <p className="job-salary"><strong>Salary:</strong>{job.jobSalary}</p>
                            <p className="job-lastUpdated"><strong>LastUpdated:</strong>{job.lastUpdated}</p>
                            <a href={job.linkToApply} className="apply-link">Apply Now</a>
                        </li>
                    ))}
                </ul>
            ) : (
                !loading && !error && <p>No jobs available.</p>
            )}
        </div>
            </>
    );
};

export default JobListings;



