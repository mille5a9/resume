import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class Home extends Component {
  displayName = Home.name

  render() {
    return (
        <div>
            <Col sm={2}></Col>
            <Col className="page-text" sm={8}>
                <p><br/></p>
                <h1>I'm Andrew, and here is what I am all about.</h1>
                <p><br/>I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                <p>More information about myself, my accomplishments, and my qualifications is available using the buttons at the top, and you can reach me here:</p>
                <p className="page-text-contact"><br/>Andrew Miller<br/>614-827-5168<br/>andrew.mille5a9@outlook.com<br /><a class="my-nav-btn" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank">LinkedIn</a></p>
            </Col>
            <Col sm={2}></Col>
        </div>
    );
  }
}
