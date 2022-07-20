import React from 'react';
import './stacked.css';
import {Container,Row,Col} from 'reactstrap';
import rest1 from '../../../Assests/images/stacked/rest1.jpg';
import rest2 from '../../../Assests/images/stacked/rest2.JPG';
import rest3 from '../../../Assests/images/stacked/rest3.jpg';
import rest4 from '../../../Assests/images/stacked/rest4.jpg';


const stacked=()=>{
    return(
            <div className="stacked-container">
            <p className="stackedTop">OUR PLACE</p>
            <Container>
                <Row>
                    <Col>
                    <div className="stacked">
                        <img src={rest1} alt="restaurant photo" />
                        </div>
                    </Col>
                    <Col>
                    <div  className="stacked"> 
                        <img src={rest2} alt="restaurant photo"/>
                        </div>
                    </Col>
                    <Col>
                    <div className="stacked">
                        <img src={rest3} alt="restaurant photo"/>
                        </div>
                    </Col>
                    <Col >
                    <div className="stacked">
                        <img src={rest4} alt="restaurant photo"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default stacked;