import React, { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Swal from 'sweetalert2';
import './comment.css';

const Comment = (props) => {

  const options = String(props.userId) === String(window.localStorage.getItem('id')) ? true : false;

  const [state, setState] = useState({
    edit: false,
    error: false,
    comment: props.comment,
  });

  const handleEdit = () => {
    setState({
        ...state,
        edit: true
    });
  }

  const hamdleCancel = () => {
    setState({
        ...state,
        edit: false
    });
  }

  const hamdleSave = () => {
    
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
        axios.put(`http://localhost:4000/api/comments/${props.id}`, data).then(res => {
          const { data } = res;
          if (data) {
            setState({
              ...state,
              edit: false
            });

            Swal.fire({
              title: 'success!',
              text: 'The comment has been Updated!',
              icon: 'success',
              confirmButtonText: 'OK'
            });
          }
        });
    }
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:4000/api/comments/${props.id}`).then(res => {
        if (res.status === 200) {
            window.location.reload();
        }
    });    
  }

  const handleInputChange = (event) => {
    setState({
        ...state,
        [event.target.name] : event.target.value
    });
  }

  if (state.edit) {
    return (
        <div className="commentComponent">
            <div className="mb-4">
                <label>Comment</label>
                <textarea
                    type="text"
                    placeholder="Comment"
                    className="form-control"
                    onChange={handleInputChange}
                    name="comment"
                    value={state.comment}
                />
                {
                    state.error && <span className="text-error">Please enter a comment!</span>
                }
            </div>
            <div className="content-buttons">
                <Button variant="primary" onClick={hamdleCancel} className="ml-5 btn-tell">
                    Cancel
                </Button>
                <Button variant="primary" onClick={hamdleSave} className="ml-5 btn-tell">
                    Save
                </Button>
            </div>
        </div>
    );
  } else {
    return (
        <div className="commentComponent">
            {options &&<NavDropdown title="..." id="collasible-nav-dropdown" className="options">
                <NavDropdown.Item onClick={handleEdit}>Edit</NavDropdown.Item>
                <NavDropdown.Item onClick={handleDelete}>Delete</NavDropdown.Item>
            </NavDropdown>
            }
            {props.name}
            <br />
            <p>
                {props.comment}
            </p>
        </div>
    );
  }
  
}

export default Comment;