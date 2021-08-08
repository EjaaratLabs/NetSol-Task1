import React, { Component } from 'react';
import { Row, Layout, Modal, Button, Carousel } from 'antd';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { Link } from "@react-navigation/web";
import FeedPost from './Common Components/FeedPost';
import FeedPostDetails from './Common Components/FeedPostDetails';
const { Content } = Layout;

export default class FeedComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            feed: [],
            isModalVisible: false
        }
    }

    componentDidMount() {
        if (this.props.token) { this.props.generateFeed(this.props.token); }
        else {
            this.props.navigation.navigate('Login')
        }
    }
    componentDidUpdate() {

    }
    toggleModal = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }
    openDetails = (data) => {
        if (data.media_type == 'CAROUSEL_ALBUM') {
            this.props.fetchAlbumDetails(this.props.token, data)
        }
        else { this.props.setImageDetails(data) };


        this.toggleModal()
    }
    fetchNext = () => {
        this.props.generateNext(this.props.fetchNext);
    }
    render() {
        var cards = []
        this.props.feed.forEach((val) => {
            cards.push(<FeedPost key={val.id + val.timestamp} data={val} openDetails={this.openDetails} />)
        })


        return (

            <Layout style={{ overflow: 'auto' }} >
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <Row justify="center" align="middle">

                        {cards}

                    </Row>
                    <Row justify="center" align="middle">
                        <div>
                            <Button type="link" onClick={this.fetchNext}>View More</Button></div>
                    </Row>
                    <Modal title="Details" visible={this.state.isModalVisible} onCancel={this.toggleModal}
                        footer={[
                            <Button key="back" onClick={this.toggleModal}>
                                cancel
                            </Button>]}>
                        <FeedPostDetails feedDetails={this.props.feedDetails} />
                    </Modal>
                </Content>
            </ Layout >
        );
    }
}
