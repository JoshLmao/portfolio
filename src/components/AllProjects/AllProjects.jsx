import React, { Component } from 'react';
import {
    Row,
    Col,
    Button,
    Container,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Label,
    Input
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';

import { formatDateToString } from "../utility";
import projectData from "../../data/projects.json";

function LinkBtn (props) {
    return (
        <a href={props.link} className="mx-1">
            <Button outline color="primary">
                <FontAwesomeIcon icon={props.faIcon} />
            </Button>
        </a>
    );
}

function Project(props) {
    return (
        <div className="py-4">
            <div className="d-flex mb-4">
                <div className="mr-auto">
                    <h4 id={props.title}>{props.title}</h4>
                    <h6>{formatDateToString(props.date)}</h6>
                </div>
                <div className="d-flex my-auto">
                    { props.github && <LinkBtn link={props.github} faIcon={faGithub} /> }
                    { props.website && <LinkBtn link={props.website} faIcon={faLink} /> }
                    { props.gitlab && <LinkBtn link={props.gitlab} faIcon={faGitlab} /> }
                </div>
            </div>
            <Row>
                <Col md={8}>
                    {
                        props.img_path && <img className="w-100" src={process.env.PUBLIC_URL + props.img_path} alt={props.title}></img>
                    }
                    {
                        props.video_path && <video className="w-100" controls>
                                                <source src={process.env.PUBLIC_URL + props.video_path} type="video/webm"/>
                                            </video>
                    }
                </Col>
                <Col md={4}>
                    <ReactMarkdown source={props.description}></ReactMarkdown>
                </Col>
            </Row>
        </div>
    )
}

function sortByReturnDate(projects, sortBy) {
    var sorted = projects.sort(function(a, b) {
        var dateA = a.date, dateB = b.date;
        if (sortBy.toLowerCase() === "newest")
        {
            if( dateA < dateB)
                return 1;
            else 
                return -1;
        }
        else
        {
            if( dateA < dateB)
                return -1;
            else 
                return 1;
        }
    });
    
    return sorted;
}

class AllProjects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolio: projectData,
            activeTab: "games",
            sort: "newest",
        };
        
        this.scrollToTop  = this.scrollToTop.bind(this);
    }
    
    scrollToTop(e) {
        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    setActiveTab(tab) {
        //console.log("setting active tab to " + tab);
        this.setState({
            activeTab: tab
        });
    }

    render() {
        const toggle = tab => {
            if(this.state.activeTab !== tab) 
                this.setActiveTab(tab);
        }

        const getProject = (value) => {
            return <Project    key={value.title}
                        title={value.title} 
                        description={value.description} 
                        date={value.date}
                        img_path={value.assets?.image ? value.assets.image : null} 
                        video_path={value.assets?.video ? value.assets.video : null}
                        github={value.links?.github ? value.links.github : null}
                        gitlab={value.links?.gitlab ? value.links.gitlab : null} 
                        website={value.links?.website ? value.links.website : null} 
                        />
        }

        return (
            <Container className="p-5">
                <h2>Projects</h2>
                <div className="d-flex py-2 pb-4">
                    <Label style={{ whiteSpace: "nowrap" }} className="pr-3 my-auto">Sort by:</Label>
                    <Input type="select" name="select" id="exampleSelect" onChange={(e) => { this.setState({ sort: e.target.value })}}>
                        <option value="newest">sort by newest</option>
                        <option value="oldest">sort by oldest</option>
                    </Input>
                </div>
                <Nav tabs>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === "games" })} 
                            onClick={() => { toggle('games') }}>
                                games
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === "web" })} 
                            onClick={() => { toggle('web') }}>
                            web dev
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            className={classnames({ active: this.state.activeTab === "other" })} 
                            onClick={() => { toggle('other') }}>
                            other
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="games">
                        {
                            this.state.portfolio && this.state.portfolio.games && sortByReturnDate(this.state.portfolio.games, this.state.sort).map((value) => getProject(value))
                        }
                    </TabPane>
                    <TabPane tabId="web">
                        {
                            this.state.portfolio && this.state.portfolio.web && sortByReturnDate(this.state.portfolio.web, this.state.sort).map((value) => getProject(value))
                        }
                    </TabPane>
                    <TabPane tabId="other">
                        {
                            this.state.portfolio && this.state.portfolio.other && sortByReturnDate(this.state.portfolio.other, this.state.sort).map((value) => getProject(value))
                        }
                    </TabPane>
                </TabContent>  
                <div>
                    {
                        this.state.projects && this.state.projects.map ((value) => 
                            <Project    key={value.title}
                                        title={value.title} 
                                        description={value.description} 
                                        date={value.date}
                                        img_path={value.assets?.image ? value.assets.image : null} 
                                        video_path={value.assets?.video ? value.assets.video : null}
                                        github_link={value.links?.github ? value.links.github : null}
                                        website_link={value.links?.website ? value.links.website : null} />
                        )
                    }
                </div>
                <div style={{ position: "fixed", bottom: 15, right: 15 }}>
                    <Button color="secondary" onClick={this.scrollToTop} className="py-1 px-3" style={{ fontSize: "25px" }}>
                        ↑
                    </Button>
                </div>
            </Container>
        );
    }
}

export default AllProjects;