import { hover } from '@testing-library/user-event/dist/hover';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AptModal from './AptModal';
import '../App.css'




const Apartment = ({ data }) => {
    console.log(data)
    return (

        <Card style={{
            width: '20rem',
            height: '21rem',
            float: 'left',
            margin: '10px',
            borderRadius: '20px 20px 20px 20px',
            boxShadow: '4px 4px 4px 0px rgb(0,0,0,0.3)',

        }}

        >

            <div style={{ width: '100%', height: '230px' }}>
                <Card.Img variant="top" src={data.img} style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '20px 20px 0px 0px',
                }} />
            </div>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    <div style={{ display: 'inline-block', float: 'left' }}>
                        ${data.rent} | {data.bedrooms}bd | {data.bathrooms}ba | {data.dimensions}
                    </div>
                </Card.Text>
                <AptModal data={data} />
            </Card.Body>
        </Card>



    );

}

export default Apartment;