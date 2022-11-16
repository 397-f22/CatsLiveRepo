import React, { Component } from 'react';

const Apartment = ({data}) => {
    console.log(data)
    return (
        <div>
            {data.address}
        </div>
     );
    
}

export default Apartment;