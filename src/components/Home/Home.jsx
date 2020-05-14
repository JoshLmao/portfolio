import React, { Component } from 'react';
import { 
    Container,
    Row,
    Col
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

import Featured from "../Featured";
import Introduction from '../Introduction';
import "./Home.css";
import portfolioData from "../../data/portfolio.json";

function AboutMe(props) {
    return (
        <div>
            <h2>About Me</h2>
            <div className="ml-5">
                <ReactMarkdown>
                    { props.about }
                </ReactMarkdown>
            </div>
        </div>
    );
}

function Skills(props) {
    return (
        <div>
            <h2>Skills/Experience</h2>
            <Row>
                <Col md={6} className="d-flex skill-column px-5">
                    <div>
                        <h4>Core</h4>
                        <h6>C#, C++, Python, Javascript</h6>
                        <h6>.NET Framework</h6>
                        <h6>Object Oriented Programming (OOP)</h6>
                    </div>
                </Col>
                <Col md={6} className="d-flex skill-column px-5">
                    <div>
                        <h4>Tools</h4>
                        <h6>Unreal Engine, Unity, React, NodeJS, Node Package Manager (NPM)</h6>
                        <h6>WPF, Xamarin</h6>
                        <h6>Git, Agile, GitKraken</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

function Contact(props) {
    return (
        <div>
            <h2>Contact</h2>
            <p>If you wish to get in touch with me about my projects, my work or anything else, send me an email: josh_shepherd@outlook.com
                <br /><br />
                However, if you have a question or require anything informal like help, drop me a message on Twitter as I can reply a lot quicker!
                <br />
                <a href={props.twitterLink}>@JoshLmao</a>
            </p>
        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: portfolioData,
        };
    }
    render() {
        return (
            <Container>
                <header className="page-header px-5 mb-5">
                    <Introduction />
                </header>
                
                <section className="p-5 my-5" id="about">
                    <AboutMe about={this.state.data?.about} />
                </section>
                
                <section className="px-5 mb-5" id="skills">
                    <Skills />
                </section>

                <section className="p-5 my-5" id="featured">
                    <Featured />
                </section>

                <section className="p-5 my-5" id="contact">
                    <Contact twitterLink={this.state.data.links.twitter}/>
                </section>
            </Container>
        );
    }
}

export default Home;