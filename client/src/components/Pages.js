import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, Pagination} from "react-bootstrap";

const Pages = observer(() => {
    const {record} = useContext(Context)
    const pageCount = Math.ceil(record.totalCount/record.limit)
    const pages=[]
    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Container className=" d-flex  justify-content-center align-items-center">
        <Pagination className="mt-2">
            {pages.map(page=>
            <Pagination.Item active={record.page===page} key={page} onClick={()=>record.setPage(page)} >{page}</Pagination.Item>)}

        </Pagination>
        </Container>
    );
});

export default Pages;