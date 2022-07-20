import React,{Component} from 'react';
import './orderForm.css';
import {Container,Row,Col} from 'reactstrap';

class  orderForm extends Component{
    state={
        name:"",
        phone:"",
        houseNumber:"",
        city:"",
        zipcode:"",
        landmark:"",
        paymentStatus:"False"
    }
    nameHandler=(e)=>{
        this.setState({name:e.target.value});
    }
    phoneHandler=(e)=>{
        this.setState({phone:e.target.value});
    }
    houseHandler=(e)=>{
        this.setState({houseNumber:e.target.value});
    }
    cityHandler=(e)=>{
        this.setState({city:e.target.value});
    }
    zipcodeHandler=(e)=>{
        this.setState({zipcode:e.target.value});
    }
    landHandler=(e)=>{
        this.setState({landmark:e.target.value});
    }
    paymentStatusHandler=(e)=>{
        this.setState({paymentStatus:e.target.value});
    }
    render(){
        var checkOut={
            name:this.state.name,
            phone:this.state.number,
            houseNumber:this.state.houseNumber,
            city:this.state.city,
            landmark:this.state.landmark,
            zipcode:this.state.zipcode,
            paymentStatus:this.state.paymentStatus
        };
        return(
        <div className="OrderForm">
        <p className="OrderFormHead">Fill Delivery Details</p>
            <form id="orderForm">
                <div className="form__container">
                <Container>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Name</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.name} onChange={this.nameHandler} id="CustomerName"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Address</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.houseNumber} onChange={this.houseHandler} id="HouseNumber"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>City</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.city} onChange={this.cityHandler} id="City"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Landmark</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.landmark} onChange={this.landHandler} id="LandMark"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Zip Code</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.zipcode} onChange={this.zipcodeHandler} id="ZipCode"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Contact Number</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.phone} onChange={this.phoneHandler} id="Number"/>
                        </Col>
                    </Row>
                </Container>
                </div>
                <button type="button" onClick={()=>this.props.place({checkOut})}>Place Order</button>
            </form>
            
            <p className="OrderFormNotice">*Payment will be takes as Cash On delivery and GCASH</p>
        </div>
    );
}
}

export default orderForm;