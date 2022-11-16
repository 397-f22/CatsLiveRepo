import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Apartment = ({ data }) => {
    console.log(data)
    return (
        <div>
            <Card style={{ width: '20rem', height: '20rem', float: 'left', margin: '10px' }}>
                <Card.Img variant="top" src="https://picsum.photos/200/120" />
                <Card.Body>
                    <Card.Title>{data.address}</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Button variant="primary" >Information</Button>
                </Card.Body>
            </Card>
        </div >


    );

}

export default Apartment;