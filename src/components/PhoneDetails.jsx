import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PhoneDetails = () => {
    const phoneId = useLoaderData();
    return (
        <div>
            <h2>{phoneId.name}</h2>
            <img src={phoneId.image} alt="" />
        </div>
    );
};

export default PhoneDetails;