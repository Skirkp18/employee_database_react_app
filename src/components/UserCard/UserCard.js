import React from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


function UserCard() {
return ( <Container>
    <Row>
        <Col size="md-12">
    <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title style={{textAlign:"center", fontSize:"35px"}}>Current Employees:</Card.Title>
    <Button variant="primary" size="lg">
      Sort By Age
    </Button>{' '}
    <Button variant="secondary" size="lg">
      Filter By Gender
    </Button>
    <br>
    </br>
    <br>
    </br>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>)
};

export default UserCard;