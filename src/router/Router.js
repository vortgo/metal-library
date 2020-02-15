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
import {StackActions, NavigationActions} from 'react-navigation';
import SongScreen from "../screen/SongScreen";
import DrawerComponent from "../components/Drawer/Drawer";
import {ScrollView, View} from "react-native";
import styles from "../components/Drawer/Drawer.style";

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
    contentComponent: props => {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.sectionHeadingStyle}>
                            Menu
                        </Text>
                        <View style={styles.navSectionStyle}>
                            <Text style={styles.navItemStyle} onPress={() => {
                                props.navigation.dispatch(StackActions.popToTop());
                                props.navigation.navigate("Home")
                            }}>
                                Home
                            </Text>
                            <Text style={styles.navItemStyle} onPress={() => {
                                props.navigation.dispatch(StackActions.popToTop());
                                props.navigation.navigate("Search")
                            }}>
                                Search
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footerContainer}>
                    <Text>This is my fixed footer</Text>
                </View>
            </View>
        )
    }
});
const Router = createBottomTabNavigator({
    Drawer: {screen: Drawer},
}, {
    backBehavior: 'none',
    tabBarComponent: props => {
        return (
            <StyleContainer>
                <Footer style={{
                    borderTopColor: '#414047',
                    borderTopWidth: 1
                }}>
                    <FooterTab>
                        <Button
                            vertical
                            active={props.navigation.state.index === 0}
                            onPress={() => {
                                props.navigation.dispatch(StackActions.popToTop());
                                props.navigation.navigate("Home")
                            }}
                        >
                            <Icon name="home"/>
                            <Text>Home</Text>
                        </Button>
                        <Button
                            vertical
                            active={props.navigation.state.index === 1}
                            onPress={() => {
                                props.navigation.dispatch(StackActions.popToTop());
                                props.navigation.navigate("Search");
                            }}
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