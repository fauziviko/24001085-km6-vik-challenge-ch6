import AddCarsComponents from "../../components/AddCars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const NewCars = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>AddCars</Card.Header>
                    <Card.Body>
                        <AddCarsComponents />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default NewCars;