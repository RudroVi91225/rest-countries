import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, area, population, flags } = props.country;
    return (
        <div className='country'>
            <h3> Country Name:{name.common}</h3>
            <p> Population :{population}</p>
            <p><small>Area:{area}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;