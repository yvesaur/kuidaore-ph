import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../../../Assests/icons/footer/fb.png';
import insta from '../../../Assests/icons/footer/insta.png';
import google from '../../../Assests/icons/footer/google.png';
import tweet from '../../../Assests/icons/footer/tweet.png';
import ramen from '../../../Assests/icons/footer/ramen.png';
import { Link } from 'react-router-dom';
const footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col>
                        <div className="storage">
                            <a href="/">About Us</a>
                            <a href="/">Blog</a>
                            <a href="/">Pages</a>
                            <a href="/">Map</a>
                        </div>
                    </Col>
                    <Col>
                        <div className="storage2">
                            <a href="/" target='_blank' > <img src={insta} alt="Icon" /></a>
                            <a href="/" ><img src={fb} alt="Icon" /></a>
                            <a href="/" ><img src={tweet} alt="Icon" /></a>
                            <a href="/" ><img src={google} alt="Icon" /></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="footer-text">Restaurant Landline: (02) 8855-6139<br />Owners Contact No: 09271311257, 9670400900 <br />
                            Email at us kuidaoreph@gmail.com <br />
                            &copy; COPYRIGHT 2022 by Kuidaore PH Japanese Restaurant<br /><br/>
                            Presented by Elisha Quiday and Yves Casio <img src={ramen} alt="Ramen" style={{ height: "22px", padding: "0 3px", float: "none" }} /></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default footer;