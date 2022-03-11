import React,{ useState, useEffect }from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
      name: null,
      id: null,
  });

  useEffect(() => {
      if (window.localStorage.getItem("userName")) {
          setUser({
              name: window.localStorage.getItem("userName"),
              id: window.localStorage.getItem("id"),
          })
      }
  }, []);

  const handleSignOff = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const greeting = `Hello, ${user.name}`;
  return (
    <Navbar bg="dark" variant="dark" className="headerPage">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title={greeting} id="collasible-nav-dropdown2" className="headerPage-categories">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">My Post</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">My Comments</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleSignOff}>Sign off</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="create-post" className="headerPage-item">Crete post</Navbar.Brand>
          <NavDropdown title="Categories" id="collasible-nav-dropdown" className="headerPage-categories">
            <NavDropdown.Item href="#action/3.1">Engineering</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Education</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Communication</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Business Studies</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Accounting and international finance</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand href="home" className="headerPage-item">Home</Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

