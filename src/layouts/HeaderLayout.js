import { Row, Col, Icon, Menu, Layout } from 'antd';
import React, { Component } from 'react';
import AutoScale from 'react-auto-scale';
import haLogo from '../ha-icon.png';
import './HeaderLayout.css';

const { Header, Content, Footer, Sider } = Layout;

class HeaderLayout extends Component {
    render() {
        return (
            // <div className="logo" />
            // <Menu
            //     theme="dark"
            //     mode="horizontal"
            //     defaultSelectedKeys={['2']}
            //     style={{ lineHeight: '36px' }}
            // >
            //     <Menu.Item key="1">nav 1</Menu.Item>
            //     <Menu.Item key="2">nav 2</Menu.Item>
            //     <Menu.Item key="3">nav 17</Menu.Item>
            // </Menu>
            <Header className="Header" hasSider={true} >
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={10}>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={2} justify="right">
                        <div className="Header-icon"> <Icon type="notification" /> <Icon type="user" /> <Icon type="setting" /> </div>
                    </Col>
                </Row>
            </Header>
            //             <Row style={{ height: '2px' }}>
            //                 <Col>
            //                     abishek
            // {/*                 
            //                     <AutoScale><img src={haLogo} alt="AH" />
            //                     </AutoScale> */}
            //                 </Col>
            //                 <Col>Abi and Harini</Col>
            //                 <Col><h1> hello </h1></Col>
            //             </Row>
        );
    }
}

export default HeaderLayout;
