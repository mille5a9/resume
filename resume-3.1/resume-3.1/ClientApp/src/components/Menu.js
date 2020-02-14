import React, { Component } from 'react';
import { Button, Col } from 'reactstrap';

export class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [{ name: "About", id: 0 },
                { name: "Experience", id: 1 },
                { name: "Education", id: 2 },
                { name: "Skills", id: 3 },
                { name: "Projects", id: 4 }]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.props.onClick(id);
    }

    render() {
        var buttons = this.state.buttons;
        const mappedButtons = buttons.map((btn) =>
            <Button className="menuButton" onClick={() => this.handleClick(btn.id)}>{btn.name}</Button>
        );
        return (
            <Col lg="2" className="menuliststart body-right">
                {mappedButtons}
            </Col>
        );
    }
}