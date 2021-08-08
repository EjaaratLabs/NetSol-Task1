import React, { Component } from 'react';
import { Card, Col, Space, Modal, Button, Carousel } from 'antd';

const { Meta } = Card;
export default class FeedPostDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        var cardImg = []
        if (this.props.feedDetails) {
            this.props.feedDetails.imgList.forEach((val) => {
                cardImg.push(<div key={val.id + val.id + val.timestamp} >
                    <img alt="img" src={val.media_url} style={contentStyle} />
                </div>)
            })
        }
        return (
            <div style={{ width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <Carousel >
                        {cardImg}
                    </Carousel>
                </div>
                <p>{this.props.feedDetails ? this.props.feedDetails.details.caption : ""}</p>
                <p>{"Time: "}{this.props.feedDetails ? this.props.feedDetails.details.timestamp : ""}</p>
            </div>
        );
    }
}
const contentStyle = {
    maxHeight:"300px",
    marginLeft: "auto",
    marginRight: "auto",
};

