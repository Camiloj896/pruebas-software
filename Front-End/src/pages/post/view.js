import React,{ useState, useEffect } from 'react';
import Header from './../../components/header/index';
import Comment from './../../components/comment/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './post.css';

const PostView = () => {

  const [state, setState] = useState({
    data: [],
    comment: '',
    error: false
  });

  useEffect(() => {
    let id = window.location.pathname;
    let id2 = id.replace('/view/', '');
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

  const handleSend = (event) => {
    const error = state.comment === '' ? true : false;

    setState({
      ...state,
      error: error
    });

    let id = window.location.pathname;
    let id2 = id.replace('/view/', '');

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

  if (state) {
    return (
      <div className="post">
          <Header />
          <Container className="mt-5 mb-5">
            <Row>
              <Col>
                <div>
                  <div>
                    <h3>{state.data.title}</h3>
                    <span className="text-muted">{state.data.career}</span>
                    <p>
                      {state.data.description}
                    </p>
                  </div>
                  <div>
                    <h3>Comments</h3>
                    {state.data.comments?.map((comment, i) => <Comment key={i} id={comment.id} comment={comment.text} userId={comment.user.id} name={comment.user.name} />)}
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
                  </form>
                  <Button variant="primary" className="float-right" onClick={handleSend}>
                      Send
                  </Button>
                </div>
              </Col>
              <Col>
                {/* <div className="imgCreatePost">
                  <img
                    src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1279941681_463618_lphc36.jpg"
                    alt="help"
                  />
                </div> */}
              </Col>
            </Row>
          </Container>
      </div>
    );
  } else {
    return (
      <div className="post">
          <Header />
          <Container className="mt-5 mb-5">
            Loading...      
          </Container>
      </div>
    );
  }
}

export default PostView;

