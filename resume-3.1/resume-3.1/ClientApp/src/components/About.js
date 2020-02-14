import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class About extends Component {

    render() {
        return (
            //about me page
            <Col lg="9" className="scrollable leftFrameDetached">
                <h1 className="intro">ABOUT</h1>
                <div className="paragraph about">
                    <p>I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. During the course of my studies I have held several internship positions so that I may gain professional experience early in my career.</p>
                    <br />
                    <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available on the following pages, and you can reach me here:</p>
                </div>
                <div><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                <div>
                    <p><br />Andrew Miller<br />614-827-5168<br />andrewm192@outlook.com<br /><i className="fab fa-linkedin"></i> <a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br /><a className="linkedin" href="/Andrew_Miller.pdf" target="_blank" rel="noopener noreferrer">PDF Resume</a></p>
                </div>
            </Col>
        );
    }
}
