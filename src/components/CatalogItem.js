import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    destination,
    date,
    image,
}) => {
    return (
        <Card className='card-item-post p-0'>
            <Card.Img variant="top" src={image} alt='img' />
            <Card.Body>
                <Card.Text className='text-muted mb-2 card-text d-inline-flex flex-row flex-lg-column align-items-center align-items-lg-start gap-2 gap-lg-0 card-text card-text'>Destination: <span className='text-black display-6 fw-normal'>{destination}</span></Card.Text>
                <Card.Text className='text-muted'>
                    Date: <span className='text-black fw-bold'>{date}</span>
                </Card.Text>
                <Link to={`/catalog/${_id}`} className="custom-btn btn">Explore</Link>
            </Card.Body>
        </Card>
    )
}