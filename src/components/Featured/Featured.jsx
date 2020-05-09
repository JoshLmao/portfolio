import React, { Component } from 'react';
import { 
    Card, 
    CardBody, 
    CardFooter, 
    CardImg, 
    CardHeader, 
    CardColumns,
    Button
} from 'reactstrap';

import { formatDateToString } from "../utility";
import projectData from "../projects.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function getMostRecentFromArray (array) {
    var sorted = array.sort(function(a, b) {
        var dateA = a.date, dateB = b.date;
        if( dateA < dateB)
            return 1;
        else 
            return -1;
    });

    if (sorted.length >= 0)
        return sorted[0];
    else
        return array[0];
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
        if(this.state.allProjects) {
            var featured = [];
            if (this.state.allProjects.games) {
                featured.push(getMostRecentFromArray(this.state.allProjects.games));
            }

            if (this.state.allProjects.web) {
                featured.push(getMostRecentFromArray(this.state.allProjects.web));
            }

            if (this.state.allProjects.other) {
                featured.push(getMostRecentFromArray(this.state.allProjects.other));
            }

            this.setState({
                featured: featured,
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Featured Work</h2>
                <p>Latest projects</p>
                <CardColumns>
                    {
                        this.state.featured && this.state.featured.map((value) => {
                            return (
                                <Card className="">
                                    <CardHeader><h4>{value.title}</h4></CardHeader>
                                    {
                                        value.assets.image && <CardImg top width="100%" src={value.assets.image}></CardImg>
                                    }
                                    {
                                        value.assets.video && <video className="w-100" controls>
                                                                <source src={process.env.PUBLIC_URL + value.assets.video} type="video/webm"/>
                                                            </video>
                                    }
                                    <CardBody>
                                            {
                                                value.short_description ? value.short_description : value.description
                                            }
                                    </CardBody>
                                    <CardFooter>
                                        <div className="d-flex">
                                            <div className="my-auto">
                                                { value.date && formatDateToString(value.date) }
                                            </div>
                                            <div className="ml-auto">
                                                {
                                                    value.links && value.links.github && 
                                                        <a href={value.links.github}>
                                                            <Button outline>
                                                                <FontAwesomeIcon icon={faGithub} />
                                                            </Button>
                                                        </a>
                                                }
                                                {
                                                    value.links && value.links.website &&
                                                        <a href={value.links.website} className="pl-2">
                                                            <Button outline>
                                                                <FontAwesomeIcon icon={faLink} />
                                                            </Button>
                                                        </a>
                                                }
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            )
                        })
                    }
                </CardColumns>
            </div>
        );
    }
}

export default Featured;