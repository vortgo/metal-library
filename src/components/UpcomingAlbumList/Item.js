import React from "react";
import {ActivityIndicator, TouchableWithoutFeedback, Text, View, Button} from "react-native";
import {Image} from "react-native-elements";

export default class Item extends React.Component {
    render() {
        console.log(this.props.navigation);
        return (
            <View style={styles.wrapper}>
                < TouchableWithoutFeedback onPress={() => this.props.navigation.push('Album', {
                    albumId: this.props.id,
                    albumName: this.props.albumName
                })}>
                    <View style={styles.item}>
                        <Image
                            source={{uri: this.props.image}}
                            style={styles.image}
                            PlaceholderContent={<ActivityIndicator/>}
                        />
                        <View style={styles.textContainer}>
                            <Text numberOfLines={2} style={styles.text}>
                                {this.props.bandName} - {this.props.albumName}
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
        width: 150,
        height: 200
    },
    image: {
        width: 150,
        height: 150
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: 10,
        textAlign: 'center',
        color: "#fff",
        width: 150,
        fontSize: 14,
    }
}