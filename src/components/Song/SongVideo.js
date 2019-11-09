import React, {Component} from 'react'
import {Text, View} from "react-native";
import {WebView} from "react-native-webview";

class SongVideo extends Component {
    render() {
        const videoKey = this.props.videoKey;

        return (
            <View style={{height: 175}}>
                {videoKey == null ? (
                    <View style={styles.youtubeStub}>
                        <Text style={styles.textYoutubeStub}>Video is unavailable</Text>
                    </View>
                ) : (
                    <WebView
                        source={{uri: 'http://rock-songs.online:1323/song-iframe?video_id=' + videoKey}}
                    />
                )}
            </View>
        )
    }
}

export default SongVideo

const styles = {
    youtubeStub: {
        height: 175,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textYoutubeStub: {
        color: "#fff",
    }
};
