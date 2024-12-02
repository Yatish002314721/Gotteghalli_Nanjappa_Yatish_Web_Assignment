# React Project Job Portal with Material UI and Axios

## Project overview
This project is a Job Portal built using React, Material UI (optional), and Axios. It aims to provide a user-friendly interface for job seekers to explore job listings and company profiles. The admin portal includes two pages: Employees and Add Job. The employee portal includes five key pages: Home, Job Listings, Companies, Contact, and Login. 

## Objective
Extend the Previous Task
-- Use Redux to Manage All States.
-- Allow registration of two roles: Admin and Employee.
-- Differentiate Admin and Employee Functionality.

## Project Setup
1. Set Up the Frontend: 
    `cd frontend`
    `npm install`
2. Start the Frontend App:  
    `npm start`
3. Set Up the Backend:
    `cd backend`
    `npm install` 
4. Start the Backend Server:
    `node --watch server.js`

## Structure
<pre>
week10_assmt_jobPortal              
├─ backend                          
│  ├─ controllers                   
│  │  ├─ authController.js          
│  │  ├─ jobController.js           
│  │  └─ userController.js          
│  ├─ images                        
│  │  ├─ alibaba.png                
│  │  ├─ amazon.png                 
│  │  ├─ ...                                     
│  ├─ models                        
│  │  ├─ companyModel.js            
│  │  ├─ jobModel.js                
│  │  ├─ jobModel.js~               
│  │  └─ userModel.js               
│  ├─ routes                        
│  │  ├─ authRoutes.js              
│  │  ├─ companyRoutes.js           
│  │  ├─ jobRoutes.js               
│  │  └─ userRoutes.js              
│  ├─ services                      
│  │  └─ authService.js             
│  ├─ package-lock.json             
│  ├─ package.json                  
│  └─ server.js                     
├─ frontend                         
│  ├─ public                        
│  │  └─ index.html                 
│  ├─ src                           
│  │  ├─ components                 
│  │  │  ├─ About                   
│  │  │  │  └─ index.js             
│  │  │  ├─ CompanyShowcase         
│  │  │  │  ├─ companyShowcase.css  
│  │  │  │  └─ index.js             
│  │  │  ├─ Contact                 
│  │  │  │  ├─ contact.css          
│  │  │  │  └─ index.js             
│  │  │  ├─ Employees               
│  │  │  │  ├─ Employees.css        
│  │  │  │  └─ index.js             
│  │  │  ├─ Home                    
│  │  │  │  └─ index.js             
│  │  │  ├─ Job                     
│  │  │  │  ├─ AddJob.css           
│  │  │  │  └─ AddJob.js            
│  │  │  ├─ JobListings             
│  │  │  │  ├─ index.js             
│  │  │  │  ├─ jobListings.css      
│  │  │  │  └─ jobListings.css~     
│  │  │  ├─ Login                   
│  │  │  │  ├─ index.js             
│  │  │  │  └─ login.css            
│  │  │  ├─ Logout                  
│  │  │  │  └─ index.js             
│  │  │  ├─ Navbar                  
│  │  │  │  └─ index.js             
│  │  │  ├─ Register                
│  │  │  │  ├─ index.js             
│  │  │  │  └─ register.css         
│  │  │  └─ ProtectedRoute.js       
│  │  ├─ store                      
│  │  │  ├─ actions                 
│  │  │  │  ├─ employeesActions.js  
│  │  │  │  ├─ jobActions.js        
│  │  │  │  └─ userActions.js       
│  │  │  ├─ reducers                
│  │  │  │  ├─ employeesReducer.js  
│  │  │  │  ├─ jobsReducer.js       
│  │  │  │  └─ userReducer.js       
│  │  │  └─ store.js                
│  │  ├─ App.js                     
│  │  ├─ api.js                     
│  │  ├─ index.js                   
│  │  └─ jobPosts.js                
│  ├─ package-lock.json             
│  └─ package.json                  
└─ README.md                        

</pre>                     

### Register:
Users can register as one of two roles: Admin or Employee.

### Admin Portal:

1. Employees (/admin/employees)
Showcase all users in a table format along with their details such as email, name, and type.

2. Add Job (/admin/addjob)
Add a new job to the database collection.

### Employee Portal

1. Home (/)
The main landing page of the job portal.

2. Job Listings (/jobs)
Displays a list of available job postings for job seekers.

3. Companies (/companies)
Showcases company profiles and details for job seekers to explore.

4. About (/about)
Provides information about the job portal, its purpose.

5. Contact (/contact)
A contact page where users can reach out for support or inquiries.







