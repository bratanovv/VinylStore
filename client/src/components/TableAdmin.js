import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Container, Table} from "react-bootstrap";
import {Context} from "../index";
import TabItem from "./TabItem";
import {fetchRecords} from "../http/RecordApi";

const TableAdmin = observer(() => {

    const {record} = useContext(Context)

    useEffect(()=>{

        fetchRecords(null,null,1,10).then(data=>{
            record.setRecords(data.rows)

        })

    },[])
    console.log(record)
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
               {record.records.map(record => <TabItem key={record.id} record={record}></TabItem>)}



               </tbody>
           </Table>
       </Container>
    );
});

export default TableAdmin;