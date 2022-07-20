import React from 'react';
import Spinner from './spinner/spinner';
import './forLoad.css';


const forLoad=()=>{
    return(
        <div class="load-screen" >
            <h1>KUIDAORE</h1>
            <h3>"Eat until you drop."</h3>
            <Spinner/>
        </div>
    );
}

export default forLoad;