import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import RecordList from "../components/RecordList";

const Shop = () => {
    return (
        <Container>

            <Row className="mt-3">
                <Col md={12}>
                   <TypeBar></TypeBar>
                </Col>

            </Row >
            <Container className="mt-3">
                <Col md={5}>
                <BrandBar></BrandBar>
                </Col>
                <RecordList></RecordList>

            </Container>

        </Container>
    );
};

export default Shop;