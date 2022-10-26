import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, setLoading } = useContext(AuthContext);
    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                // navigate('/');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    // setUser(null);
                    toast.error('Your email is not verified. Please verify your email address.');
                }
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-75 m-auto'>
                <h2 className='text-center'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button> <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;