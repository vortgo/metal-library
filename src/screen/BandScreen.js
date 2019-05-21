import React from "react";
import {Button, Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import BandInfo from "../components/BandInfo/BandInfo";

class BandScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Anathema">
                <BandInfo/>
            </CommonPageContainer>
        );
    }
}

export default BandScreen