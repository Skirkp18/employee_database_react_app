import React from "react";
import Button from 'react-bootstrap/Button';

function AgeBtn (props) {
    return (<div>
        <Button variant="dark" onClick={props.filterFemales}>Filter By Females!</Button>{' '}
    </div>)
}

export default AgeBtn;