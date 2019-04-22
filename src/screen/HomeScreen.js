import React from "react";
import {Text, View, Button} from "react-native";
import {Root} from "native-base";
import CommonPageContainer from "../components/CommonPageContainer"

class HomeScreen extends React.Component {
    render() {
        return (
            <CommonPageContainer>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Home!</Text>
                    <Button
                        title="Albums"
                        onPress={() => this.props.navigation.navigate('Album')}
                    />
                    <Button
                        title="Bands"
                        onPress={() => this.props.navigation.navigate('Band')}
                    />
                </View>
            </CommonPageContainer>
        );
    }
}

export default HomeScreen
