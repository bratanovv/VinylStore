import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router";
import {fetchOneRecord} from "../http/RecordApi";

const RecordPage = () => {
    const [record, setRecord] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneRecord(id).then(data => setRecord(data))
    }, [])

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image className="m-4" width={500} src={process.env.REACT_APP_API_URL + record.img}/>
                </Col>
                <Col>
                    <h2>{record.name}</h2>
                    <div className="mb-3">
                        <p>{record.published}</p>
                    </div>
                    <h5>{record.price}руб.</h5>


                    <div className="d-flex align-items-center justify-content-center ">
                        <Row className="d-flex flex-column mt-3">
                            {record.info.map(info=>
                                <Container>
                                    <Row key={info.id}>
                                        <b>{info.title}</b>

                                        {info.description}
                                    </Row></Container>)}
                        </Row>

                    </div>


                    <Button size="lb" className="mt-5" variant="outline-dark">Добавить в корзину</Button>


                </Col>
            </Row>

        </Container>
    );
};

export default RecordPage;