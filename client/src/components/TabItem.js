import React from 'react';
import {Button, Container} from "react-bootstrap";
import {login, registration} from "../http/UserApi";
import {ADMIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {createRecord, deleteRecord} from "../http/RecordApi";
import {useNavigate} from "react-router";

const TabItem = ({record}) => {
    const history = useNavigate()
    const click = (record) => {
        const name = record.name
        deleteRecord(record.id).then(r => alert(record.name + "was deleted"))
    }


    return (
        <tr>


            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.published}</td>
            <td>{record.price}</td>
            <td><Button variant="outline-danger" onClick={() => {

                 click(record);
                history(SHOP_ROUTE)


            }}>УДАЛИТЬ</Button></td>

        </tr>

    );
};

export default TabItem;