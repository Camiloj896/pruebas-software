import React, { useState } from 'react';
import Main from './../../components/main/index';
import Header2 from './../../components/header/index2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Back from './../../util/img/back.png';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from "axios";
import './ask-question.css';

const AskQUestion = () => {

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
        <div className="askQuestion">
            <Row>
                {/* MAIN */}
                <Col xs={2} className="pr-0">
                    <Main />
                </Col>
                {/* CONTENT */}
                <Col xs={10} className="content-information" style={{backgroundImage: `url(${Back})`}}>
                    <div className="content-information-page">
                        <Header2 />
                        <hr />
                        <h3 className="title-content">Ask Question</h3>
                        <div className="content-form">
                            <form id="create-post-form">
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
                                <Button variant="primary" onClick={hamdleSubmit} className="btn-tell float-right">
                                    Create
                                </Button>
                                </div>
                            </form>
                            <div className="help-information">
                                <h5>Title</h5>
                                <p>Short description of the problem or keywords</p>
                                <h5>Description</h5>
                                <p>Explanation of the problem you have! Remember details are important!</p>
                                <h5>Career</h5>
                                <p>Select the correct category this helps us to identify and group the questions</p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AskQUestion;