import Card from '../../components/Cards/cards'

import Navbar from '../../components/Navbar/Navbar';

function Contact() {
  const cardsData = [
    { title: 'Contact Us', description: 'Please contanct us INFO6150' },
    { title: 'Via email', description: 'support@test.com' },
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

export default Contact