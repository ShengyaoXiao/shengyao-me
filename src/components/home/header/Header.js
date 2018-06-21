import React, {Component} from 'react';

import threeEntryPoint from './threejs/threeEntryPoints';
import "./header.css";

export default class Header extends Component {
    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render() {
        return (
            <div className="header-header" ref={element => this.threeRootElement=element} />
        );
    }
}