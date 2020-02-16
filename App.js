import React from 'react';
import {createAppContainer } from 'react-navigation';

import store from './src/reducers/index';
import Router from "./src/router/Router";
import { Provider } from 'react-redux';
import {BackHandler, ToastAndroid} from 'react-native';

let Navigation = createAppContainer(Router);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backClickCount: 0
        };

        this.timer = {
            ref: null,
            isTimerRunning: false
        }
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton.bind(this));
    }

    handleBackButton = () => {
        if (!this.timer.isTimerRunning) {
            this.timer.isTimerRunning = true;
            const backInterval = 3000;
            clearTimeout(this.timer.ref);
            this.timer.ref = setTimeout(() => this.timer.isTimerRunning = false, backInterval);
            ToastAndroid.show("Press back again to exit", ToastAndroid.SHORT);
            return true; // don't do anything
        }
        BackHandler.exitApp();

        return true;
    };


    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}