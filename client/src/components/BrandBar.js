import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Card, Col, Container, Dropdown, Row} from "react-bootstrap";

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
                            <Dropdown.Item onClick={() => record.setSelectedBrand(brand)} key={brand.id} className="p-3"
                                           href="#">
                                {brand.name}
                            </Dropdown.Item>
                        )}

                    </Dropdown.Menu>
                </Dropdown></Col>
                <Col>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-autoclose-true">
                            Издание
                        </Dropdown.Toggle>
                    </Dropdown>
                </Col>
                <Col>
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle variant="outline-dark" id="dropdown-autoclose-true">
                            Издание
                        </Dropdown.Toggle>
                    </Dropdown>
                </Col>
            </Row>
            <Row  className="pt-3">
                <Col >{record.selectedBrand ?    <a >{record.selectedBrand.name}</a>  : ''}</Col>
            </Row>

        </Container>


    );
});

export default BrandBar;