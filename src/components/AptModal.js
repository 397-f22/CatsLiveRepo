import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Blur from "react-blur";

//backgroundImage: `url(${data.img})`,

export default function AptModal({ data }) {
    const { setVisible, bindings } = useModal();
    return (
        <div>
            <Button auto shadow color="secondary" style={{ float: "right", height: '20px', width: '50px', marginBottom: '10px' }} onClick={() => setVisible(true)}>
                Details
            </Button>
            <Modal
                scroll
                width="1000px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"

                {...bindings}
            >
                <Blur img={data.img} blurRadius={20} enableStyles style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <Modal.Header>
                        <Text id="modal-title" size={18}>
                            {data.address}
                        </Text>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{ display: 'inline-flex' }}>
                            <div style={{ width: 520 }}>
                                <Card.Img variant="top" src={data.img} />
                            </div>
                            <div style={{ width: 400 }}>
                                <div style={{ fontSize: '40px', fontWeight: "bold" }} >${data.rent}</div>

                                {data.bedrooms}bd | {data.bathrooms}ba | {data.dimensions}
                                <br />
                                <Rating name="read-only" value={data.value} readOnly />
                                <br />
                                <SimpleAccordion data={data} />
                                <br />

                            </div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onClick={() => setVisible(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Blur>


            </Modal >
        </div >
    );
}

function SimpleAccordion({ data }) {
    return (
        <div>
            <Accordion>
                <AccordionSummary

                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Overview</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <hr />
                        It is the best choise for NU student
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Facts and features</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <hr />
                        <LocalParkingIcon />
                        {data.address ? <CheckIcon /> : <ClearIcon />}
                        <br />
                        <br />
                        <LocalLaundryServiceIcon />
                        {data.laundry ? <CheckIcon /> : <ClearIcon />}
                        <br />

                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary

                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Nearby school</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <hr />
                        Northwestern University, Chicago University
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
