import React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react"
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {record} = useContext(Context)
    return (
        <ListGroup horizontal>
            { record.types.map(type =>
                <ListGroup.Item
                    style={{cursor:"pointer"}}
                    active={type.id===record.selectedType.id}
                    onClick={() => record.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    );
});

export default TypeBar;