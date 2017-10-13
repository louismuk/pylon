import React, { Component, PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import Courses from './Courses';

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class Home extends PureComponent {

    static navigatorStyle = {
        navBarHidden: true,
    };

    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First' },
            { key: '2', title: 'Second' },
            { key: '3', title: 'Second' },
            { key: '4', title: 'Second' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} />;

    _renderScene = SceneMap({
        '1': Courses,
        '2': SecondRoute,
        '3': SecondRoute,
        '4': SecondRoute,
    });

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 50}}>

                </View>
                <TabViewAnimated
                    style={styles.container}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {

        flex: 1,
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

