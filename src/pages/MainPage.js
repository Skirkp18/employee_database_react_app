import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";
import Card from 'react-bootstrap/Card';

function MainPage() {
    return( <Container>
        <Row>
            <Col size="md-12">
                <Card>
                    <h1 style={{textAlign:"center"}}>This Is A Test!</h1>
                    <br>
                    </br>
                    <p style={{textAlign:"center"}}>This is more test text!!!!!!!</p>
                </Card>
            </Col>
        </Row>
    </Container>
    );
    
}

export default MainPage;