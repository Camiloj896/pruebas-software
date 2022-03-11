import React from 'react';
import Main from './../../components/main/index';
import Header2 from './../../components/header/index2';
import PostListHome from '../post/list-home';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Back from './../../util/img/back.png';
import './home.css';

const Home2 = () => {

    return (
        <div className="homePage">
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
                        <h3 className="title-content">Recent Questions</h3>
                        <PostListHome />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Home2;