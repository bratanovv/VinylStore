import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import * as PropTypes from "prop-types";
import {createRecord, fetchBrands, fetchRecords, fetchTypes} from "../../http/RecordApi";
import {observer} from "mobx-react-lite";


const CreateRecord = observer(({show, onHide}) => {
    useEffect(() => {
        fetchTypes().then(data => record.setTypes(data))
        fetchBrands().then(data => record.setBrands(data))


    }, [])
    const {record} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState(null)
    const [published, setPublished] = useState(0)

    const [type, setType] = useState(null)
    const [info, setInfo] = useState([])

    const selectFile = e => {
        setFile(e.target.files[0])
    }


    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const addRecord=()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('published',`${published}`)
        formData.append('img',file)
        formData.append('brandId',record.selectedBrand.id)
        formData.append('typeId',record.selectedType.id)
        formData.append('info',JSON.stringify(info))
        createRecord(formData).then(data => onHide())
    }
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
                                <Dropdown.Toggle>{record.selectedType.name || 'Выберите жанр'}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {record.types.map(type =>
                                        <Dropdown.Item
                                            onClick={() => record.setSelectedType(type)}
                                            key={type.id}>{type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown className="d-flex flex-column">
                                <Dropdown.Toggle>{record.selectedBrand.name || 'Выберите издательсьво'}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {record.brands.map(brand =>
                                        <Dropdown.Item
                                            onClick={() => record.setSelectedBrand(brand)}
                                            key={brand.id}>{brand.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Form.Control className="mt-3" value={name} onChange={e => setName(e.target.value)}
                                  placeholder={"Введите название пластинки"}/>
                    <Form.Control className="mt-3" value={price} onChange={e => setPrice(Number(e.target.value))}
                                  type="number"
                                  placeholder={"Введите цену"}/>
                    <Form.Control className="mt-3" value={published}
                                  onChange={e => setPublished(Number(e.target.value))}
                                  type="number" placeholder={"Введите год выпуска"}/>
                    <Form.Control className="mt-3" onChange={selectFile} type="file"
                                  placeholder={"Введите название типа"}/>
                    <Container className="d-flex flex-column mt-3">
                        <Button variant={"outline-dark"} className=" mt-3" onClick={addInfo}>Добавить
                            свойство</Button>
                    </Container>
                    {
                        info.map(i =>
                            <Row className="mt-3" key={i.number}>
                                <Col md={4}>
                                    <FormControl value={i.title} onChange={(e)=>changeInfo('title',e.target.value,i.number)} placeholder={"Введите сторону"}/>

                                </Col>
                                <Col md={4}>
                                    <FormControl value={i.description} onChange={(e)=>changeInfo('description',e.target.value,i.number)} placeholder={"Введите композиции"}/>
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
                <Button variant={"outline-success"} onClick={addRecord}>Добавить</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateRecord;