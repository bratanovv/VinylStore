import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateRecord from "../components/modals/CreateRecord";
import CreateBrand from "../components/modals/CreateBrand";
import {Context} from "../index";
import RecordItem from "../components/RecordItem";
import TableAdmin from "../components/TableAdmin";
import {fetchBrands, fetchRecords, fetchTypes} from "../http/RecordApi";
import Pages from "../components/Pages";
import {redirect, useNavigate, useNavigation} from "react-router";
import {SHOP_ROUTE} from "../utils/consts";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [recordVisible, setRecordVisible] = useState(false)
    const {record} = useContext(Context)
const history = useNavigate()

    useEffect(()=>{

        fetchRecords(null,null,1,10).then(data=>{
            record.setRecords(data.rows)

        })


    },[])




    return (


        <Container className="d-flex flex-column mt-3">
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>{setTypeVisible(true); }}>Добавить жанр</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setBrandVisible(true)}>Добавить издателя</Button>
            <Button variant={"outline-dark"} className="mt-3" onClick={() =>setRecordVisible(true)}>Добавить пластинку</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateRecord show={recordVisible} onHide={() => {setRecordVisible(false); history(SHOP_ROUTE)}}/>
            <TableAdmin/>


        </Container>
    );
};

export default Admin;