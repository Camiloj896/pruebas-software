import React, { useState, useEffect } from 'react';
import Main from './../../components/main/index';
import Header2 from './../../components/header/index2';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Back from './../../util/img/back.png';
import Comment from './../../components/comment/index';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from "axios";
import './ask-question.css';

const ViewQuestion = () => {

    const [state, setState] = useState({
        data: [],
        comment: '',
        error: false
      });
    
      useEffect(() => {
        let id = window.location.pathname;
        let id2 = id.replace('/ask-question/', '');
        axios.get(`http://localhost:4000/api/post/${id2}`).then(res => {
          const { data } = res;
          if (data) {
            setState({
              data: data
            });
          }
        });
      }, []);
    
      const handleInputChange = (event) => {
        setState({
            ...state,
            [event.target.name] : event.target.value
        });
      }
    
      const handleSend = () => {
        const error = state.comment === '' ? true : false;
    
        setState({
          ...state,
          error: error
        });
    
        let id = window.location.pathname;
        let id2 = id.replace('/ask-question/', '');
    
        const data = {
          user: window.localStorage.getItem('id'),
          post: id2,
          text: state.comment,
        };
    
        if (!error) {
          axios.post("http://localhost:4000/api/comments", data).then(res => {
              const { data } = res;
              if (data) {
                
                const auxData = state.data;
    
                auxData.comments.push({
                  ...data,
                  user: {
                    id: window.localStorage.getItem('id')
                  }
                });
    
                setState({
                  ...state,
                  data: auxData
                });
    
                Swal.fire({
                  title: 'success!',
                  text: 'The comment has been created!',
                  icon: 'success',
                  confirmButtonText: 'OK'
                });
    
                document.getElementById("form-comment").reset();
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
                        <div className="content-form">
                            <div className="view-question-information"> 
                                <div style={{height: '500px'}}>
                                    <h3 style={{marginBottom: '0'}}>{state.data.title}</h3>
                                    <span className="text-muted">{state.data.career}</span>
                                    <p style={{marginTop: '20px'}}>
                                        {state.data.description}
                                    </p>
                                </div>
                                <form className="mb-4" id="form-comment">
                                    <textarea
                                        type="text"
                                        placeholder="Comment"
                                        className="form-control"
                                        onChange={handleInputChange}
                                        name="comment"
                                    />
                                    {
                                        state.error && <span className="text-error">Please enter a comment!</span>
                                    }
                                    <Button variant="primary" className="float-right btn-tell mt-2" onClick={handleSend}>
                                        Send
                                    </Button>
                                </form>
                            </div>
                            <div className="comments-information">
                                {state.data.comments?.map((comment, i) => <Comment key={i} id={comment.id} comment={comment.text} userId={comment.user.id} name={comment.user.name} />)}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default ViewQuestion;