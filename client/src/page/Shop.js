import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import RecordList from "../components/RecordList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {check} from "../http/UserApi";
import {fetchBrands, fetchRecords, fetchTypes} from "../http/RecordApi";

const Shop = observer(() => {
    const {record} = useContext(Context)

    useEffect(()=>{
      fetchTypes().then(data=> record.setTypes(data))
        fetchBrands().then(data=> record.setBrands(data))
        fetchRecords().then(data=> record.setRecords(data.rows))

    },[])


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
});

export default Shop;