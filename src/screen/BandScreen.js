import React from "react";
import {Button, Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";

class BandScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer
                headerTitle="Band Page" >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>BandScreen!</Text>
                <Button
                    title="Albums"
                    onPress={() => this.props.navigation.navigate('Album')}
                />
            </View>
            </CommonPageContainer>
        );
    }
}

export default BandScreen