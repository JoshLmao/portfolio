import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { NavHashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./NavigationBar.css";
import { links, brand, cv } from "../../data/portfolio.json";
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            links: links,
            brand: brand,
            cvLink: cv,
        };

        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar(e) {
        e.preventDefault();
        this.setState({ 
            isOpen: !this.state.isOpen 
        });
    }

    render() {
        return (
            <Navbar light expand="md" className="navbar">
                <Container>
                    <NavbarBrand href="/" className="navbar-brand">{this.state.brand}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="navbar-dark" />
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="mx-3">
                                {/* Using special NavHashLink to allow scrollspy to work*/}
                                <NavHashLink className="navbar-link nav-link" to="/#about">about</NavHashLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavHashLink className="navbar-link nav-link" to="/#featured">featured</NavHashLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavHashLink className="navbar-link nav-link" to="/#contact">contact</NavHashLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href={this.state.cvLink}>cv</NavLink>
                            </NavItem>
                        </Nav>
                        {/* Right hand docked nav bar */}
                        <Nav navbar>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" tag={Link} to="/projects">projects</NavLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href={this.state.links.twitter}>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </NavLink>
                            </NavItem>    
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavigationBar;