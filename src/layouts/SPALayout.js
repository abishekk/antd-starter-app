import { Layout, Breadcrumb, Col, Row } from 'antd';
import React, { Component } from 'react';
import HeaderLayout from './HeaderLayout';
import SideBarLayout from './SideBarLayout';
import './SPALayout.css';

const { Header, Content, Footer, Sider } = Layout;

class SPALayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderLayout />
                <Layout>
                    <Sider breakpoint="lg" collapsible={true} collapsedWidth={0} style={{ background: '#00a000' }}>
                        <SideBarLayout />
                    </Sider>
                    <Content className="Content">
                        <Breadcrumb>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Row gutter={8} style={{ background: '#ff0000' }}>
                            <Col span={2}>Col-2</Col>
                            <Col span={2}>Col-2Col-2Col-2Col-2Col-2Col-2Col-2Col-2</Col>
                            <Col span={20}>Col-22</Col>
                        </Row>
                    </Content>
                    <Sider collapsible={true} trigger={null} width={200} style={{ height: 100, background: '#00a000' }}>
                        <SideBarLayout />
                    </Sider>
                </Layout>
            </Layout >
        );
    }
}

export default SPALayout;