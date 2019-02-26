import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import ImageLoader from 'react-load-image';

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
            iconFilename: "Tech.jpg",
            bullets: ["C#, C++, Python, MATLAB", "HTML, CSS, Javascript (Knockout, Angular, React)", "UNIX shell, GIT"]
        });
        rowstoset.push({
            moduleHeader: "Cincinnatus Scholarship",
            iconFilename: "Cin.png",
            bullets: ["Recurring scholarship from UC", "Requires maintaining a 3.2 GPA, and fulfilling community service"]
        });
        rowstoset.push({
            moduleHeader: "Awards and Certifications",
            iconFilename: "eagle.png",
            bullets: ["Eagle Scout Rank", "Passed Microsoft Exam 483: Programming in C#"]
        });

        this.setState({
            rows: rowstoset
        });
    }

    render() {

        const rowstoset = this.state.rows;
        const content = rowstoset.map((stuff, i) =>
            <Row>
                <Col sm={i % 2 == 0 ? 2 : 6}></Col>
                <Col sm={4}>
                    <div className="my-expert-module" key={i}>
                        <h1>{stuff.moduleHeader}</h1>
                        <ImageLoader src={"images/" + stuff.iconFilename}><img className={i % 2 == 0 ? "my-expert-icons-left" : "my-expert-icons-right"} /></ImageLoader>
                        <div className="my-expert-text">
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
                <Col sm={i % 2 == 0 ? 6 : 2}></Col>
            </Row>
        );

        return <div className="my-exp-page">{content}</div>;
    }
}