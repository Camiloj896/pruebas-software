import React,{ useState, useEffect }from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import './header2.css';
import Avatar from './../../util/img/avatar.png';

const Header2 = () => {

  const [user, setUser] = useState({
      name: null,
      options: false,
      id: null,
  });

  useEffect(() => {
      if (window.localStorage.getItem("userName")) {
          setUser({
              options: false,
              name: window.localStorage.getItem("userName"),
              id: window.localStorage.getItem("id"),
          })
      }
  }, []);

  const handleOptions = () => {
    if (user.options) {
        setUser({
            ...user,
            options: false
        })
    } else {
        setUser({
            ...user,
            options: true
        })
    }
  };


  const greeting = `Hello, ${user.name}`;

  return (
    <div className="headerPage">
        <div className="content-search">
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success" className="btn-tellUs">Search</Button>
            </Form>
        </div>
        <div className="content-categories">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item>Engineering</NavDropdown.Item>
                <NavDropdown.Item>Education</NavDropdown.Item>
                <NavDropdown.Item>Communication</NavDropdown.Item>
                <NavDropdown.Item>Business Studies</NavDropdown.Item>
                <NavDropdown.Item>Accounting and international finance</NavDropdown.Item>
            </NavDropdown>
        </div>        
        <div className="profile">
            {greeting}
            <img src={Avatar} alt="avatar" width="40px" className="avatar" onClick={handleOptions}/>
            <div className={ user.options ? "options-profile" : "options-profile d-none"} >
                <div className="profile-item">
                    Profile
                </div>
                <div className="profile-item">
                    My Question
                </div>
                <div className="profile-item">
                    My Comments
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header2;

