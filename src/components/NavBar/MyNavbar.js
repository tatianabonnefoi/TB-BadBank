import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./MyNavbar.css";

function MyNavbar() {
    return (
        
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/" className="logo">SafeBank</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/login" className="myNavLink">
                            Login
                        </NavLink>
                        <NavLink to="/signup" className="myNavLink">
                            Signup
                        </NavLink>
                        <NavLink to="/dashboard" className="myNavLink">
                            User Account
                        </NavLink>
                        <NavLink to="/alldata" className="myNavLink">
                            All Data
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
        </Navbar>
        
    );
}

export default MyNavbar;
