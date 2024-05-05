import { Col, Card, Image, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import '../../css/style.css';
import { useDispatch } from "react-redux";
import { deleteCar } from "../../redux/actions/car";
import Protected from "../Protected";


const CarCard = ({ car }) => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const handleDelete = (id) => {
            if (window.confirm("Are you sure you want to delete this car?")) {
                dispatch(deleteCar(id, navigate));
            };
        };
    return (
        <Col md={4} as={Link} to={`/cars/${car?.id}`} className="car-link" style={{ height: "100%" }}>
            <Card style={{ height: "65vh" }}>
                {car?.image && (
                    <Image src={car?.image} className="img-fluid" rounded />
                )}
                <Card.Body>
                    <Card.Title>{car?.name}</Card.Title>
                    <Card.Text>
                        <div>
                            <p><strong>Nama Mobil:</strong> {car?.name}</p>
                            <p><strong>Jenis Mobil:</strong> {car?.spec?.type}</p>
                        </div>
                    </Card.Text>
                    <div>
                        <Link to={`/cars/${car?.id}`}>
                            <Button variant="primary" className="me-2">View Details</Button>
                        </Link>
                        <Protected roles={["admin", "superAdmin"]}>
                        <Link to={`/cars/update/${car?.id}`}>
                            <Button variant="success" className="me-2">Update</Button>
                        </Link>
                        <Link>
                        <Button variant="danger" onClick={() => handleDelete(car.id)}>Delete</Button>
                        </Link>
                        </Protected>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    car: PropTypes.object,
};

export default CarCard;
