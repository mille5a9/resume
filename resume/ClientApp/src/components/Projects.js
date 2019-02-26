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
            innerText: ["Collection of Independent Coding Projects", "Click here to see Repository"],
            url: "https://www.github.com/mille5a9/charmed"
        });
        projectstoset.push({
            name: "ETH Mining Machine",
            innerText: ["Built Linux Machine on specialized distribution \"ethOS\"", "Runs five high-end GPUs for mining on the Ethereum Blockchain"]
        });

        this.setState({
            projects: projectstoset
        });
    }

    render() {
        const projectstoset = this.state.projects;
        const content = projectstoset.map((project, i) =>
            <Row>
                <a class="my-projects-link" href={project.url} target="_blank">
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <div className="my-exp-module" key={i}>
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