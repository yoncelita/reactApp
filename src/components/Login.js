import { Button, Form } from "react-bootstrap";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { Link } from "react-router-dom";


export const Login = () => {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);

    return (
        <section id="login-page" className="form-page">
            <Form method="POST" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name='email'
                        value={values.email}
                        onChange={changeHandler}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className="fw-light">
                        If you don't have an account <Link to='/register' className="link-to-reg">register</Link>
                    </p>
                </Form.Group>
                <Button as="input" type="submit" value="Submit" className="custom-btn"></Button>
            </Form>
        </section >
    )
}