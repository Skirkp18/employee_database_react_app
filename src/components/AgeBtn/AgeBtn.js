import React from "react";
import Button from 'react-bootstrap/Button';

function AgeBtn (props) {
    return (<div>
        <Button variant="dark" onClick={props.ageBtnClick}>Dark</Button>{' '}
    </div>)
}

export default AgeBtn;