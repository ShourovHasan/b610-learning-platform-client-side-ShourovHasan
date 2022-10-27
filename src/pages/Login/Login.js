import React, { useContext, useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn, setLoading, googleProviderLogin, githubProviderLogin } = useContext(AuthContext);
    
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
                navigate(from, { replace: true });                
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
            // .finally(() => {
            //     setLoading(false);
            // })
    }
    const handleGoogleSignIn = () => {
        googleProviderLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
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
                console.log(user);
                navigate(from, { replace: true }); 
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className='mb-5 pb-4'>
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
                <div className='account_container'>
                    <p><small>New to AIUB Portal? <Link to='/register'>Create New Account</Link></small></p>
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