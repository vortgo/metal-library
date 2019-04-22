import React from "react";
import {Button, Text, View} from "react-native";

class SearchScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>SearchScreen.js!</Text>
                <Button
                    title="Albums"
                    onPress={() => this.props.navigation.navigate('Album')}
                />
                <Button
                    title="Bands"
                    onPress={() => this.props.navigation.navigate('Band')}
                />
            </View>
        );
    }
}

export default SearchScreen