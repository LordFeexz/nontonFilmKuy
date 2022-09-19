import {Navbar,Container,Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar>
            <Container>
                <Navbar.Brand>Nonton Film Kuy</Navbar.Brand>
                <Nav>
                <Nav.Link>Most Viewed</Nav.Link>
                <Nav.Link>Trending</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar