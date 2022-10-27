import React, { useContext, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const { signIn, googleProviderLogin, githubProviderLogin, sendResetEmail } = useContext(AuthContext);
    
    let location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });                
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleProviderLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true }); 
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubLogIn = () => {
        githubProviderLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate(from, { replace: true }); 
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleSendResetEmail = () => {
        if (!userEmail) {
            alert('Please enter your email address');
            return;
        }
        sendResetEmail(userEmail)
            .then(() => { 
                toast.success("Don't worry if the email goes to the spam folder.");
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='mb-5 pb-4'>
            <Form onSubmit={handleSubmit} className='w-75 m-auto'>
                <h2 className='text-center'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" />
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
                <div className='account_container'>
                    <p className='m-0 p-0'><small>New to AIUB Portal? <Link to='/register'>Create New Account</Link></small></p>
                    <p className='m-0 p-0'>
                        <small className='d-flex align-items-center'>Forget Password?<Button onClick={handleSendResetEmail} variant="link">Reset Password</Button></small>
                    </p>
                </div>
                <ButtonGroup vertical className='w-100 mt-3'>
                    <Button onClick={handleGoogleSignIn} variant="outline-primary mb-2"><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGithubLogIn} variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
                
            </Form>
        </div>
    );
};

export default Login;