import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {

    const { user, logoutUser } = useContext(AuthContext);

    return ( <>
        <Navbar className="mb-4" style={{height: "3.75rem"}}>
            <Container>
                <h2>
                    <Link to="/" className="Link-light text-decoration-none">ChatApp</Link>
                </h2>
                <span className="span"><i>{ user?.name }</i></span>
                <Nav>
                    <Stack direction="horizontal" gap="3">
                        {
                            user && (<>
                            <Link onClick={ logoutUser } to="/login" className="Link-light text-decoration-none">Logout</Link>
                            </>)
                        }
                        {
                            !user && (<>
                                <Link to="/login" className="Link-light text-decoration-none">Login</Link>
                                <Link to="/register" className="Link-light text-decoration-none">Register</Link>
                            </>)
                        }
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    </> );
}
 
export default NavBar;