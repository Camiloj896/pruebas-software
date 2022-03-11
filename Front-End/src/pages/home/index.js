import React from 'react';
import Header from './../../components/header/index';
import PostListHome from '../post/list-home';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {

    const navigate = useNavigate();

    if (window.localStorage.getItem("userName")) {
        return (
            <div className="homePage">
                <Header />
                <div className="homePage-banner">
                    <Container>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Look for a question..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn btn-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </Container>
                </div>
                <Container>
                    <PostListHome />
                </Container>
            </div>
        
        );
    } else {
        navigate('/', { replace: true });
    }

}

export default Home;

