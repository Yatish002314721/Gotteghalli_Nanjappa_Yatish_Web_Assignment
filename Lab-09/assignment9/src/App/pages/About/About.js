import Card from '../../components/Cards/cards'
import './About.css';
import Navbar from '../../components/Navbar/Navbar';

function About() {
  const cardsData = [
    { title: 'About Us', description: 'This is a page for INFO6150' },
    { title: 'Done by', description: 'Yatish@northeastern.edu' },
  ];

  return (
    <div>
        <Navbar/>
       <div className='container'> </div> 
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    
    </div>
    
  )
}

export default About