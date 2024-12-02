//  frontend/src/api.js
import axios from 'axios'

const SERVER_URL = 'http://localhost:3100'

export const loginUser = async(username, password)=>{
    try{
        const response = await axios.post(`${SERVER_URL}/auth/login`, {username,password})
        return response.data
    }catch(error){
        return {success:false, message:"Error in login request."}
    }

}

axios.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },

    (error) => Promise.reject(error)
)

export const registerUser = async(email, fullName, password, type)=>{
    try{
        const response = await axios.post(`${SERVER_URL}/user/create`, {email,fullName, password, type})
        // console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const getAllUser = async()=>{
    try{
        const response = await axios.get(`${SERVER_URL}/user/get_all`, {})
        // console.log(response)
        return response
    }catch(error){
        console.log(error)
    }
}


export const createJob = async(company, title, description, salary, requirements, applyLink)=>{
    try{
        const response = await axios.post(`${SERVER_URL}/job/create`, { company, title, description, salary, requirements, applyLink })
        // console.log(response.data)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const getAllJobs = async()=>{
    try{
        const response = await axios.get(`${SERVER_URL}/job/get_all_jobs`, {})
        // console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
}

export const deleteAllJob = async()=>{
    try{
        const response = await axios.delete('http://localhost:3100/job/delete_all_jobs', {})
        // console.log(response)
        return response.data
    }catch(error){
        console.log(error)
    }
}