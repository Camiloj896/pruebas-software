import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import './card-question.css';

const CardQuestion = (props) => {
  const navigate = useNavigate();

  return (
      <div className="cardQuestion" onClick={() => {navigate(`/ask-question/${props.id}`)}}>
        <div className="cardQuestion-information">
          <div className="cardQuestion-title">
            {props.user &&<NavDropdown title="Options" id="collasible-nav-dropdown" className="options">
              <NavDropdown.Item href="#action/3.1">View</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Edit</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Delete</NavDropdown.Item>
            </NavDropdown>
            }
            <h5>{props.title}</h5>
            <span>{props.subtitle}</span>
          </div>
          <div className="cardQuestion-description">
            {props.description}
          </div>
        </div>
      </div>
  );
}

export default CardQuestion;

