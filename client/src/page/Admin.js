import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateRecord from "../components/modals/CreateRecord";
import CreateBrand from "../components/modals/CreateBrand";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [recordVisible, setRecordVisible] = useState(false)
    return (


        <Container className="d-flex flex-column mt-3">
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setTypeVisible(true)}>Добавить тип</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setBrandVisible(true)}>Добавить бренд</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setRecordVisible(true)}>Добавить пластинкуу</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateRecord show={recordVisible} onHide={() => setRecordVisible(false)}/>

        </Container>
    );
};

export default Admin;