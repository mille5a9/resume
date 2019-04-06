import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ImageLoader from 'react-load-image';

export class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        var rowstoset = [];
        rowstoset.push({
            schoolName: "University of Cincinnati - Cincinnati, Ohio",
            iconFilename: "UC.jpeg",
            dateText: "3.28 GPA: Graduating May 2021",
            innerText: ["Bachelor of Science, Computer Engineering",
                "Software Engineering, Data Structures, Programming in C#",
                "Computer Architecture, Digital Design"]
        });
        rowstoset.push({
            schoolName: "University of Cincinnati - Cincinnati, Ohio",
            iconFilename: "UC.jpeg",
            dateText: "4.0 GPA: Graduating May 2021",
            innerText: ["Master of Business Administration",
                "Foundations in Finance, Economics"]
        });
        rowstoset.push({
            schoolName: "Grove City High School - Grove City, Ohio",
            iconFilename: "GCHS.jpg",
            dateText: "Graduated June 2016",
            innerText: ["Top 25% of class", "AP Calculus I, AP Physics I & II"]
        });

        this.setState({
            rows: rowstoset
        });
    }

    render() {

        const rowstoset = this.state.rows;
        const content = rowstoset.map((school, i) =>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <div className="my-exp-module" key={i}>
                        <h1>{school.schoolName}</h1>
                        <ImageLoader src={"images/" + school.iconFilename}><img className="my-content-icons" alt="{Icon}"/></ImageLoader>
                        <div className="my-content-text">{school.dateText}
                            <ul>
                                {school.innerText.map((bullet, i) =>
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