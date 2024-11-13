
import './JobCard.css';
/*
import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';

function JobCard(props) {
  const { title, description, Link} = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Link href={Link} target='_blank'>Apply Here</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default JobCard;