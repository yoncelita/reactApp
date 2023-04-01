import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import * as postService from '../services/postService';
import { useEffect, useState } from 'react';

export const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);

    return (
        <section id="details-page">
            <div className='container-fluid p-0'>
                <div className='row m-0 p-0'>
                    <Card.Img variant="top" src={post.image} className='card-img-blur p-0' alt='img'/>
                </div>
            </div>
            <div className='conatiner'>
                <div className='row justify-content-center gap-3 py-5 flex-column flex-lg-row m-0'>

                    <Card className='card-item-post-details p-0'>

                        <Card.Body>
                            <Card.Title className='display-4 details-title'><p className='text-muted fs-3 m-0'>Adventure in </p>{post.destination}</Card.Title>
                            <Card.Text className='text-muted'>
                                Date of arrival: <span className='text-black fw-bold fs-4'>{post.date}</span>
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Transport: <span className='text-black fw-bold'>{post.transport}</span>
                            </Card.Text>
                            <Card.Text className='text-muted'>
                                Total expensies: <span className='text-black fw-bold'>{post.cost}</span>
                            </Card.Text>
                            <Card.Img variant="top" src={post.image} className='mt-3' alt='img'/>
                            <Card.Text className='fs-6 my-5'>
                                {post.description}
                            </Card.Text>
                            {/* <a href="#" className="custom-btn btn me-3">Edit</a>
                            <a href="#" className="custom-btn btn">Delete</a> */}
                            <Link to={`/edit/${postId}`} className="custom-btn btn me-2">Edit</Link>
                            <Link to={`/delete/${postId}`} className="custom-btn btn">Delete</Link>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </section >
    )
}