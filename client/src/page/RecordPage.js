import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";

const RecordPage = () => {
    const record = {rating: 3, id: 3, name: "Phil Collins – Face Value", price: 179, brandId: 1, typeId: 1, published: 2016, img: "https://thumb.tildacdn.com/tild3437-3236-4133-b836-326265363336/-/format/webp/tyler-the-creator-ca.jpg",}
    const description =[
        {id:1, title:'Side A', description: 'A1. Alone Again\n' +
                '\n' +
                'A2. Too Late\n' +
                '\n' +
                'A3. Hardest To Love\n' +
                '\n' +
                'A4. Scared To Live'},
        {id:2, title:'Side B', description: 'B1. Snowchild\n' +
                '\n' +
                'B2. Escape From LA\n' +
                '\n' +
                'B3. Heartless\n' +
                '\n' +
                'B4. Faith'},
        {id:3, title:'Side B', description: 'B1. Snowchild\n' +
                '\n' +
                'B2. Escape From LA\n' +
                '\n' +
                'B3. Heartless\n' +
                '\n' +
                'B4. Faith'}
    ]
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image className="m-4" width={500} src={record.img}/>
                </Col>
                <Col>
                    <h2>{record.name}</h2>
                    <div className="mb-3">
                    <p>{record.published}</p>
                    </div>
                    <h5>{record.price}руб.</h5>



                    <div className="d-flex align-items-center justify-content-center ">
                        <Row className="d-flex flex-column mt-3">
                        {description.map(info =>
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