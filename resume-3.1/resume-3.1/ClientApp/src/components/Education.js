import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Education extends Component {

    render() {
        return (
            // education page
            <Col lg="9" className="scrollable leftFrameDetached">
                <h1 className="intro">EDUCATION</h1>
                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQUC.jpeg" alt="(U of Cincinnati Logo)" /></div>
                    <div className="col span_5_of_9">
                        <p className="paragraph">University of Cincinnati - Cincinnati, OH</p>
                        <ul className="description">
                            <li>Bachelor of Science, Computer Engineering</li>
                            <li>Software Engineering, Data Structures, Programming in C#</li>
                            <li>Computer Architecture, Digital Design</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Class of 2021</p><p>3.2 GPA</p></div>
                </div>

                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQGC.png" alt="(GCHS Logo)" /></div>
                    <div className="col span_4_of_7">
                        <p className="paragraph">Grove City High School - Grove City, OH</p>
                        <ul className="description">
                            <li>Top 25% of class</li>
                            <li>AP Calculus I, AP Physics I & II</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Class of 2016</p></div>
                </div>
            </Col>
        );
    }
}