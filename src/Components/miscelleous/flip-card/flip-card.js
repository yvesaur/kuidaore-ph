import React from 'react';
import './flip-card.css';

import {Link} from 'react-router-dom';
const flip_card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                {props.front}
                    <div>
                    <h1>Eat Bento like never before</h1>
                    <div style={{marginTop:"13%",backgroundColor:"#242424",opacity:0.8,display:"inline-block",padding:"10px 10px"}}>
                        <h2>Wide varieties of bento boxes</h2>
                        
                        <h3>Brought at your doorsteps by Kuidaore PH</h3>
                        <h4>Hover to take a look</h4>
                        </div>
                    </div>
                     </div>
                    <div className="flip-card-back">
                    {props.back}
                        <h1 style={{fontWeight:"300"}}>Bento Special Deal!</h1>
                        <ul>
                            {Object.keys(props.lis).map(each=><li key={each}>{each}</li>)}
                        </ul>
                        <Link to="/menu" >See our MENU</Link>            
                    </div>
                </div>
            </div>
            );
}
export default flip_card;