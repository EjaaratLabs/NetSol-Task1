import React, { Component } from 'react';
import { Card, Col, Space, Modal,   Button } from 'antd';

const { Meta } = Card;
export default class FeedPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
         
        }
    }
   

    render() {
        return (
            <Col lg={8} md={12} sm={22}  style={{ padding: "5px" }} >
                <div onClick={this.props.openDetails.bind(this,this.props.data)} style={{ width: "100%" }}>
                    <Card
                        hoverable
                        style={{ width: "100%" }}
                        cover={<img alt="img" src={this.props.data.media_url} />}
                    >
                        <Meta description={(this.props.data.caption ? this.props.data.caption : "") + "\n\n Time:" + this.props.data.timestamp} />
                    </Card>
                </div>
               

            </Col>
        );
    }
}

