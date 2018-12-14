import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        var rowstoset = [];
        rowstoset.push({
            companyName: "Fortech LLC - 8854 Brookside Ave, West Chester, OH 45069",
            iconFilename: "FT.JPG",
            dateText: "August 2018 - Present",
            positionLine: "Co-op Web Developer",
            innerText: ["responsibility 1", "responsibility 2", "responsibility 3"]
        });
        rowstoset.push({
            companyName: "University of Cincinnati - 2600 Clifton Ave, Cincinnati, OH 45220",
            iconFilename: "UC.jpeg",
            dateText: "January 2018 - May 2018",
            positionLine: "Co-op Undergraduate Researcher",
            innerText: ["responsibility 1", "responsibility 2", "responsibility 3"]
        });

        this.setState({
            rows: rowstoset
        });
    }

    render() {

        const rowstoset = this.state.rows;
        const content = rowstoset.map((job, i) =>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <div className="my-exp-module" key={i}>
                        <h1>{job.companyName}</h1>
                        <img src={"images/" + job.iconFilename} className="my-content-icons"></img>
                        <div className="my-content-text">{job.positionLine} - {job.dateText}
                            <ul>
                                {job.innerText.map((bullet, i) =>
                                    <li key={i}>
                                        {bullet}
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col sm={2}></Col>
            </Row>
            );

        return (
            <div className="my-exp-page">
                {content}
            </div>
        );
    }
}