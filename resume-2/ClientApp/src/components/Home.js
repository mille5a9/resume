import React, { Component } from 'react';
import Switch from "react-switch";

export class Home extends Component {
    displayName = Home.name
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            checked: false,
            animation: "noanimation"
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick0 = this.handleClick0.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
        document.title = "Andrew Miller"
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    handleToggle(e) {
        this.setState({ isOn: !this.state.isOn });
    }

    handleScroll(event) {
        const delta = Math.sign(event.deltaY);
        const inanimations = ["downslidein", "noanimation", "upslidein"];
        const outanimations = ["downslideout", "noanimation", "upslideout"];
        var scrollvalue = this.state.scroll;
        scrollvalue += delta;
        if (scrollvalue === -1) scrollvalue = 4;
        else if (scrollvalue === 5) scrollvalue = 0;
        this.setState({
            animation: outanimations[delta + 1]
        })
        setTimeout(() => {
            this.setState({
                scroll: scrollvalue,
                animation: inanimations[delta + 1]
            });
        }, 200);

    }

    // nothing to see here, move along
    handleClick0(event) {
        this.setState({
            scroll: 0
        });
    }
    handleClick1(event) {
        this.setState({
            scroll: 1
        });
    }
    handleClick2(event) {
        this.setState({
            scroll: 2
        });
    }
    handleClick3(event) {
        this.setState({
            scroll: 3
        });
    }
    handleClick4(event) {
        this.setState({
            scroll: 4
        });
    }
    handleChange(checked) {
        this.setState({
            checked
        });
        //setTimeout(this.setState({ fade: "nofade" }), 1000);
    }

    render() {
        var maincontent = <div></div>;
        const animation = "col span_8_of_12 " + this.state.animation;
        var scroll = this.state.scroll;
        var menuspaceselect = ["", "", "", "", ""];
        menuspaceselect[scroll] = " menuselected";
        var menuspace =
            <div className="col span_3_of_12 menuliststart body-right">
                <div className={"menulist" + menuspaceselect[0]} onClick={this.handleClick0}>About</div>
                <div className={"menulist" + menuspaceselect[1]} onClick={this.handleClick1}>Experience</div>
                <div className={"menulist" + menuspaceselect[2]} onClick={this.handleClick2}>Education</div>
                <div className={"menulist" + menuspaceselect[3]} onClick={this.handleClick3}>Skills</div>
                <div className={"menulist" + menuspaceselect[4]} onClick={this.handleClick4}>Projects</div>
            </div>;
        switch (scroll) {
            case 0: maincontent =
                //about me page
                <div className={animation}>
                    
                    <h1 className="intro">ABOUT</h1>
                    <div className="paragraph about">
                        <p>I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. During the course of my studies I have held several internship positions so that I may gain professional experience early in my career.</p>
                        <br />
                        <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                        <br />
                        <p>More information about myself, my accomplishments, and my qualifications is available on the following pages, and you can reach me here:</p>
                    </div>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                    <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><i className="fab fa-linkedin"></i> <a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a><br /><a className="linkedin" href="/Andrew_Miller.pdf" target="_blank" rel="noopener noreferrer">PDF Resume</a></p>
                    </div>
                </div>;
                break;
            case 1: maincontent =
                //experience info
                <div className={animation}>

                    <h1 className="intro">EXPERIENCE</h1>
                    <div className="col span_5_of_5">
                        <div className="col span_1_of_7"><img className="exp-img" src="./images/HQFT.jpeg" alt="(Fortech Logo)"/></div>
                        <div className="col span_5_of_9">
                            <p className="paragraph">Fortech LLC - Web Development Co-op</p>
                            <ul className="description">
                                <li>Developed Web Applications in .NET with MVC modelling and React.js</li>
                                <li>Learned and applied Knockout.js, Angular.js, React.js frameworks</li>
                                <li>Developed C# backend controllers to interact with SQL Databases</li>
                            </ul>
                        </div>
                        <div className="col span_1_of_4 ta-right"><br /><p className="paragraph">Aug 2018 - Jan 2019</p><p>May 2019 - Aug 2019</p></div>
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

                </div>
                break;
            case 2: maincontent =
                //education info
                <div className={animation}>

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

                </div>
                break;
            case 3:

                var skillscontent = <div></div>;
                switch (this.state.checked) {
                    case false:
                        skillscontent =
                            (<ul className="skillward-list">Languages and Technologies:
                                <li>C#, C++</li>
                                <li>HTML, CSS, Python, Javascript (Knockout.js, Angular.js, React.js)</li>
                                <li>GIT, UNIX shell, SQL</li>
                            </ul>);

                        break;
                    case true:
                        skillscontent =
                            (<ul className="skillward-list">Awards and Certifications:
                                <li>Boy Scouts of America Eagle Scout Rank</li>
                                <li>Cincinnatus Scholarship from the University of Cincinnati</li>
                                <li>Completion of Microsoft Exam 483: Programming in C#</li>
                            </ul>);
                }

                maincontent =
                //skills / awards / etc
                <div className={animation}>
                    <div className="intro skill-letter">
                        Skills&emsp;
                        <Switch
                            onChange={this.handleChange}
                            checked={this.state.checked}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            height={25}
                            width={50}
                            offColor={'#C00018'}
                            onColor={'#C00018'}
                            activeBoxShadow={'0 0 2px 3px #000'}
                        ></Switch>&emsp;Awards
                    </div>
                    <div className="col span_5_of_5">
                        {skillscontent}
                    </div>
                </div>
                break;
            case 4: maincontent =
                //project info
                <div className={animation}>
                    <h1 className="intro">PROJECTS</h1>
                    <ul className="project-list about"><a className="projectlink" href="https://github.com/mille5a9/charmed" target="_blank">Personal Projects on Github</a>
                        <li>Collection of Coding Projects</li>
                        <li>Majority written in C#</li>
                        <li>Helped to prepare for Microsoft C# Examination</li>
                    </ul>
                    <ul className="project-list about"><a className="projectlink" href="https://imgur.com/a/TgWri0K" target="_blank">Ether Mining Machine</a>
                        <li>Built Linux Machine on specialized distribution "ethOS"</li>
                        <li>Runs five Radeon RX 580 GPUs for "mining" on the Ethereum Blockchain</li>
                        <li>Measured and cut wooden frame for DIY assembly</li>
                    </ul>
                    <ul className="project-list about"><a className="projectlink" href="https://docs.google.com/document/d/1bcv9Ou-DgXZBWiyrkb1ShN8PHP-Z5W9DSRH1IuGdafI/edit?usp=sharing" target="_blank">Non-Pipelined Control Unit</a>
                        <li>Computer Organization Class Project done independently</li>
                        <li>Tasked with creating a Non-Pipelined Control Unit for a CPU with a given 16-bit instruction set</li>
                        <li>Required gate-level implementation of Control Unit and all other modules not directly related to main memory or the timeout mechanism</li>
                    </ul>
                    <ul className="project-list about"><a className="projectlink" href="https://seeandrewmiller.com" target="_blank">This Website</a>
                        <li>Constructed with React.js and the Responsive Grid System (<a className="projectlink" href="http://www.responsivegridsystem.com/" target="_blank">http://www.responsivegridsystem.com/</a>)</li>
                        <li>Hosted with IIS in an AWS Lightsail Instance</li>
                    </ul>
                </div>
                break;
        }
        return (
            <div className="tall topzerobottomzero">
                {maincontent}
                <div className="col span_1_of_12 center fullheight body-right"><div className="decorationline" /></div>
                {menuspace}
           </div>
        );
  }
}
