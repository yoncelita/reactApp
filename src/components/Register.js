import { Button, Form } from "react-bootstrap";

export const Register = () => {
    return (
        <section id="register-page" className="form-page">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Submit
                </Button> */}
                <Button as="input" type="submit" value="Submit" className="custom-btn"></Button>
            </Form>
        </section>
    )
}