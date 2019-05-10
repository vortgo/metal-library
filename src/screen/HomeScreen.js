import React from "react";
import {Text, View, Button, ScrollView} from "react-native";
import {Root} from "native-base";
import CommonPageContainer from "../components/CommonPageContainer"
import {Col, Row, Grid} from 'react-native-easy-grid';
import Title from '../components/Title'
import UpcomingAlbumList from "../components/UpcomingAlbumList/UpcomingAlbumList";

class HomeScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Heavy music archive">
                <Title text={"Upcoming albums"}/>
                <UpcomingAlbumList/>
                <Title text={"Latest bands update"}/>
                <ScrollView>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                    <Button title="OK"/>
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

export default HomeScreen
