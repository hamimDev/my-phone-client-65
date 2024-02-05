import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All phones here: {phones.length}</h2>
            <div>
                {
                    phones.map(phone => <Phone
                        key={phone.id} 
                        phone={phone}
                    ></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;