import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageLoader from 'react-load-image';

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
            companyName: "Fortech LLC - Co-op Web Developer",
            iconFilename: "FT.JPG",
            dateText: "August 2018 - Present",
            innerText: ["Developed Web Applications in ASP.NET CORE with MVC and React",
                "Learned and applied Knockout.js, Angular.js, React.js frameworks",
                "Developed C# backend controllers to interact with SQL Databases"]
        });
        rowstoset.push({
            companyName: "University of Cincinnati - Co-op Undergraduate Researcher",
            iconFilename: "UC.jpeg",
            dateText: "January 2018 - May 2018",
            innerText: ["Contributed to Dr. Phillip Wilsey's High-Performance Computing Lab",
                "Designed discrete event simulation to model networks of neurons (C++)"]
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
                        <ImageLoader src={"images/" + job.iconFilename}><img className="my-content-icons" alt="{Icon}"/></ImageLoader>
                        <div className="my-content-text">{job.dateText}
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