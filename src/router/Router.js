import React from 'react';
import {createBottomTabNavigator, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from "../screen/SearchScreen";
import ReviewsScreen from "../screen/ReviewsScreen";
import AlbumScreen from "../screen/AlbumScreen";
import BandScreen from "../screen/BandScreen";
import {
    Button,
    Text,
    Icon,
    Item,
    Footer,
    FooterTab,
    Label,
    StyleProvider,
} from "native-base";
import StyleContainer from "../components/StyleContainer"

const HomeStack = createStackNavigator({
        Home: HomeScreen,
        Album: AlbumScreen,
        Band: BandScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'history',
        transitionConfig : () => ({
            transitionSpec: {
                duration: 0,
            },
        }),
    });

const SearchStack = createStackNavigator({
        Search: SearchScreen,
        Album: AlbumScreen,
        Band: BandScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'history'
    });

const ReviewsStack = createSwitchNavigator({
        Reviews: ReviewsScreen,
        Album: AlbumScreen,
        Band: BandScreen,
    },
    {
        headerMode: 'none',
        backBehavior: 'history'
    });

const Router = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Reviews: ReviewsStack,
}, {
    backBehavior: 'none',
    tabBarComponent: props => {
        console.log(props.navigation);
        return (
            <StyleContainer>
                <Footer>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => props.navigation.navigate("Home")}
                        >
                            <Icon name="home"/>
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => props.navigation.navigate("Search")}
                        >
                            <Icon name="search"/>
                            <Text>Search</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleContainer>
        );
    }
});

export default Router