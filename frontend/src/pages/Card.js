import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Localhost from '../variable';
import { Link } from 'react-router-dom';

const CardComponent = () => {

  const  [moviesState, setMoviesState] = useState([]);

  async function  initData () {
    const data = await axios.get(`${Localhost}/movie`);
    
    setMoviesState(data.data.movies);
  }

  useEffect( () => {

    initData();

  }, [])



  return (
    <div>
        {
          moviesState.reduce((all,one,i) => {
            const ch = Math.floor(i/4); 
            all[ch] = [].concat((all[ch]||[]),one); 
            return all
         }, []).map(a => (<Row className="justify-content-center mb-1 mt-1">
            {a.map(data => <Col xs="auto" className="p-1">
          <Link to={`/MoviesInfo?id=${data.id}`} style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src={data.img_url} className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>{data.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>)}
         </Row>))
        }
      
    </div>
  );
}

export default CardComponent;
