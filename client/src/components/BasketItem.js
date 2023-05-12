import React from 'react';
import {Button, Container} from "react-bootstrap";
import {login, registration} from "../http/UserApi";
import {SHOP_ROUTE} from "../utils/consts";

const BasketItem = ({record}) => {
    const click =  (record) => {

        alert("УДАЛИЛИ "+ record.name)


    }

    return (
        <tr>


            <td>{record.id}</td>
            <td>{record.name}</td>
            <td>{record.published}</td>
            <td>{record.price}</td>
            <td> <Button variant="outline-danger" onClick={() => click(record)}  >УДАЛИТЬ</Button></td>

        </tr>

    );
};

export default BasketItem;