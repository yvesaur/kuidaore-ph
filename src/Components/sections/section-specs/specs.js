import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Spec from './spec/spec';
import delivery from '../../../Assests/icons/icon_specs/delivery.png';
import chef from '../../../Assests/icons/icon_specs/hat.png';
import bento from '../../../Assests/icons/icon_specs/bento.png';
import basket from '../../../Assests/icons/icon_specs/basket.png';

const specs=()=>{
    return(
        <Container>
            <Row>
                <Col>
                 <Spec src={chef} head="Top-class Chef" content="Our chefs are professionals who are committed to bringing Japanese cuisine to the Philippines. They produce and serve Japanese food and guarantee a pleasurable dining experience."/>
                </Col>
                <Col>
                    <Spec src={basket} head="100% Authentic Ingredients" content="The underlying idea of Japanese cuisine is an unwavering commitment to quality ingredients that are treated with the utmost respect to bring out their best attributes. Authenticity of our ingredients is assured." />
                </Col>
                <Col>
                    <Spec src={delivery} head="Events" content="We organize lots of events that our customers will undoubtedly love and enjoy. Our special events include a monthly sale with discounts on a specified menu, a birthday sale that the celebrant can enjoy the benefits of, and lastly, the limited coupons we occasionally distribute."/>
                </Col>
                <Col>
                 <Spec src={bento} head="Convenience" content="Bento boxes are meals that are prepared in boxes with balanced nutrition. Bentos include rice, fish or meat, raw or cooked vegetables, and fruit for dessert. These are the ideal meals for students and employees who don't have time to prepare meals, as a balanced meal in a bento box will provide them with enough energy for the entire day."/>
                </Col>               
            </Row>
        </Container>
    );
}

export default specs;