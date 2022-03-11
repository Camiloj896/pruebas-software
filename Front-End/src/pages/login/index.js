import React,{ useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css';

const corouselItems = [
  {
    image: 'https://www.wallpapertip.com/wmimgs/84-843418_background-black-darkblue-light-textures-texture-download-background.jpg',
    alt: 'Image 1',
    titile: 'Title 1',
    description: 'Description 1',
  },
  {
    image: 'https://www.wallpapertip.com/wmimgs/84-843418_background-black-darkblue-light-textures-texture-download-background.jpg',
    alt: 'Image 2',
    titile: 'Title 2',
    description: 'Description 2',
  },
  {
    image: 'https://www.wallpapertip.com/wmimgs/84-843418_background-black-darkblue-light-textures-texture-download-background.jpg',
    alt: 'Image 3',
    titile: 'Title 3',
    description: 'Description 3',
  },
];

const Login = () => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    user: '',
    pass: '',
    userError: false,
    passError: false,
    validated: false,
  });


  const handleInputChange = (event) => {
      setState({
          ...state,
          [event.target.name] : event.target.value
      });
  }

  const hamdleSubmit = () => {
    const userError = state.user === '' ? true : false
    const passError = state.pass === '' ? true : false
    
    setState({
      ...state,
      userError: userError,
      passError: passError,
    });

    const data = {
      user: state.user,
      password: state.pass,
    };

    if (!userError && !passError) {
      axios.post("http://localhost:4000/api/user/login", data).then(res => {
        const { data } = res.data;
        if (data) {
          window.localStorage.setItem('userName', data.name);
          window.localStorage.setItem('id', data.id);
          navigate('home', { replace: true });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'The user and password are incorrect',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        }
      });
    }
  }

  return (
      <div className="loginPage">
        <div className="bannerLogin">
          <Carousel className="bannerLogin-Carousel">
            {
              corouselItems.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item.image}
                      alt={item.alt}
                    />
                    <Carousel.Caption>
                      <h5>{item.titile}</h5>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })
            }
          </Carousel>
        </div>
        <div className="bannerForm">
          <form>
              <h1 className="title">TELL US</h1>
              <div className="mb-4">
                  <label>User</label>
                  <input
                    type="text"
                    placeholder="User"
                    className="form-control"
                    onChange={handleInputChange}
                    name="user"
                  />
                  {
                    state.userError && <span className="text-error">Please enter a user!</span>
                  }
              </div>
              <div className="mb-4">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleInputChange}
                    name="pass"
                  />
                  {
                    state.passError && <span className="text-error">Please enter a password!</span>
                  }
              </div>

              <div className="mt-4 mb-4">
                <Button variant="primary" className="btn-tell" onClick={hamdleSubmit} >
                  Sing In
                </Button>
                <Button className="mr-5 btn-tell" variant="primary">
                  <FontAwesomeIcon icon={faMailBulk} /> Sing In with office 365
                </Button>
              </div>

              <div className="divider" />

              <div className="text-muted mb-3 mt-3">
                  New around here? <Link to="/register">Sing Up</Link>
              </div>
              <div className="text-muted">
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
          </form>
        </div>
      </div>
  );
}

export default Login;

