import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export const Edit = ({
    onEditPostSubmit,
}) => {

    const [values, setValues] = useState({
        destination: '',
        date: '',
        transport: '',
        cost: '',
        image: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onEditPostSubmit(values);
    };

    return (
        <section id="create-page" className="form-page">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicDestination">
                    <Form.Label className="fw-bold">My destination</Form.Label>
                    <Form.Control value={values.destination} onChange={onChangeHandler} type="text" name="destination" placeholder="Enter your destination" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label className="fw-bold">Date arrived</Form.Label>
                    <Form.Control value={values.date} onChange={onChangeHandler} type="date" name="date" placeholder="Enter your start date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTransport">
                    <Form.Label className="fw-bold">My transport</Form.Label>
                    <Form.Control value={values.transport} onChange={onChangeHandler} type="text" name="transport" placeholder="Enter your transport" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCost">
                    <Form.Label className="fw-bold">How much was the total cost?</Form.Label>
                    <Form.Control value={values.cost} onChange={onChangeHandler} type="text" name="cost" placeholder="Enter all the expenses" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label className="fw-bold">Link your Photo</Form.Label>
                    <Form.Control value={values.image} onChange={onChangeHandler} type="text" name="image" placeholder="Enter photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaDescription">
                    <Form.Label className="fw-bold">Share your experience</Form.Label>
                    <Form.Control value={values.description} onChange={onChangeHandler} type="text" as="textarea" name="description" rows={10} placeholder="Share your experience for others to read here..." />
                </Form.Group>

                <Button type="submit" value="Submit" className="custom-btn">Save Post</Button>
            </Form>
        </section>
    )
}