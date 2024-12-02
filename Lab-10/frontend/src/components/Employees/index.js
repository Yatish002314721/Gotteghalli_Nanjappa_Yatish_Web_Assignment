// import React, { useEffect, useState } from "react";
// import "./Employees.css";
// import {getAllUser} from "../../api";
//
// const EmployeesPage = () => {
//     const [users, setUsers] = useState([]);
//     const [error, setError] = useState("");
//
//     // Fetch all users on component mount
//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await getAllUser() // Ensure your endpoint matches
//
//                 if (response.status === 200 || response.status === 201 || response.statusText === "OK") {
//                     setUsers(response.data);
//                 } else {
//                     setError("Failed to fetch users.");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching users.");
//             }
//         };
//
//         fetchUsers();
//     }, []);
//
//     return (
//         <div className="admin-container">
//             <h1>Employees</h1>
//             {error && <div className="error-message">{error}</div>}
//
//             {!error && users.length > 0 ? (
//                 <table className="users-table">
//                     <thead>
//                     <tr>
//                         <th>Email</th>
//                         <th>Name</th>
//                         <th>Type</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td>{user.email}</td>
//                             <td>{user.fullName}</td>
//                             <td>{user.type}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             ) : (
//                 !error && <p>No users found.</p>
//             )}
//         </div>
//     );
// };
//
// export default EmployeesPage;


import React, { useEffect } from "react";
import "./Employees.css";
import { useSelector, useDispatch } from "react-redux";
import {fetchEmployees} from "../../store/actions/employeesActions";
import Navbar from "../Navbar";

const EmployeesPage = () => {

    const dispatch = useDispatch();
    const { employees, loading, error } = useSelector((state) => state.employees);
    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return (
        <>
            <Navbar/>
        <div className="admin-container">
            <h1>Employees</h1>
            {loading && <p>Loading...</p>}
            {error && <div className="error-message">{error}</div>}

            {!error && employees.length > 0 ? (
                <table className="users-table">
                    <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Type</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map((user) => (
                        <tr key={user._id}>
                            <td>{user.email}</td>
                            <td>{user.fullName}</td>
                            <td>{user.type}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                !error && <p>No users found.</p>
            )}
        </div>
        </>
    );
};

export default EmployeesPage;
