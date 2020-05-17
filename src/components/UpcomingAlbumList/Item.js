import React from "react";
import {ActivityIndicator, TouchableWithoutFeedback, Text, View, Button} from "react-native";
import {Image} from "react-native-elements";

export default class Item extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                < TouchableWithoutFeedback onPress={() => this.props.navigation.push('Album', {
                    albumName: this.props.albumName,
                    albumId: this.props.id
                })}>
                    <View style={styles.item}>
                        <Image
                            source={{uri: this.props.image}}
                            style={styles.image}
                            PlaceholderContent={<ActivityIndicator/>}
                        />
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={styles.text}>
                                {this.props.albumName}
                            </Text>
                            <Text numberOfLines={1} style={styles.text}>
                                {this.props.bandName}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = {
    wrapper: {
        marginRight: 10
    },
    item: {
        backgroundColor: "#151d2a",
        width: 100,
        height: 140
    },
    image: {
        width: 100,
        height: 100
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    text: {
        textAlign: 'center',
        color: "#fff",
        width: 100,
        fontSize: 12,
    }
};