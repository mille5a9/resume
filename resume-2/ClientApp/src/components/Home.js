import React, { Component } from 'react';

export class Home extends Component {
    displayName = Home.name
    constructor(props) {
        super(props);
        this.state = {
            scroll: 0,
            animation: "noanimation"
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick0 = this.handleClick0.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick4 = this.handleClick4.bind(this);
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
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
                    <p className="paragraph">I am currently working on my B.S. in Computer Engineering at the University of Cincinnati. During the course of my studies I have held several internship positions so that I may gain professional experience early in my career.</p>
                    <br />
                    <p>My hopes are to continue to pursue a career in the heart of technological developments. I am very interested in building upon my skills as a developer and software engineer. I am also interested in the design of computer components on the architectural level.</p>
                    <br />
                    <p>More information about myself, my accomplishments, and my qualifications is available on the following pages, and you can reach me here:</p>
                    <br />
                    <div className="col span_1_of_6"><br /><img className="headshot" src="./images/headshot.jpg" alt="(Headshot)" /></div>
                    <div className="col span_4_of_6">
                        <p><br />Andrew Miller<br />614-827-5168<br />andrew.mille5a9@outlook.com<br /><i className="fab fa-linkedin"></i> <a className="linkedin" href="https://www.linkedin.com/in/andrew-miller-aa20a8148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
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
            case 3: maincontent =
                //skills / awards / etc
                <div className={animation}>
                    <h1 className="intro">SKILLS + AWARDS</h1>
                    <p className="paragraph">(Skills Text)</p>
                </div>
                break;
            case 4: maincontent =
                //project info
                <div className={animation}>
                    <h1 className="intro">PROJECTS</h1>
                    <p className="paragraph">(Projects Text)</p>
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
