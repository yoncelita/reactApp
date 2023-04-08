import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import * as postService from '../services/postService';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


export const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const { userId, onPostDelete } = useContext(AuthContext);


    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            });
    }, [postId]);


    //Delete handler
    const handleDeleteClick = async () => {
        await onPostDelete(postId);
    };


    //If you are owner
    const isOwner = post._ownerId === userId;

    return (
        <section id="details-page">
            <div className='container-fluid p-0'>
                <div className='row m-0 p-0'>
                    <Card.Img variant="top" src={post.image} className='card-img-blur p-0' alt='img' />
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
                            <div className='container-img-details d-flex gap-1 m-0 p-0 justify-content-start'>
                                <Card.Img variant="top" src={post.image} className='card-img-detail card-img-top' alt='img' />
                                <Card.Img variant="top" src={post.image2} className='card-img-detail card-img-top img2' alt='img' />
                                <Card.Img variant="top" src={post.image3} className='card-img-detail card-img-top img3' alt='img' />

                            </div>
                            <Card.Text className='fs-6 my-5'>
                                {post.description}
                            </Card.Text>

                            {/* If you are owner */}
                            {isOwner && (
                                <div className='edin-del-btns'>
                                    <Link to={`/catalog/${post._id}/edit`} className="custom-btn btn me-2">Edit</Link>
                                    <button className="custom-btn btn" onClick={handleDeleteClick}>Delete</button>
                                </div>
                            )}

                        </Card.Body>
                    </Card>

                </div>
            </div>
        </section >
    )
}