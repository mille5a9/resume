import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            content: [
                //about me page
                <div className="col span_6_of_12">
                    <h1 className="intro">ABOUT</h1>
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                    <br />
                    <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available using the buttons at the top, and you can reach me here:</p>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                        <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div >,

                //experience info
                <div className="col span_6_of_12">
                    <h1 className="intro">EXPERIENCE</h1>
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                        <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div >,

                //education info
                <div className="col span_6_of_12">
                    <h1 className="intro">EDUCATION</h1>
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                    <br />
                    <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available using the buttons at the top, and you can reach me here:</p>
                    <br />
                </div>,

                //skills / awards / etc
                <div className="col span_6_of_12">
                    <h1 className="intro">SKILLS</h1>
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                    <br />
                    <p>4</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available using the buttons at the top, and you can reach me here:</p>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                        <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div >,

                //project info
                <div className="col span_6_of_12">
                    <h1 className="intro">PROJECTS</h1>
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. For Engineering degrees at Cincinnati, we need to complete several terms of full time internships in between academic semesters. I've completed two such terms, one with the University and one with Fortech LLC in Cincinnati.</p>
                    <br />
                    <p>5</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available using the buttons at the top, and you can reach me here:</p>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                        <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div >
            ]
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll(event) {
        const delta = Math.sign(event.deltaY);
        var scrollvalue = this.state.scroll;
        scrollvalue += delta;
        if (scrollvalue === -1) scrollvalue = 4;
        else if (scrollvalue === 5) scrollvalue = 0;
        this.setState({ scroll: scrollvalue });
    }

    render() {
        var maincontent = this.state.content[this.state.scroll];
        return (
            <div className="tall topzerobottomzero">
                <div className="col span_1_of_12"/>
                {maincontent}
                <div className="col span_1_of_12 center fullheight"><div className="decorationline"/></div>
                <div className="col span_4_of_12">Menu Space</div>
           </div>
        );
  }
}
