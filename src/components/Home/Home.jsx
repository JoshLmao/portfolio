import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Projects from "../Projects";
import "./Home.css";

import { TWITTER_LINK } from "../../config";

function AboutMe() {
    return (
        <div>
            <h2>About Me</h2>
            <div className="ml-5">
                <p>Hi! My name is Josh and I love coding, music and video games. I've been programming since I started learning in 2015 and have always had a massive interest in playing and creating video games. I'm a big fan of open source coding and making the things I create available to people for free.</p>
            </div>
        </div>
    );
}

// function Skills() {
//     return (
//         <div className="d-flex">
//             <h2>Skills</h2>
//             <div>

//             </div>
//         </div>
//     );
// }

function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <p>If you wish to get in touch with me about my projects, my work or anything else, send me an email: josh_shepherd@outlook.com
                <br /><br />
                However, if you have a question or require anything informal like help, drop me a message on Twitter as I can reply a lot quicker!
                <br />
                <a href={TWITTER_LINK}>@JoshLmao</a>
            </p>
        </div>
    );
}

class Home extends Component {
    render() {
        return (
            <Container>
                <header className="page-header px-5 mb-5">
                    <h1>Welcome!</h1>
                    <h4>My name is <span>Josh Shepherd</span>, a passionate and experienced games developer</h4>
                </header>
                
                <section className="px-5 mb-5">
                    <AboutMe />
                </section>
                
                {/* <section className="px-5 mb-5">
                    <Skills />
                </section> */}

                <section className="px-5 mb-5">
                    <Projects />
                </section>

                <section className="px-5 mb-5">
                    <Contact />
                </section>
            </Container>
        );
    }
}

export default Home;