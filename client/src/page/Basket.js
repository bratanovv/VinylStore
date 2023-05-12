import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {fetchBrands, fetchRecords, fetchTypes, getFrB} from "../http/RecordApi";
import {Container} from "react-bootstrap";
import TableAdmin from "../components/TableAdmin";
import BasketList from "../components/BasketList";
import {check} from "../http/UserApi";
import {wait} from "@testing-library/user-event/dist/utils";

const Basket = () => {
    const {record} = useContext(Context)
    const {user} = useContext(Context)


    useEffect(()=>{
        fetchTypes().then(data=> record.setTypes(data))
        fetchBrands().then(data=> record.setBrands(data))
        fetchRecords(null,null,1,4).then(data=>{
            record.setRecords(data.rows)
            record.setTotalCount(data.count)
        })




    },[])



            // getFrB().then(data => {
            //     const   {arr} = JSON.stringify(data).split(',').map(str => parseInt(str));
            //     console.log(arr)})







    return (
        <Container className="d-flex flex-column mt-3">
            <BasketList  />
        </Container>
    );
};

export default Basket;