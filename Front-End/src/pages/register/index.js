import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
import axios from "axios";
import './register.css';

const Register = () => {

  const [state, setState] = useState({
    name: '',
    lastname: '',
    career: '',
    user: '',
    pass: '',
    pass2: '',
    userError: false,
    lastNameError: false,
    careerError: false,
    nameError: false,
    passError: false,
    pass2Error: false,
    invalidPassError: false,
  });


  const handleInputChange = (event) => {
    setState({
        ...state,
        [event.target.name] : event.target.value
    });
  }

  const hamdleSubmit = () => {

    const nameError = state.name === '' ? true : false;
    const lastNameError = state.lastname === '' ? true : false;
    const careerError = state.career === '' ? true : false
    const userError = state.user === '' ? true : false
    const passError = state.pass === '' ? true : false
    const pass2Error = state.pass2 === '' ? true : false
    let invalidPassError;
    if (!passError && !pass2Error) {
      invalidPassError = state.pass !== state.pass2;
    }
      
    
    setState({
      ...state,
      nameError: nameError,
      lastNameError: lastNameError,
      careerError: careerError,
      userError: userError,
      passError: passError,
      pass2Error: pass2Error,
      invalidPassError: invalidPassError,
    });

    if (!nameError && !lastNameError && !careerError && !userError && !passError && !pass2Error && !invalidPassError ) {
      const data = {
        name: state.name,
        lastname: state.lastname,
        career: state.career,
        user: state.user,
        pass: state.pass,
      };

      axios.post("http://localhost:4000/api/user", data).then(res => {
        if (res.status === 201) {
          Swal.fire({
            title: 'success!',
            text: 'The user has been created!',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          document.getElementById("register-form").reset();
        }
      });
    }
  } 

  return (
      <div className="registerPage">
        <div className="bannerForm">
          <Link to="/" className="login">Sing In</Link>
          <form id="register-form">
              <h1>Register</h1>
              <div className="mb-4">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    onChange={handleInputChange}
                    name="name"
                  />
                  {
                    state.nameError && <span className="text-error">Please enter your name!</span>
                  }
              </div>
              <div className="mb-4">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    onChange={handleInputChange}
                    name="lastname"
                  />
                  {
                    state.lastNameError && <span className="text-error">Please enter your lastname!</span>
                  }
              </div>
              <div className="mb-4">
                  <label>Career</label>
                  <input
                    type="text"
                    placeholder="Career"
                    className="form-control"
                    onChange={handleInputChange}
                    name="career"
                  />
                  {
                    state.careerError && <span className="text-error">Please select your career!</span>
                  }
              </div>
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
                    state.userError && <span className="text-error">Please enter your user name!</span>
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
              <div className="mb-4">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    onChange={handleInputChange}
                    name="pass2"
                  />
                  {
                    state.pass2Error && <span className="text-error">Please enter a confirm password!</span>
                  }
                  {
                    state.invalidPassError && <span className="text-error">Please verify, the password aren't equals!</span>
                  }
              </div>

              <div className="mt-4 mb-4">
                <Button className="float-right btn-tell" variant="primary" onClick={hamdleSubmit} >
                  Register
                </Button>
              </div>
          </form>
        </div>
        <div className="bannerRegister">
          Register Banner
        </div>
      </div>
  );
}

export default Register;

