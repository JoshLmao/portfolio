import React, { Component } from 'react';
import {
    Row,
    Col,
    Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import projectData from "./projects.json";

function LinkBtn (props) {
    return (
        <a href={props.link} className="mx-1">
            <Button outline>
                <FontAwesomeIcon icon={props.faIcon} />
            </Button>
        </a>
    );
}

function Project(props) {
    return (
        <div className="pt-3 pb-5">
            <div className="d-flex mb-4">
                <h4 className="mr-auto">{props.title}</h4>
                <div className="d-flex my-auto">
                    { props.github_link && <LinkBtn link={props.github_link} faIcon={faGithub} /> }
                    { props.website_link && <LinkBtn link={props.website_link} faIcon={faLink} /> }
                </div>
            </div>
            
            <Row>
                <Col md={8}>
                    {
                        props.img_path && <img className="w-100" src={props.img_path} alt={props.title}></img>
                    }
                    {
                        props.video_path && <video className="w-100" controls>
                                                <source src={props.video_path} type="video/webm"/>
                                            </video>
                    }
                </Col>
                <Col md={4}>
                    <p>{props.description}</p>
                </Col>
            </Row>
        </div>
    )
}

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: projectData.projects,
        };
    }
    
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div>
                    {
                        this.state.projects && this.state.projects.map ((value) => 
                            <Project    title={value.title} 
                                        description={value.description} 
                                        img_path={value.assets ? value.assets.image : null} 
                                        video_path={value.assets ? value.assets.video : null}
                                        github_link={value.links ? value.links.github : null}
                                        website_link={value.links ? value.links.website : null} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Projects;