import UpdateCarComponents from "../../components/UpdateCars";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const UpdateCars = () => {
    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>UpdateCars</Card.Header>
                    <Card.Body>
                        <UpdateCarComponents />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UpdateCars;