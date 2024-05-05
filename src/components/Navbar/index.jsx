import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { getProfile, logout } from "../../redux/actions/auth";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile(null, null, null));
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Kampus Merdeka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {user ? (
                            <>
                                {(user?.role === "admin" || user?.role === "superadmin") && (
                                    <Nav.Link as={Link} to="/profile">
                                        {user?.name}
                                    </Nav.Link>
                                )}
                                {(user?.role === "admin" || user?.role === "superadmin") && (
                                    <Nav.Link as={Link} to="/cars">
                                        AddCars
                                    </Nav.Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}

                    </Nav>
                    <Nav className="ms-auto">
                        {user && (
                            <>
                                <Button variant="secondary" className="me-2">
                                    <Nav.Link
                                        onClick={() => {
                                            dispatch(logout());
                                            navigate("/login");
                                        }}
                                    >
                                        Logout
                                    </Nav.Link>
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;