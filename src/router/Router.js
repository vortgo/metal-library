import React from 'react';
import {
    createBottomTabNavigator,
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from "../screen/SearchScreen";
import ReviewsScreen from "../screen/ReviewsScreen";
import AlbumScreen from "../screen/AlbumScreen";
import BandScreen from "../screen/BandScreen";
import SongScreen from "../screen/SongScreen";
import DrawerComponent from "./navigations/Drawer/Drawer";
import Tabs from "./navigations/Tabs/Tab";


const HomeStack = createStackNavigator({
        Home: HomeScreen,
        Album: AlbumScreen,
        Band: BandScreen,
        Song: SongScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'history',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
    });

const SearchStack = createStackNavigator({
        Search: SearchScreen,
        Album: AlbumScreen,
        Band: BandScreen,
        Song: SongScreen,
    },
    {
        headerMode: 'none',
    });

const ReviewsStack = createSwitchNavigator({
        Reviews: ReviewsScreen,
        Album: AlbumScreen,
        Band: BandScreen,
        Song: SongScreen,
    },
    {
        headerMode: 'none'
    });
const Drawer = createDrawerNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Reviews: ReviewsStack,
}, {
    drawerPosition: 'right',
    drawerWidth: 230,
    contentComponent: DrawerComponent,
});
const Router = createBottomTabNavigator({
    Drawer: {screen: Drawer},
}, {
    backBehavior: 'none',
    tabBarComponent: Tabs
});


export default Router