import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function MainPage() {
    return( <Container>
        <Row>
            <Col size="md-12">
            <Card>
                <h1>This is a test!</h1>
            </Card>
            </Col>
        </Row>
    </Container>
    );
    
}

export default MainPage;