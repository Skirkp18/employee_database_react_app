import React from "react";
import Card from 'react-bootstrap/Card';
import Container from "../Container/index";
import Row from "../Row/index";
import Col from "../Col/index";


function TitleAndDescriptionCard() {
return ( <Container>
    <Row>
        <Col size="md-12">
            <Card>
                <Row>
                    <Col size="md-12">
                    <h1 style={{textAlign:"center", fontSize:"50px"}}>Employee Directory</h1>
                    </Col>
                    <Col size="md-12">
                    <p style={{textAlign:"center"}}>This is a react app that lets you interact with a user database. Bellow you can sort by age and filter by gender!</p>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
</Container>
);
};

export default TitleAndDescriptionCard;