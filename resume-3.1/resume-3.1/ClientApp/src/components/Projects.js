import React, { Component } from 'react';
import { Col } from 'reactstrap';
import TreeMenu from 'react-simple-tree-menu';

export class Projects extends Component {

    render() {
        const treeData = [
            {
                key: 'first-level-node-1',
                label: 'Personal Projects on Github',
                nodes: [
                    {
                        key: 'second-level-node-1',
                        label: 'Collection of Coding Projects'
                    },
                    {
                        key: 'second-level-node-2',
                        label: 'Majority written in C#'
                    },
                    {
                        key: 'second-level-node-3',
                        label: 'Helped to prepare for Microsoft C# Examination'
                    },
                ],
            },
            {
                key: 'first-level-node-2',
                label: 'Node 2 at the first level',
                nodes: [
                    {
                        key: 'second-level-node-1',
                        label: 'Collection of Coding Projects'
                    },
                    {
                        key: 'second-level-node-2',
                        label: 'Majority written in C#'
                    },
                    {
                        key: 'second-level-node-3',
                        label: 'Helped to prepare for Microsoft C# Examination'
                    },
                ],
            },
        ];

        return (
            // projects page
            <Col lg="9" className="scrollable leftFrameDetached projects-list">
                <h1 className="intro">PROJECTS</h1>
                
                <TreeMenu data={treeData}
                    debounceTime={125}
                    disableKeyboard={false}
                    hasSearch
                    onClickItem={function noRefCheck() { }}
                    resetOpenNodesOnDataUpdate={false}
                />
            </Col>
        );
    }
}


//<ul className="project-list about"><a className="projectlink" href="https://github.com/mille5a9/charmed" target="_blank">Personal Projects on Github</a>
//    <li>Collection of Coding Projects</li>
//    <li>Majority written in C#</li>
//    <li>Helped to prepare for Microsoft C# Examination</li>
//</ul>
//    <ul className="project-list about"><a className="projectlink" href="https://imgur.com/a/TgWri0K" target="_blank">Ether Mining Machine</a>
//        <li>Built Linux machine running specialized distribution "ethOS"</li>
//        <li>Runs five Radeon RX 580 GPUs for "mining" on the Ethereum Blockchain</li>
//        <li>Measured and cut wooden frame for DIY assembly</li>
//    </ul>
//    <ul className="project-list about"><a className="projectlink" href="https://docs.google.com/document/d/1bcv9Ou-DgXZBWiyrkb1ShN8PHP-Z5W9DSRH1IuGdafI/edit?usp=sharing" target="_blank">Non-Pipelined Control Unit</a>
//        <li>Computer Organization class project done independently</li>
//        <li>Tasked with creating a Non-Pipelined Control Unit for a CPU with a given 16-bit instruction set</li>
//        <li>Required gate-level implementation of Control Unit and all other modules not directly related to main memory or the timeout mechanism</li>
//    </ul>
//    <ul className="project-list about"><a className="projectlink" href="https://seeandrewmiller.com" target="_blank">This Website</a>
//        <li>Constructed with React.js and the Responsive Grid System (<a className="projectlink" href="http://www.responsivegridsystem.com/" target="_blank">http://www.responsivegridsystem.com/</a>)</li>
//        <li>Previously hosted with IIS in an AWS Lightsail instance</li>
//        <li>Now hosted at home on a Raspberry Pi and made available with Dynamic DNS</li>
//    </ul>