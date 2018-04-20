import { Layout, Breadcrumb, Col, Row } from 'antd';
import React, { Component } from 'react';
import HeaderLayout from './HeaderLayout';
import SideBarLayout from './SideBarLayout';

const { Header, Content, Footer, Sider } = Layout;

class SPALayout extends Component {
    render() {
        return (
            <Layout>
                <Header>
                    <HeaderLayout />
                </Header>
                <Layout>
                    {/* <Sider collapsible={true} width={600} style={{ height: 100, background: '#00a000' }}>
                        <SideBarLayout />
                    </Sider>
                    <Layout width={300}> */}
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    {/* <Content style={{ background: '#a0e0a0' }}>
                        <Row gutter={8} style={{ background: '#ff0000' }}>
                            <Col span={2}>Col-2</Col>
                            <Col span={2}>Col-2Col-2Col-2Col-2Col-2Col-2Col-2Col-2</Col>
                            <Col span={20}>Col-22</Col>
                        </Row>
                    </Content> */}
                    {/* </Layout> */}
                </Layout >
            </Layout >
        );
    }
}

export default SPALayout;