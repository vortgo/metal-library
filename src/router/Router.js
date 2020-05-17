import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from "../screen/SearchScreen";
import AlbumScreen from "../screen/AlbumScreen";
import BandScreen from "../screen/BandScreen";
import SongScreen from "../screen/SongScreen";
import ReviewScreen from "../screen/ReviewScreen";
import DrawerComponent from "./navigations/Drawer/Drawer";
import Tabs from "./navigations/Tabs/Tab";


const HomeStack = createStackNavigator({
        Home: HomeScreen,
        Album: AlbumScreen,
        Band: BandScreen,
        Song: SongScreen,
        Review: ReviewScreen,
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
        Review: ReviewScreen,
    },
    {
        headerMode: 'none',
    });

const Drawer = createDrawerNavigator({
    Home: HomeStack,
    Search: SearchStack,
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