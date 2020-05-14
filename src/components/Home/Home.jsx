import React, { Component } from 'react';
import { 
    Container,
} from 'reactstrap';

import Featured from "../Featured";
import Introduction from '../Introduction';
import About from "../About";
import "./Home.css";
import portfolioData from "../../data/portfolio.json";

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
            <div>
                <header className="page-header px-5 mb-5">
                    <Container>
                        <Introduction />
                    </Container>
                </header>
                
                <section className="p-5 my-5 alternative-section" id="about">
                    <Container>
                        <About 
                            about={this.state.data?.about} 
                            coreSkills={this.state.data?.skills?.core} 
                            tools={this.state.data?.skills?.tools}
                            />
                    </Container>
                </section>

                <section className="p-5 my-5 " id="featured">
                    <Container>
                        <Featured />
                    </Container>
                </section>

                <section className="p-5 my-5 alternative-section" id="contact">
                    <Container>
                        <Contact twitterLink={this.state.data.links.twitter}/>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;