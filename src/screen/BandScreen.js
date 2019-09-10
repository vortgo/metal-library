import React from "react";
import {Button, Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import BandInfo from "../components/BandInfo/BandInfo";
import LatestBandUpdateList from "../components/LatestBandUpdateList/LatestBandUpdateList";

class BandScreen extends React.Component {
    render() {
        console.log(this.props.navigation.state)
        return (
            <CommonPageContainer
                headerTitle={this.props.navigation.getParam("bandName",'Band')}>
                <BandInfo navigation={this.props.navigation}/>
            </CommonPageContainer>
        );
    }
}

export default BandScreen