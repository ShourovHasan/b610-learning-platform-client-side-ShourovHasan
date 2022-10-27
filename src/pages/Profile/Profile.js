import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [error, setError] = useState('');
    const photoURLRef = useRef(user?.photoURL);
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const photoURL = photoURLRef.current.value;
        // console.log(name, photoURL);
        handleUpdateUserProfile(name, photoURL);
        toast.success('Your profile is successfully updated. Please reload.');
        // console.log(user);
        navigate('/');   
    }
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        console.log(profile);
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                setError(error.message);
                toast.error({ error });
            })
    }
    return (
        <div className='my-5 py-5'>
            <Form onSubmit={handleSubmit} className='w-75 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} type="text" placeholder="Enter your name" defaultValue={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly type="email" placeholder="Enter email" defaultValue={user?.email} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} type="text" placeholder="Your photoURL" defaultValue={user?.photoURL} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update
                </Button>
                
            </Form>
        </div>
    );
};

export default Profile;