import React from "react";
import {Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";

class AlbumScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Album Page">
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>AlbumScreen!</Text>
                </View>
            </CommonPageContainer>
        );
    }
}

export default AlbumScreen