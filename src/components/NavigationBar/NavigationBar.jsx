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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import "./NavigationBar.css";
import { TWITTER_LINK } from "../../config";

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
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
                    <NavbarBrand href="/" className="navbar-brand">joshlmao</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href="/#about">about</NavLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href="/#projects">projects</NavLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href="/#contact">contact</NavLink>
                            </NavItem>
                            <NavItem className="mx-3">
                                <NavLink className="navbar-link" href="/cv.pdf">cv</NavLink>
                            </NavItem>
                        </Nav>
                        {/* Right hand docked nav bar */}
                        <Nav>
                            <NavItem>
                                <NavLink className="navbar-link" href={TWITTER_LINK}>
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