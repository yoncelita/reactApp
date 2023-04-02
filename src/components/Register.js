import { Button, Form } from "react-bootstrap";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import { Link } from "react-router-dom";


export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        repeatPassword: '',
    }, onRegisterSubmit);


    return (
        <section id="register-page" className="form-page">
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

                <Form.Group className="mb-3" controlId="formBasicRepPassword">
                    <Form.Label className="fw-bold">Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Repeat password"
                        name='repeatPassword'
                        value={values.repeatPassword}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p className="fw-light">
                        If you don't have an account <Link to='/login' className="link-to-reg">login</Link>
                    </p>
                </Form.Group>
                <Button as="input" type="submit" value="Submit" className="custom-btn"></Button>
            </Form>
        </section>
    )
}