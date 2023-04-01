import { Card } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    destination,
    date,
    image,
}) => {
    return (
        <Card className='card-item-post p-0'>
            <Card.Img variant="top" src={image} alt='img'/>
            <Card.Body>
                <Card.Text className='text-muted m-0'>Destination: <h3 className='text-black'>{destination}</h3></Card.Text>
                <Card.Text className='text-muted'>
                    Date: <h7 className='text-black fw-bold'>{date}</h7>
                </Card.Text>
                {/* <Button className="custom-btn">Explore</Button> */}
                <Link to={`/catalog/${_id}`} className="custom-btn btn">Explore</Link>
            </Card.Body>
        </Card>
    )
}