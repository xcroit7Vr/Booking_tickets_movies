import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const CardComponent = () => {
  return (
    <div>
      <Row className="catalog-movie">
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/four-kings.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>4 KINGS II</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/waktu-maghrib.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>WAKTU MAGHRIB</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/balada-si-roy.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>BALADA SI ROY</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/pemandi-jenazah.jpeg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>PEMANDI JENAZAH</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center mb-3">
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/agak-laen.jpeg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>AGAK LAEN</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/perjamuan-iblis.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>PERJAMUAN IBLIS</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/qodrat.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>QODRAT</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col xs="auto" className="p-1">
          <a href="/MoviesInfo" style={{ textDecoration: 'none' }}>
            <Card className="custom-card" style={{ width: '11rem' }}>
              <Card.Img variant="top" src="/img/catalog/kutuk.jpg" className="custom-card-img" />
              <Card.Body className="card-body">
              <Card.Title style={{ fontSize: '14px', textAlign: 'center' }}>KUTUK</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default CardComponent;
