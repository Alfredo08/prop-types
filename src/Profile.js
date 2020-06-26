import React from 'react';
import PropTypes from 'prop-types';

export default function Profile( props ){
    return(
        <div>
            <h1> Profile information </h1>
            <h2> {props.name} </h2>
            <p> {props.age.age.age} </p>
        </div>);
}

Profile.propTypes = {
    name : PropTypes.string.isRequired
}