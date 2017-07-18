import React from 'react';
import ReactDOM from 'react-dom';
import enquire from 'enquire.js';
import {scrollScreen} from 'rc-scroll-anim';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Footer from './Footer';

import './less/antMotion_style.less';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMode: false
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        this.enquireScreen((isMode) => {
            this.setState({isMode});
        });
    }

    enquireScreen = (cb) => {
        /* eslint-disable no-unused-expressions */
        enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
            match: () => {
                cb && cb(true);
            },
            unmatch: () => {
                cb && cb();
            },
        });
        /* eslint-enable no-unused-expressions */
    }

    render() {
        const children = [
            <Nav id="nav_0_0" key="nav_0_0" isMode={this.state.isMode}/>,
            <Content0 id="content_0_0" key="content_0_0" isMode={this.state.isMode}/>,
            <Content1 id="content_2_0" key="content_2_0" isMode={this.state.isMode}/>,
            <Content2 id="content_3_0" key="content_3_0" isMode={this.state.isMode}/>,
            <Content3 id="content_4_0" key="content_4_0" isMode={this.state.isMode}/>,
            <Footer id="footer_0_0" key="footer_0_0" isMode={this.state.isMode}/>,
        ];
        return (
            <div className="templates-wrapper">
                {children}
            </div>
        );
    }
}
