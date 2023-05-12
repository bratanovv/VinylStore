import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import { useNavigate } from 'react-router';
import {RECORDS_ROUTE} from "../utils/consts";

const RecordItem = ({record}) => {
    const history = useNavigate()

    return (
        <Col md={3} className={"mt-3"} onClick={() => history(RECORDS_ROUTE+'/'+record.id)}>
            <Card className=" border-white" style={{cursor:'pointer'}}>
                <Image src={process.env.REACT_APP_API_URL + record.img}/>
                <div className="d-flex justify-content-center mb-1 mt-3">
                    <h5 >{record.name}</h5>

                </div>

                <div className="d-flex justify-content-center mb-2">
                    <h7 >{record.published}</h7>
                </div>
                <div className="d-flex justify-content-center">


                    <h6 >{record.price}руб.</h6>
                </div>
            </Card>
        </Col>
    );
};

export default RecordItem;