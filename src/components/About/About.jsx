import React, { Component } from 'react';
import { 
    Row,
    Col
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            about: props.about,
            coreSkills: props.coreSkills,
            tools: props.tools,
        };
    }

    render() {
        return (
            <div>
                <div>
                    <h2>About Me</h2>
                    <div className="ml-5">
                        <ReactMarkdown>
                            { this.state.about }
                        </ReactMarkdown>
                    </div>
                </div>
                <div className="py-4">
                    <h3>Skills/Experience</h3>
                    <Row>
                        <Col md={6} className="d-flex skill-column px-5">
                            <div>
                                <h4>Core</h4>
                                <h6 style={{ lineHeight: "1.75rem" }}>
                                    { 
                                        this.state.coreSkills && this.state.coreSkills.map((value, index) => {
                                            var str = index > 0 ? ', ' : '';
                                            return str + value;
                                        })
                                    }
                                </h6>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex skill-column px-5">
                            <div>
                                <h4>Tools</h4>
                                <h6 style={{ lineHeight: "1.75rem" }}>
                                    { 
                                        this.state.tools && this.state.tools.map((value, index) => {
                                            var str = index > 0 ? ', ' : '';
                                            return str + value;
                                        })
                                    }
                                </h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default About;