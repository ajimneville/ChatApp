import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

const NavBar = () => {
    return ( <>
        <Navbar className="mb-4" style={{height: "3.75rem"}}>
            <Container>
                <h2>
                    <Link to="/" className="Link-light text-decoration-none">ChatApp</Link>
                </h2>
                <Nav>
                    <Stack direction="horizontal" gap="3">
                        <Link to="/login" className="Link-light text-decoration-none">Login</Link>
                        <Link to="/register" className="Link-light text-decoration-none">Register</Link>
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    </> );
}
 
export default NavBar;