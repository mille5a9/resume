import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        var rowstoset = [];
        rowstoset.push({
            moduleHeader: "Technical Skills",
            bullets: ["C#, C++, Python, MATLAB", "HTML, CSS, Javascript (Knockout, Angular, React)", "UNIX shell, GIT"]
        });
        rowstoset.push({
            moduleHeader: "Cincinnatus Scholarship",
            bullets: ["Recurring scholarship from UC", "Requires maintaining a 3.2 GPA, and fulfilling community service"]
        });
        rowstoset.push({
            moduleHeader: "Awards and Certifications",
            bullets: ["Eagle Scout Rank", "Passed Microsoft Exam 483: Programming in C#"]
        });

        this.setState({
            rows: rowstoset
        });
    }

    render() {

        const rowstoset = this.state.rows;
        const content = rowstoset.map((stuff, i) =>
            <Row className= "my-skills-row" key={i}>
                <Col sm={2}></Col>
                <Col sm={8}>
                    <div className="my-skills-module">
                        <h1>{stuff.moduleHeader}</h1>
                        <div className="my-content-text">
                            <ul>
                                {stuff.bullets.map((bullet, i) =>
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

        return <div className="my-exp-page">{content}</div>;
    }
}