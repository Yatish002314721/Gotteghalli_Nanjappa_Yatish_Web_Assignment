import Card from '../../components/Cards/cards'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
function Home() {
  const cardsData = [
    { title: 'WELCOME HOME', description: 'Thank you for coming back' },
 
  ];

  return (
    <div>
    <Navbar/>
    <div className='container'>
       {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
    </div>
    
  )
}

export default Home