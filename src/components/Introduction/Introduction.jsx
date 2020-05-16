import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import portfolioData from "../../data/portfolio.json";
import './Introduction.css';
import ReactMarkdown from 'react-markdown';

function FeaturedBtn(props) {
    return (
        <a href={props.link} className="px-2" title={props.title}>
            <Button outline size="lg" color="primary">
                <FontAwesomeIcon icon={props.icon} />
            </Button>
        </a>
    );
}

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: portfolioData,
        }
    }

    render() {
        return (
            <Row>
            <Col md={9} className="pr-5">
                <h1>Welcome!</h1>
                <h4 className="tagline">
                    <ReactMarkdown>
                        {this.state.data.tagline}
                    </ReactMarkdown>
                </h4>
                <div className="d-flex pt-3 pb-5">
                    {
                        this.state.data.email && 
                            <FeaturedBtn icon={faEnvelope} link={'mailto:' + this.state.data.email} title="Send me an Email" />
                    }
                    {
                        this.state.data.links && this.state.data.links.github &&
                            <FeaturedBtn icon={faGithub} link={this.state.data.links.github} title="View my Github" />
                    }
                    {
                        this.state.data.links && this.state.data.links.linkedin &&
                            <FeaturedBtn icon={faLinkedin} link={this.state.data.links.linkedin} title="View my Linkedin" />
                    }
                    {
                        this.state.data.links && this.state.data.links.twitter &&
                        <FeaturedBtn icon={faTwitter} link={this.state.data.links.twitter} title="View my Twitter" />
                    }
                </div>
            </Col>
            <Col md={3}>
                <img src={process.env.PUBLIC_URL + this.state.data.picture} 
                    alt={this.state.data.name} 
                    className="rounded w-100"
                    />
            </Col>
        </Row>
        );
    }
}

export default Introduction;