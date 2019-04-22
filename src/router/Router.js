import React from 'react';
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from "../screen/SearchScreen";
import ReviewsScreen from "../screen/ReviewsScreen";
import AlbumScreen from "../screen/AlbumScreen";
import BandScreen from "../screen/BandScreen";



const HomeStack = createSwitchNavigator({
    Home: HomeScreen,
    Album: AlbumScreen,
    Band: BandScreen,
},
    {
        headerMode: 'none',
        backBehavior: 'order'
    });

const SearchStack = createSwitchNavigator({
    Search: SearchScreen,
    Album: AlbumScreen,
    Band: BandScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'order'
    });

const ReviewsStack = createSwitchNavigator({
    Reviews: ReviewsScreen,
    Album: AlbumScreen,
    Band: BandScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'order'
    });

const Router = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Reviews: ReviewsStack,
},{
    backBehavior: 'none'
});

export default Router