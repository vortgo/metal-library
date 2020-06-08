import React from "react";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {RefreshControl, ScrollView, Button, View, Text, Linking} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer"
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";
import {connect} from "react-redux";
import {callApiUpcomingAlbumsRequest, callApiLatestBandsUpdateRequest} from "../actions/ApiRequestActions";
import SplashScreen from "react-native-splash-screen";
import TextBlock from "../components/TextBlock";
import {StackActions} from "react-navigation";
import {Icon} from "native-base";
import env from "../../env";

class AboutScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Metal Library">

                <Grid style={styles.pageWrapper}>
                    <Row>
                        <Col>
                            <ScrollView>
                                <Title text={"About the app"}/>
                                <View style={styles.aboutText}>
                                    <TextBlock>
                                        This fan application is a metal music encyclopedia. Information is taken from
                                        a site dedicated to heavy music. Also, integration with YouTube was carried out
                                        -
                                        now you can listen to songs using the video player built into the application.
                                        {"\n"}{"\n"}
                                        I have a telegram application development channel in which I leave information
                                        on
                                        the development of the application. You can also participate in the discussion
                                        of
                                        new features of the application, offer your ideas and influence how the
                                        application
                                        will look.
                                        {"\n"}{"\n"}
                                        I do not have a development team and this application is not commercial. If you
                                        have
                                        a desire to help in any way in the development of the application - welcome
                                    </TextBlock>
                                    <View style={styles.contactBlock}>
                                        <View style={styles.contactItem}>
                                            <TextBlock style={styles.contactText}>
                                                <Icon style={styles.itemIcon} type='FontAwesome5'
                                                      name='headphones-alt'/> Current application version: {env.version}
                                            </TextBlock>
                                        </View>
                                        <View style={styles.contactItem}>
                                            <TextBlock style={styles.contactText}>
                                                <Icon style={styles.itemIcon} type='FontAwesome5'
                                                      name='telegram-plane'/> Developer channel: <Text style={styles.link} onPress={() => Linking.openURL('https://t.me/metallibrary_dev')}>
                                                    @metallibrary_dev
                                                </Text>
                                            </TextBlock>
                                        </View>
                                        <View style={styles.contactItem}>
                                            <TextBlock style={styles.contactText}>
                                                <Icon style={styles.itemIcon} type='FontAwesome5'
                                                      name='telegram-plane'/> Personal telegram: <Text style={styles.link} onPress={() => Linking.openURL('https://t.me/vortgo')}>
                                                    @vortgo
                                                </Text>
                                            </TextBlock>
                                        </View>
                                        <View style={styles.contactItem}>
                                            <TextBlock style={styles.contactText}>
                                                <Icon style={styles.itemIcon} type='FontAwesome5'
                                                      name='envelope'/> Email: <Text style={styles.link} onPress={() => Linking.openURL('mailto:vortgo@gmail.com')}>
                                                    vortgo@gmail.com
                                                </Text>
                                            </TextBlock>
                                        </View>
                                        <View style={styles.contactItem}>
                                            <TextBlock style={styles.contactText}>
                                                <Icon style={styles.itemIcon} type='FontAwesome5' name='globe'/> App
                                                promo site: <Text style={styles.link} onPress={() => Linking.openURL('https://metallibrary.ga/')}>
                                                     metallibrary.ga
                                                </Text>
                                            </TextBlock>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </Col>
                    </Row>
                </Grid>
            </CommonPageContainer>
        );
    }
}

export default AboutScreen;

const styles = {
    pageWrapper: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
    },
    aboutText: {
        margin: 10
    },
    itemIcon: {
        fontSize: 20,
        color: 'white',
    },
    contactBlock: {
        marginTop: 20,
    },
    contactText: {
        fontSize: 16
    },
    contactItem: {
        marginBottom: 10
    },
    link: {
        color:"#3d8af7"
    }

}
