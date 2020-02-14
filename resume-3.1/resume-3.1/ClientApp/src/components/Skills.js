import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Skills extends Component {

    render() {
        return (
            // skills page
            <Col lg="9" className="scrollable leftFrameDetached">
                <h1 className="intro">SKILLS</h1>
                <ul className="skillward-list">Languages and Technologies:
                                <li>C#, C++</li>
                    <li>HTML, CSS, Python, Javascript (Knockout.js, Angular.js, React.js)</li>
                    <li>GIT, UNIX shell, SQL</li>
                </ul>
                <ul className="skillward-list">Awards and Certifications:
                                <li>Boy Scouts of America Eagle Scout Rank</li>
                    <li>Cincinnatus Scholarship from the University of Cincinnati</li>
                    <li>Completion of Microsoft Exam 483: Programming in C#</li>
                </ul>
            </Col>
        );
    }
}