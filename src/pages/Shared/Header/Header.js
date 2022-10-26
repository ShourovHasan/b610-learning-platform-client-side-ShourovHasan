import React, { useContext } from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
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
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
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
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <Link className='navbar-brand px-2' to='/' onClick={handleLogOut}><FaSignOutAlt className='pe-1'></FaSignOutAlt> <span>Log Out</span></Link>
                                            <span>{user?.displayName}</span>
                                        </>
                                        :
                                        <>
                                            <NavLink className='navbar-brand px-2' to='/login'>Login</NavLink>
                                            <NavLink className='navbar-brand px-2' to='/register'>Register</NavLink>
                                        </>
                                }
                            </>
                            <Link>
                                {
                                    user?.photoURL ?
                                        <>
                                            <Image className='ms-2' roundedCircle style={{ height: '32px' }} src={user?.photoURL} alt="" />

                                        </>
                                        :
                                        <FaUser></FaUser>

                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>

                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;