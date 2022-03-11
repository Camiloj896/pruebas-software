import React, { useState } from 'react';
import Header from './../../components/header/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from "axios";
import './post.css';

const PostCreate = () => {

  const [state, setState] = useState({
    title: '',
    description: '',
    career: '',
    titleError: false,
    descriptionError: false,
    careerError: false,
    validated: false,
  });

  const handleInputChange = (event) => {
    setState({
        ...state,
        [event.target.name] : event.target.value
    });
  }

  const hamdleSubmit = () => {
    const titleError = state.title === '' ? true : false;
    const descriptionError = state.description === '' ? true : false;
    const careerError = (state.career === '' || state.career === '0') ? true : false;
    
    setState({
      ...state,
      titleError: titleError,
      descriptionError: descriptionError,
      careerError: careerError,
    });

    const data = {
      user: window.localStorage.getItem('id'),
      title: state.title,
      description: state.description,
      career: state.career
    };

    if (!titleError && !descriptionError && !careerError) {
      axios.post("http://localhost:4000/api/post", data).then(res => {
        const { data } = res;
        if (data) {
          Swal.fire({
            title: 'success!',
            text: 'The post has been created!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          document.getElementById("create-post-form").reset();
        }
      });
    }
  }

  return (
      <div className="post">
        <Header />
        <Container className="mt-5 mb-5">
          <Row>
            <Col>
              <form id="create-post-form">
                <div className="text-center">
                  <h5>New post</h5>
                </div>
                <div className="mb-4">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Title"
                      className="form-control"
                      onChange={handleInputChange}
                      name="title"
                    />
                    {
                      state.titleError && <span className="text-error">Please enter a title!</span>
                    }
                </div>
                <div className="mb-4">
                    <label>Description</label>
                    <textarea
                      rows="10"
                      cols="40"
                      type="text"
                      placeholder="Description"
                      className="form-control"
                      onChange={handleInputChange}
                      name="description"
                    />
                    {
                      state.descriptionError && <span className="text-error">Please enter a description!</span>
                    }
                </div>
                <div className="mb-4">
                    <label>Career</label>
                    <select
                      name="career"
                      className="form-control"
                      onChange={handleInputChange}
                    >                      
                      <option value="0">choose an option</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Education">Education</option>
                      <option value="Communication">Communication</option>
                      <option value="Business Studies">Business Studies</option>
                      <option value="Accounting and international finance">Accounting and international finance</option>
                    </select>
                    {
                      state.careerError && <span className="text-error">Please enter a Career!</span>
                    }
                </div>
                <div>
                  <Button variant="primary" onClick={hamdleSubmit} className="float-right">
                    Create
                  </Button>
                </div>
              </form>
            </Col>
            <Col>
              <div className="imgCreatePost">
                <img
                  src="https://www.surveylegend.com/wordpress/wp-content/uploads/2020/12/best-open-ended-questions.png"
                  alt="question"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default PostCreate;