import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Container, Nav, FormControl, Form, Button } from 'react-bootstrap'
import Contact from './Contact';
import Home from './Home';





const Navber = () => {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand >DashBoard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">

                            <Nav className="me-auto my-4 my-lg-0" >
                                <Nav.Link as={Link} to={'/contact'}>Contact us</Nav.Link>
                                <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                            </Nav>

                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navber
