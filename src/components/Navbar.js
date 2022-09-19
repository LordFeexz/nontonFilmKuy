import {Navbar,Container,Nav} from "react-bootstrap"

const navbar = () => {
    return (
        <Navbar bg-dark>
            <Container>
                <Nav.Link>Trending</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default navbar