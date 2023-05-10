import React, {useContext} from 'react';
import {Context} from "../index";
import {Row} from "react-bootstrap";
import RecordItem from "./RecordItem";
import {observer} from "mobx-react-lite";

const RecordList =observer( () => {
    const {record} = useContext(Context)
    return (
        <Row className="d-flex">
            {record.records.map(record => <RecordItem key={record.id}  record={record}></RecordItem>

            )}

        </Row>
    );
});

export default RecordList;