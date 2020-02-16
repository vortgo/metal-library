import React, {Component} from 'react';
import styles from './Drawer.style';
import {StackActions} from 'react-navigation';
import {ImageBackground, ScrollView, Text, View} from 'react-native';
import Header, {Button, Container, Icon} from "native-base";
import env from '../../../../env'

class Drawer extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../resources/img/20.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <ScrollView>

                        <View >
                            <Text style={styles.sectionHeadingStyle}>
                                Bookshelf
                            </Text>
                            <View>
                                <Text style={styles.navItemStyle} onPress={() => {
                                    this.props.navigation.dispatch(StackActions.popToTop());
                                    this.props.navigation.navigate("Home")
                                }}>
                                    <Icon style={styles.itemIcon} name="home"/> Home
                                </Text>
                                <Text style={styles.navItemStyle} onPress={() => {
                                    this.props.navigation.dispatch(StackActions.popToTop());
                                    this.props.navigation.navigate("Search")
                                }}>
                                    <Icon style={styles.itemIcon} name="search"/> Search
                                </Text>
                            </View>
                        </View>


                    </ScrollView>
                    <View style={styles.footerContainer}>
                        <Text style={{color: 'white', fontSize: 10, textAlign: "right"}}>MetalLibrary {env.version}</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

export default Drawer;