import React,{ useState, useEffect } from 'react';
import axios from "axios";
import CardQuestion from '../../components/card-question/index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './post.css';

const PostListHome = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/post`).then(res => {
      const { data } = res;
      if (data) {
        setData(data);
      }
    });
  }, []);

  if (data) {
    return (
      <Row>
        {data.map((post, i) => <Col xs={4}><CardQuestion title={post.title} subtitle={post.career} description={post.description} id={post.id} key={i} /></Col>)}
      </Row>
    );
  } else {
    return (
      <div className="post-list-loading">
        Loading...
      </div>
    );
  }
  
}

export default PostListHome;