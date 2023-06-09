import { Button, Form } from "react-bootstrap";
import { useForm } from '../hooks/useForm'

export const CreatePost = ({
    onCreatePostSubmit,
}) => {

    const { values, changeHandler, onSubmit } = useForm({
        destination: '',
        date: '',
        transport: '',
        cost: '',
        image: '',
        image2: '',
        image3: '',
        description: '',
    }, onCreatePostSubmit);

    return (
        <section id="create-page" className="form-page">
            <Form method="POST" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicDestination">
                    <Form.Label className="fw-bold">My destination</Form.Label>
                    <Form.Control value={values.destination} required={true} onChange={changeHandler} type="text" name="destination" placeholder="Enter your destination" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label className="fw-bold">Date arrived</Form.Label>
                    <Form.Control value={values.date} required={true} onChange={changeHandler} type="date" name="date" placeholder="Enter your start date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTransport">
                    <Form.Label className="fw-bold">My transport</Form.Label>
                    <Form.Control value={values.transport} required={true} onChange={changeHandler} type="text" name="transport" placeholder="Enter your transport" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCost">
                    <Form.Label className="fw-bold">How much was the total cost?</Form.Label>
                    <Form.Control value={values.cost} required={true} onChange={changeHandler} type="text" name="cost" placeholder="Enter all the expenses" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label className="fw-bold">Link your best photos</Form.Label>
                    <Form.Control value={values.image} required={true} onChange={changeHandler} type="text" name="image" placeholder="Enter first photo url" />
                    <Form.Control value={values.image2} required={true} onChange={changeHandler} type="text" name="image2" placeholder="Enter second photo url" className="my-2" />
                    <Form.Control value={values.image3} required={true} onChange={changeHandler} type="text" name="image3" placeholder="Enter third photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextareaDescription">
                    <Form.Label className="fw-bold">Share your experience here</Form.Label>
                    <Form.Control value={values.description} required={true} onChange={changeHandler} type="text" as="textarea" name="description" rows={10} placeholder="Share your experience for others to read here..." />
                </Form.Group>

                <Button type="submit" value="Submit" className="custom-btn">Create a Post</Button>
            </Form>
        </section>
    )
}