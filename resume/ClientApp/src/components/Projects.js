import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        var projectstoset = [];
        projectstoset.push({
            name: "Github Repository",
            innerText: ["Collection of Independent Coding Projects", "Click this box to see the Repository"],
            url: "https://www.github.com/mille5a9/charmed"
        });
        projectstoset.push({
            name: "ETH Mining Machine",
            innerText: ["Built Linux Machine on specialized distribution \"ethOS\"", "Runs five Radeon RX 580 GPUs for mining on the Ethereum Blockchain", "Click this box to see pictures from the original assembly"],
            url: "https://imgur.com/a/TgWri0K"
        });
        projectstoset.push({
            name: "Non-Pipelined Control Unit",
            innerText: ["Project for \"Introduction to Computer Organization and Architecture\"", "Required gate-level implementation of a non-pipelined 16-bit control unit", "Click this box to see the final report"],
            url: "/Project3.pdf"
        });

        this.setState({
            projects: projectstoset
        });
    }

    render() {
        const projectstoset = this.state.projects;
        const content = projectstoset.map((project, i) =>
            <Row className="my-projects-row">
                <a class="my-projects-link" href={project.url} target="_blank">
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <div className="my-projects-module" key={i}>
                            <h1>{project.name}</h1>
                            <div className="my-content-text">
                                <ul>
                                    {project.innerText.map((bullet, i) =>
                                        <li key={i}>
                                            {bullet}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                    </a>
            </Row>
        );

        return (
            <div className="my-exp-page">
                {content}
            </div>
        );
    }
}