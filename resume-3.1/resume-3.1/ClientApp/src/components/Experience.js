import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Experience extends Component {
    render() {
        return (
            // experience page
            <Col lg="9" className="scrollable leftFrameDetached">
                <h1 className="intro">EXPERIENCE</h1>
                <div>
                    <div><img className="exp-img" src="./images/HQFT.jpeg" alt="(Fortech Logo)" /></div>
                    <div>
                        <p className="paragraph">Fortech LLC - Web Development Co-op</p>
                        <ul className="description">
                            <li>Developed Web Applications in .NET with MVC modelling and React.js</li>
                            <li>Learned and applied Knockout.js, Angular.js, React.js frameworks</li>
                            <li>Developed C# backend controllers to interact with SQL Databases</li>
                        </ul>
                    </div>
                    <div className="ta-right"><br /><p className="paragraph">Aug 2018 - Jan 2019</p><p>May 2019 - Aug 2019</p></div>
                </div>

                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQUC.jpeg" alt="(U of Cincinnati Logo)" /></div>
                    <div className="col span_4_of_7">
                        <p className="paragraph">University of Cincinnati - Undergraduate Researcher</p>
                        <ul className="description">
                            <li>Contributed to Dr. Phillip Wilsey's High-Performance Computing Lab</li>
                            <li>Designed discrete event simulation to model networks of neurons (C++)</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Jan 2018 - May 2018</p></div>
                </div>
                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQUC.jpeg" alt="(U of Cincinnati Logo)" /></div>
                    <div className="col span_4_of_7">
                        <p className="paragraph">University of Cincinnati - Undergraduate Researcher</p>
                        <ul className="description">
                            <li>Contributed to Dr. Phillip Wilsey's High-Performance Computing Lab</li>
                            <li>Designed discrete event simulation to model networks of neurons (C++)</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Jan 2018 - May 2018</p></div>
                </div>
                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQUC.jpeg" alt="(U of Cincinnati Logo)" /></div>
                    <div className="col span_4_of_7">
                        <p className="paragraph">University of Cincinnati - Undergraduate Researcher</p>
                        <ul className="description">
                            <li>Contributed to Dr. Phillip Wilsey's High-Performance Computing Lab</li>
                            <li>Designed discrete event simulation to model networks of neurons (C++)</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Jan 2018 - May 2018</p></div>
                </div>
                <div className="col span_5_of_5">
                    <div className="col span_1_of_7"><img className="exp-img" src="./images/HQUC.jpeg" alt="(U of Cincinnati Logo)" /></div>
                    <div className="col span_4_of_7">
                        <p className="paragraph">University of Cincinnati - Undergraduate Researcher</p>
                        <ul className="description">
                            <li>Contributed to Dr. Phillip Wilsey's High-Performance Computing Lab</li>
                            <li>Designed discrete event simulation to model networks of neurons (C++)</li>
                        </ul>
                    </div>
                    <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Jan 2018 - May 2018</p></div>
                </div>
            </Col>
        );
    }
}