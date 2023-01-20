import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                handleUpdateUserProfile(name, photoURL);
                handleVerifyEmail();
                form.reset();
                setError('');
                toast.success('Please verify your email address.');
                navigate('/');
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
    }
    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked);
        // console.log(event.target.checked);
    }

    return (
        <div className='mb-5 pb-3 border rounded-5 w-75 mx-auto shadow-lg'>
            <Form onSubmit={handleSubmit} className='w-75 m-auto'>
                <h2 className='text-center mt-3'>Register</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoURL' placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button> <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <div className='account_container'>
                    <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;