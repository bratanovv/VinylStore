import React, {useContext, useState} from 'react';
import {Button, Col, Container, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import * as PropTypes from "prop-types";

function Raw(props) {
    return null;
}

Raw.propTypes = {children: PropTypes.node};
const CreateRecord = ({show, onHide}) => {
    const {record} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])}
        const removeInfo = (number) => {
            setInfo(info.filter(i => i.number !== number))
        }
        return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"

                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавить новую музыкальную пластинку
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-4">
                            <Col>
                                <Dropdown className="d-flex flex-column">
                                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {record.types.map(type => <Dropdown.Item
                                            key={type.id}>{type.name}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <Dropdown className="d-flex flex-column">
                                    <Dropdown.Toggle>Выберите издательсьво</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {record.brands.map(brand => <Dropdown.Item
                                            key={brand.id}>{brand.name}</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                        <Form.Control className="mt-3" placeholder={"Введите название пластинки"}/>
                        <Form.Control className="mt-3" type="number" placeholder={"Введите цену"}/>
                        <Form.Control className="mt-3" type="number" placeholder={"Введите год выпуска"}/>
                        <Form.Control className="mt-3" type="file" placeholder={"Введите название типа"}/>
                        <Container className="d-flex flex-column mt-3">
                            <Button variant={"outline-dark"} className=" mt-3" onClick={addInfo}>Добавить
                                свойство</Button>
                        </Container>
                        {
                            info.map(i =>
                                <Row className="mt-3" key={i.number}>
                                    <Col md={4}>
                                        <FormControl placeholder={"Введите сторону"}/>

                                    </Col>
                                    <Col md={4}>
                                        <FormControl placeholder={"Введите композиции"}/>
                                    </Col>
                                    <Col md={4} className="d-flex flex-column ">
                                        <Button variant={"outline-warning"}
                                                onClick={() => removeInfo(i.number)}>Удалить</Button>
                                    </Col>
                                </Row>
                            )
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
                    <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                </Modal.Footer>
            </Modal>
        );
    };

    export default CreateRecord;