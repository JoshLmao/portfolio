import React, { Component } from 'react';
import { 
    Card, 
    CardBody, 
    CardFooter, 
    CardImg, 
    CardHeader, 
    Button
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { formatDateToString } from "../utility";
import projectData from "../../data/projects.json";
import portfolioData from "../../data/portfolio.json";
import './Featured.css';
import CardDeck from 'reactstrap/lib/CardDeck';

// Filters an array by a given title
function filterByTitle(filterArray, title) {
    return filterArray.filter(function(x) {
        if (x.title.toLowerCase() === title.toLowerCase()) {
            return x;
        }
        return null;
    });
}

// Searches all projects property in portfolio.json for project by title
function findProjectFromTitle (allProjects, title) {
    // Search 'Games' projects for target project by title
    let found = filterByTitle(allProjects.games, title);
    if (found && found.length > 0) {
        return found[0];
    }
    // Search 'Web' projects for target project by title
    found = filterByTitle(allProjects.web, title);
    if (found && found.length > 0) {
        return found[0];
    }
    // Search 'Other' projects for target project by title
    found = filterByTitle(allProjects.other, title);
    if (found && found.length > 0) {
        return found[0];
    }
    // Can't find, return null
    return null;
}

function LinkBtn(props) {
    return (
        <a href={props.link} className="pl-2">
            <Button outline>
                <FontAwesomeIcon icon={props.icon} />
            </Button>
        </a>
    )
}

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allProjects: projectData,
            featured: null,
        };
    }

    componentDidMount() {
        // Create featured array by getting latest project in each other array
        if(this.state.allProjects && portfolioData.featured) {
            let featured = [];

            // Loop over each featured to find the project and add to display
            for(let i = 0; i < portfolioData.featured.length; i++) {
                let found = findProjectFromTitle(this.state.allProjects, portfolioData.featured[i]);
                if (found)
                    featured.push(found);
                else
                    console.error(`Unable to find and feature project '${portfolioData.featured[i]}'`)
            }
            this.setState({
                featured: featured,
            });
        }
    }

    render() {
        return (
            <div className="">
                <h2>Featured Work</h2>
                <h6>See all of my projects at <Link to="/projects">/projects</Link></h6>
                <CardDeck className="pt-3" style={{color: "black"}}>
                    {
                        this.state.featured && this.state.featured.map((value, index) => {
                            return (
                                <Card 
                                    className="featured-card" 
                                    key={index} 
                                    color="secondary" outline>
                                    <CardHeader>
                                        <h4>{value.title}</h4>
                                    </CardHeader>
                                        <div className="p-2"> {/*className="p-2"*/} 
                                            {
                                                value.assets && value.assets.image && 
                                                    <CardImg top width="100%" alt={value.title} src={value.assets.image}></CardImg>
                                            }
                                            {
                                                value.assets && value.assets.video && 
                                                    <video className="w-100" controls>
                                                        <source src={process.env.PUBLIC_URL + value.assets.video} type="video/webm"/>
                                                    </video>
                                            }
                                        </div>
                                    <CardBody>
                                        <ReactMarkdown>
                                            { value.short_description ? value.short_description : value.description }
                                        </ReactMarkdown>
                                    </CardBody>
                                    <CardFooter>
                                        <div className="d-flex">
                                            <div className="my-auto">
                                                { value.date && formatDateToString(value.date) }
                                            </div>
                                            <div className="ml-auto">
                                                {
                                                    value.links && value.links.github && 
                                                        <LinkBtn link={value.links.github} icon={faGithub} />
                                                }
                                                {
                                                    value.links && value.links.website &&
                                                        <LinkBtn link={value.links.website} icon={faLink} />
                                                }
                                                {
                                                    value.links && value.links.gitlab &&
                                                        <LinkBtn link={value.links.gitlab} icon={faGitlab} />
                                                }
                                                {
                                                    value.links && value.links.youtube &&
                                                        <LinkBtn link={value.links.youtube} icon={faYoutube} />
                                                }
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </CardDeck>
            </div>
        );
    }
}

export default Featured;