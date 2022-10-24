import React from 'react';
import preloader from '../assets/loading-6.gif';

const Preloader = (props) =>{
    return(
    <div > <img  style={{width:' 10%', height: '10%', }} src={preloader}/>
    </div>)
}
export default Preloader;