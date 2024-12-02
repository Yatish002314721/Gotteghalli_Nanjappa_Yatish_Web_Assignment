// frontend/src/components/
import React,{ useState, useEffect } from 'react'
import './companyShowcase.css'
import Navbar from "../Navbar"; /* ./ current directory  ../ parent directory */

const CompanyShowcase = () => {

    const [companies, setCompanies] = useState([])
    // Fetch companies data from the backend
    useEffect(()=>{
        const fetchCompanies = async()=>{
            try{
                const response = await fetch('http://localhost:3100/companies')
                const data = await response.json()
                setCompanies(data)
            }catch(error){
                console.error('Error fetching companies:', error)
            }
        }
        fetchCompanies()
    })

    return(
        <>
            <Navbar/>
        <div className="company-showcase-container">
            <h2>Company Showcase</h2>
            <div className="company-gallery">
                {companies.map((company) => (
                    <div key={company._id} className="company-item">
                        <img
                            src={`http://localhost:3100/company_images/${company.imagePath}`}
                            alt={company.name}
                            className="company-image"
                        />
                        <h3 className="company-name">
                            {company.name.charAt(0).toUpperCase() + company.name.slice(1).toLowerCase()}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default CompanyShowcase;