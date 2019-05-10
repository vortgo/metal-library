import React from "react";
import {Text, View, Button, ScrollView} from "react-native";
import {Root} from "native-base";
import CommonPageContainer from "../components/CommonPageContainer"
import {Col, Row, Grid} from 'react-native-easy-grid';
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";

class HomeScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Heavy music archive">
                <Title text={"Upcoming albums"}/>
                <UpcomingAlbumList navigation={this.props.navigation}/>
                <Title text={"Latest bands update"}/>
                <LatestBandUpdateList/>
            </CommonPageContainer>
        );
    }
}

export default HomeScreen
