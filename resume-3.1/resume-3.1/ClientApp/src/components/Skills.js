import React, { Component } from 'react';
import { Col } from 'reactstrap';
import TreeMenu from 'react-simple-tree-menu';

//export class Skills extends Component {

//    render() {
//        return (
//            // skills page
//            <Col lg="9" className="scrollable leftFrameDetached">
//                <h1 className="intro">SKILLS</h1>
//                <ul className="skillward-list">Languages and Technologies:
//                                <li>C#, C++</li>
//                    <li>HTML, CSS, Python, Javascript (Knockout.js, Angular.js, React.js)</li>
//                    <li>GIT, UNIX shell, SQL</li>
//                </ul>
//                <ul className="skillward-list">Awards and Certifications:
//                                <li>Boy Scouts of America Eagle Scout Rank</li>
//                    <li>Cincinnatus Scholarship from the University of Cincinnati</li>
//                    <li>Completion of Microsoft Exam 483: Programming in C#</li>
//                </ul>
//            </Col>
//        );
//    }
//}

export class Skills extends Component {

    render() {
        const treeData = [
            {
                key: 'first-level-node-1',
                label: 'Languages and Technologies:',
                nodes: [
                    {
                        key: 'second-level-node-1',
                        label: 'HTML, CSS, Python, Javascript (Knockout.js, Angular.js, React.js)'
                    },
                    {
                        key: 'second-level-node-2',
                        label: 'GIT, UNIX shell, SQL'
                    },
                ],
            },
            {
                key: 'first-level-node-2',
                label: 'Awards and Certifications:',
                nodes: [
                    {
                        key: 'second-level-node-1',
                        label: 'Boy Scouts of America Eagle Scout Rank'
                    },
                    {
                        key: 'second-level-node-2',
                        label: 'Cincinnatus Scholarship from the University of Cincinnati'
                    },
                    {
                        key: 'second-level-node-3',
                        label: 'Completion of Microsoft Exam 483: Programming in C#'
                    },
                ],
            },
        ];

        return (
            // skills page
            <Col lg="9" className="scrollable leftFrameDetached projects-list">
                <h1 className="intro">Skills</h1>

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