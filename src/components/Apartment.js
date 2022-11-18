import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import AptModal from './AptModal';



const Apartment = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Card style={{ width: '300px', height: '320px', float: 'left', margin: '10px', textAlign: 'center' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/120" />
                <Card.Body>
                    <Card.Title>{data.address}</Card.Title>
                    <Card.Text>
                        <div style={{ display: 'inline-block', float: 'left' }}>
                            ${data.rent} | {data.bedrooms}bd | {data.bathrooms}ba | {data.dimensions} |
                        </div>
                    </Card.Text>
                    <AptModal data={data} />
                </Card.Body>
            </Card>
        </div >


    );

}

export default Apartment;