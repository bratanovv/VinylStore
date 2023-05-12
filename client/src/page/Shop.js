import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import RecordList from "../components/RecordList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {check} from "../http/UserApi";
import {deleteRecord, fetchBrands, fetchOneRecordByName, fetchRecords, fetchTypes, getFrB} from "../http/RecordApi";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {record} = useContext(Context)
    const [value, setValue] = useState('')

    useEffect(()=>{
      fetchTypes().then(data=> record.setTypes(data))
        fetchBrands().then(data=> record.setBrands(data))
        fetchRecords(null,null,1,4).then(data=>{
            record.setRecords(data.rows)
            record.setTotalCount(data.count)
        })


    },[])

    useEffect(()=>{
        fetchRecords(record.selectedType.id,record.selectedBrand.id,record.page,4).then(data=>{
            record.setRecords(data.rows)
            record.setTotalCount(data.count)
        })


    },[record.page, record.selectedType,record.selectedBrand])

    const click = () => {
        if(value.length>0)
        fetchOneRecordByName(value).then(data=>{record.setRecords(data.rows)})

    }









    return (
        <Container>

            <Row className="mt-3">
                <Col md={12}>
                   <TypeBar></TypeBar>
                </Col>

            </Row >
            <Container className="mt-3">
                <Col md={8}>
                    <Row> <Col> <BrandBar></BrandBar></Col> <Col>
                        <Form  className="d-flex">
                        <Form.Control
                            alue={value} onChange={e=>setValue(e.target.value)}
                            type="search"
                            placeholder="Пластинка"
                            className=""
                            aria-label="Search"
                        />
                        <Button variant="outline-dark"  onClick={click}>Искать</Button>
                    </Form></Col> </Row>



                </Col>
                <RecordList></RecordList>
                <Pages></Pages>

            </Container>

        </Container>
    );
});

export default Shop;