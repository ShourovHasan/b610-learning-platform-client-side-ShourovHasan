import React, { useContext, useState } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [darkMode, setDarkMode] = useState(false);

    // console.log(user.photoURL);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Successfully Logout');
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <Navbar collapseOnSelect className='mb-4 bg-light' expand="lg"  variant="light">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center'>
                        <Link to='/' className='me-2'><Image className='ms-2' roundedCircle style={{ height: '45px' }} src='aiub_portal_logo.png' alt="" /></Link>
                        <Link to='/' className='navbar-brand'><span className='bg-primary px-3 py-2 rounded text-white fw-bolder'>
                            AIUB</span> <span className='text-primary fw-bolder'>PORTAL</span>
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='d-flex align-items-center justigy-content-center'>
                            <NavLink to='/home' className={`navbar-brand px-2 ({ isActive }) => isActive ? 'active' : undefined`} >Home </NavLink>
                            <NavLink to='/allCourses' className='navbar-brand px-2'>Courses </NavLink>
                            <NavLink to='/faq' className='navbar-brand px-2'>FAQ</NavLink>
                            <NavLink to='/blog' className='navbar-brand px-2'>Blog</NavLink>
                            {/* <Link className='navbar-brand'>Dark/Light</Link> */}
                            <div className=''>
                                <div className="mode_container">
                                    <div className="switch-checkbox">
                                        <label className="switch">
                                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                                            <span className="slider round"> </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <Link className='navbar-brand px-2' to='/' onClick={handleLogOut}><FaSignOutAlt className='h4 me-1'></FaSignOutAlt><span>Logout</span></Link>
                                            
                                        </>
                                        :
                                        <>
                                            <NavLink className='navbar-brand px-2' to='/login'>Login</NavLink>
                                            <NavLink className='navbar-brand px-2' to='/register'>Register</NavLink>
                                        </>
                                }
                            </>
                            {/* for profile picture hover and show user name  */}
                            <Link className='navbar-brand profile_container'>
                                {
                                    user?.photoURL ?
                                        <>
                                            <div class="overlay">
                                                <div class="text">{user?.displayName}</div>
                                            </div>
                                            <Image className='image' roundedCircle style={{ height: '32px' }} src={user?.photoURL} alt="" />
                                        </>
                                        :
                                        <></>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;