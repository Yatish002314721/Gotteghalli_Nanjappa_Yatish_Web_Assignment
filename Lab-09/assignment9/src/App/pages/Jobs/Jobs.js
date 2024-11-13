import { Link } from 'react-router-dom';
/*import JobCard from '../../components/Cards/cards'*/
import JobCard from '../../components/JobCards/JobCard'
import Navbar from '../../components/Navbar/Navbar';


function Jobs() {
  const jobsData = [
    { title: 'Full Stack Developer', description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.', Link: 'https://example.com/apply/full-stack-developer'},
    { title: 'Digital Marketing Specialist', description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.', Link: 'https://example.com/apply/digital-marketing-specialist'}, 
    { title: 'UX/UI Designer', description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.', Link: 'https://example.com/apply/ux-ui-designer'}, 
    { title: 'Data Scientist', description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.', Link: 'https://example.com/apply/data-scientist'},
    { title: 'Customer Support Representative', description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.', Link: 'https://example.com/apply/customer-support-representative'},
  ];

  return (
    <div>
      <Navbar />
      <div className='container'>
        {jobsData.map((job, index) => (
          <JobCard key={index} title={job.title} description={job.description} Link={job.Link} />
        ))}
      </div>
    </div>

  )
}

export default Jobs;