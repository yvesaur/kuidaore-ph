import React from 'react';
import './spec.css';



const spec=(props)=>{
    return(
        <div className="spec">
            <img src={props.src} alt="Features Icon"/>
            <p className="specHead">{props.head}</p>
            {/* <hr/> */}
            <p className="specContent">{props.content}</p>
        </div>
    );
}

export default spec;