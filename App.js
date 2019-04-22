import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Router from "./src/router/Router";


export default createAppContainer(Router);