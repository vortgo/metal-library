import React from 'react';
import {createAppContainer } from 'react-navigation';

import store from './src/reducers/index';
import Router from "./src/router/Router";
import { Provider } from 'react-redux';


let Navigation = createAppContainer(Router);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}