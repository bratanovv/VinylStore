import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Table} from "react-bootstrap";
import {Context} from "../index";

import BasketItem from "./BasketItem";
import TabItem from "./TabItem";


const BasketList = observer(() => {
    const {record} = useContext(Context)
    const {arr} = useContext(Context)
    console.log(record)
    console.log(arr)


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
                {/*{record.records.map(record => {*/}
                {/*        for (let i = 0; i < arr.length; i++) {*/}
                {/*            console.log(i)*/}
                {/*            if (record.id === arr[i]) {*/}
                {/*                console.log(record.id === arr[i])*/}
                {/*                return (*/}
                {/*                    <TabItem key={record.id} record={record}/>)*/}
                {/*            }*/}
                {/*        }*/}
                {/*    }*/}
                {/*)}*/}



                </tbody>
            </Table>
        </Container>
    );
});

export default BasketList;