import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, CloseButton, Col, Container, Dropdown, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {record} = useContext(Context)
    return (


        <Container>

            <Row   xs={"auto"}>
                <Col  ><Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-autoclose-true">
                        Издание
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {record.brands.map(brand =>
                            <Dropdown.Item onClick={() => record.setSelectedBrand(brand)} key={brand.id} className=""
                                           href="#">
                                {brand.name}
                            </Dropdown.Item>
                        )}

                    </Dropdown.Menu>
                </Dropdown></Col>
                <Col >{record.selectedBrand.id ?  <Button onClick={() => record.setSelectedBrand({})} variant={"outline-dark"}>X | {record.selectedBrand.name}</Button>  : ''}</Col>


            </Row>

        </Container>


    );
});

export default BrandBar;