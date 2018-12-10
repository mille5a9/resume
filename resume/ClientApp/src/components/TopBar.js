import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

export class TopBar extends Component {

    render() {
        return (
            <div className="my-nav-menu">
                <h1 className="my-name-animation">
                    <Col sm={2}><Link className="my-nav-btn" to="/">Andrew Miller</Link></Col>
                    <Col sm={1}><Link className="my-nav-btn" to="/experience">Experience</Link></Col>
                    <Col sm={1}><Link className="my-nav-btn" to="/education">Education</Link></Col>
                    <Col sm={1}><Link className="my-nav-btn" to="/expertise">Expertise</Link></Col>
                    <Col sm={1}><Link className="my-nav-btn" to="/evidence">Evidence</Link></Col>
                </h1>
            </div>
        );
    }
}