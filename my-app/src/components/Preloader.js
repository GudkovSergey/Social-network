import React from 'react';
import preloader from '../assets/loading-6.gif';

const Preloader = (props) =>{
    return(
    <div > <img  style={{width:' 50%', height: '50%'}} src={preloader}/>
    </div>)
}
export default Preloader;