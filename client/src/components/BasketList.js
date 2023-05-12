import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Spinner, Table} from "react-bootstrap";
import {Context} from "../index";

import BasketItem from "./BasketItem";
import TabItem from "./TabItem";
import {getFrB} from "../http/RecordApi";
import {check} from "../http/UserApi";
import {type} from "@testing-library/user-event/dist/type";


const BasketList = () => {
    const {record} = useContext(Context)

    let arr ;


    const[loading,setLoading]= useState(true)

    useEffect(()=>{

            getFrB().then(data => {
                const arr = JSON.stringify(data).split(',').map(str => parseInt(str));
                console.log(arr)
            }).finally(()=>setLoading(false))


    },[])

    if(loading){

        return <Spinner animation={"grow"}/>
    }






        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>НАЗВАНИЕ</th>
                        <th>ГОД</th>
                        <th>ЦЕНА</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {record.records.map(record => {
                            for (let i = 1; i < arr.length; i++) {
                                console.log(i)
                                if (record.id === arr[i]) {
                                    console.log(record.id === arr[i])
                                    return (
                                        <TabItem key={record.id} record={record}/>)
                                }
                            }
                        }
                    )}


                    </tbody>
                </Table>
            </Container>
        );


};

export default BasketList;