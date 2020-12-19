import React from "react";
import Button from 'react-bootstrap/Button';

function AgeBtn (props) {
    return (<div>
        <Button style={{width: "100%"}} variant="dark" onClick={props.filterMales}>Filter By Males!</Button>{' '}
    </div>)
}

export default AgeBtn;