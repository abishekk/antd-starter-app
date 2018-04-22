import { Affix, Col, Row } from 'antd';
import React, { Component } from 'react';

class SideBarLayout extends Component {
    render() {
        return (
            <Affix offsetTop={16}>
                <Row>
                    <Col span={20}>
                        <div>
                            abcdefghij
                            klmnopqurs
                            tabcdefghi
                            jklmnopqur
                        </div>
                    </Col>
                </Row>
            </Affix>
        );
    }
}

export default SideBarLayout;
