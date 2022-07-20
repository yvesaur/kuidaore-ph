import React from 'react';
import './brand.css';
import logo from '../../../Assests/icons/kudaoire-logo.png';

const brand=(props)=>{
    let vclass=" ";
    if(props.show){
        vclass="show";
    }
    let all_class=["brand"];
    all_class.push(vclass);
    return(
        <div className={all_class.join(" ")}>
            <p className="name">KUIDAORE</p>
            <div className="image-container">
            <img src={logo} alt="Compoany Logo"/>
            </div>
            <p className="lastTitle">Eat until you drop.</p>
        </div>

    );
}

export default brand;