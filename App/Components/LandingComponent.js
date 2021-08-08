import React, { Component } from 'react';

import { DatePicker } from 'antd';
import config from '../Helper/config.json'
import {
    StyleSheet,
    Text,
    Linking,
    View
} from 'react-native';
import { Button } from 'antd';
export default class LandingComponent extends Component {

    constructor(props) {
        super(props)


    }
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        if (code)
            this.props.generateToken(code)

    }
    componentDidUpdate() {
        if (this.props.code) {

            this.props.navigation.navigate('Feed')
        }

    }
    render() {

        return (
            <View style={styles.container}>
                <Button type="primary" onClick={() => {
                    Linking
                        .openURL(config["instagramAuthUrl"])
                        .catch(err => console.error('Error', err));        //Redirects to Instagram for the authentication
                }}>Login to Instagram</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});