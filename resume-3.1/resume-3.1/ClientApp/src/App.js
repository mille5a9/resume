import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { About } from './components/About.js';
import { Experience } from './components/Experience.js';
import { Education } from './components/Education.js';
import { Skills } from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { DecoLine } from './components/DecoLine.js';
import { Menu } from './components/Menu.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './legacy.css'

export default class App extends Component {
    static displayName = App.name;
    constructor(props) {
        super(props);
        this.state = {
            subsection: 0
        }
        this.handleSubsectionChange = this.handleSubsectionChange.bind(this);
    }

    handleSubsectionChange(key) {
        this.setState({
            subsection: key
        });
    }

    render() {
        const displayState = this.state.subsection;
        var contentToDisplay = <div></div>;
        switch (displayState) {
            case 0: contentToDisplay = <About />
                break;
            case 1: contentToDisplay = <Experience />
                break;
            case 2: contentToDisplay = <Education />
                break;
            case 3: contentToDisplay = <Skills />
                break;
            case 4: contentToDisplay = <Projects />
                break;
        }

        return (
            <div className="frame">
                <Row>
                    {contentToDisplay}
                    <DecoLine />
                    <Menu onClick={(key) => this.handleSubsectionChange(key)}/>
                </Row>
            </div>
        );
    }
}
