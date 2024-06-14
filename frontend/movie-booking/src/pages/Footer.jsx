import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-style">
            <Container fluid>
                <Row>
                    <Col lg={4} md={6} sm={12} className="mb-4 mb-lg-0">
                        <h5>About Us</h5>
                        <p>TicketBioskop adalah aplikasi pemesanan tiket bioskop terdepan yang dirancang untuk memberikan pengalaman menonton film yang tak terlupakan. Dengan antarmuka yang mudah digunakan, Anda dapat dengan cepat mencari film favorit, melihat jadwal tayang, memilih kursi terbaik, dan memesan tiket secara langsung dari perangkat Anda.</p>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="mb-4 mb-lg-0">
                        <h5>Butuh Bantuan?</h5>
                        <p><a href="Faqs" style={{ color: 'white', textDecoration: 'none' }}>FAQS</a></p>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-4 mb-lg-0">
                        <h5>App Support</h5>
                        <p>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaFacebook /> Facebook
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaTwitter /> Twitter
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <FaInstagram /> Instagram
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
