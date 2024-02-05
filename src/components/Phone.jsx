import React from 'react';
import { Link } from 'react-router-dom';

const Phone = ({phone}) => {
    const {id,name} = phone
    return (
        <Link to={`/phone/${id}`}>
            <h1>id: {id}</h1>
            <h2>Name: {name}</h2>
        </Link>
    );
};

export default Phone;