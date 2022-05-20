import React from 'react';
import './style.css';
import FORM from './form/form';
import Header from './header/Header';
const BODY = () => {

    return(
    <div className = 'container'>
        <Header/>
        <FORM/>
    </div>
    )
}

export default BODY;