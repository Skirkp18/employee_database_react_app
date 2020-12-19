import React from "react";
import Button from 'react-bootstrap/Button';

function AgeBtn (props) {
    return (<div>
        <Button variant="dark" onClick={props.ageBtnClick}>Sort By Age (Youngest To Oldest)</Button>{' '}
    </div>)
}

export default AgeBtn;