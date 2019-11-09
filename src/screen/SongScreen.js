import React from "react";
import {
    ActivityIndicator,
    ScrollView,
    Text, TouchableWithoutFeedback,
    View,
} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Icon, Tab, Tabs} from "native-base";
import {connect} from "react-redux";
import {callApiSongRequest} from "../actions/ApiRequestActions";
import SongVideo from "../components/Song/SongVideo";

class SongScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [],
        };
    }

    componentDidMount(): void {
        let songId = this.props.navigation.getParam('songId', 1);
        this.props.callApi(songId)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isLoading: nextProps.isLoading})
        if (nextProps.data) {
            this.setState({data: nextProps.data})
        }
    }

    render() {
        const data = this.state.data;
        const isLoading = this.state.isLoading;
        return (
            <CommonPageContainer
                headerTitle="Metal Library"
            >
                {isLoading ? (
                    <View>
                        <ActivityIndicator
                            style={[styles.loading, {height: 180}]}
                            size="large"
                        />
                    </View>
                ) : (
                    <SongVideo videoKey={data.video_key}/>
                )}

                <Tabs>
                    <Tab heading="Song info" style={styles.tab}>
                        <ScrollView showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                            {isLoading ? (
                                <View>
                                    <ActivityIndicator
                                        style={[styles.loading, {height: 180}]}
                                        size="large"
                                    />
                                </View>
                            ) : (
                                <Grid>
                                    <Row style={styles.row}>
                                        <Col>
                                            <Text style={styles.text}>Song:</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.text}>{data.name}</Text>
                                        </Col>
                                    </Row>
                                    <Row style={styles.row}>
                                        <Col>
                                            <Text style={styles.text}>Album:</Text>
                                        </Col>
                                        <Col>
                                            < TouchableWithoutFeedback
                                                onPress={() => this.props.navigation.push('Album', {
                                                    albumId: data.album_id,
                                                    albumName: data.album_name
                                                })}>
                                                <Row>
                                                    <Col size={10}>
                                                        <Text style={styles.text}>
                                                            {data.album_name}
                                                        </Text>
                                                    </Col>
                                                    <Col size={1}>
                                                        <Text style={styles.text}>
                                                            <Icon style={styles.icon} type='FontAwesome5'
                                                                  name='angle-right'/>
                                                        </Text>

                                                    </Col>
                                                </Row>
                                            </TouchableWithoutFeedback>
                                        </Col>
                                    </Row>
                                    <Row style={styles.row}>
                                        <Col>
                                            <Text style={styles.text}>Band:</Text>
                                        </Col>
                                        <Col>
                                            < TouchableWithoutFeedback
                                                onPress={() => this.props.navigation.push('Band', {
                                                    bandName: data.band_name,
                                                    bandId: data.band_id
                                                })}>
                                                <Row>
                                                    <Col size={10}>
                                                        <Text style={styles.text}>
                                                        {data.band_name}
                                                    </Text>
                                                    </Col>
                                                    <Col size={1}>
                                                        <Text style={styles.text}>
                                                            <Icon style={styles.icon} type='FontAwesome5'
                                                                  name='angle-right'/>
                                                        </Text>

                                                    </Col>
                                                </Row>
                                            </TouchableWithoutFeedback>
                                        </Col>
                                    </Row>
                                    <Row style={styles.row}>
                                        <Col>
                                            <Text style={styles.text}>Time:</Text>
                                        </Col>
                                        <Col>
                                            <Text style={styles.text}>{data.time}</Text>
                                        </Col>
                                    </Row>
                                </Grid>
                            )}

                        </ScrollView>
                    </Tab>
                    <Tab heading="Lyrics" style={styles.tab}>
                        <ScrollView howsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}>
                            {isLoading ? (
                                <View>
                                    <ActivityIndicator
                                        style={[styles.loading, {height: 180}]}
                                        size="large"
                                    />
                                </View>
                            ) : (
                                <Text style={styles.textLyrics}>{data.lyrics}</Text>
                            )}
                        </ScrollView>
                    </Tab>
                </Tabs>
            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    data: state.ApiSongReducer.data,
    isLoading: state.ApiSongReducer.isLoading
});

export default connect(mapStateToProps, {callApi: callApiSongRequest})(SongScreen);

const styles = {
    youtubeStub: {
        height: 175,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textYoutubeStub: {
        color: "#fff",
    },
    textLyrics: {
        paddingLeft: 10,
        fontSize: 16,
        color: "#fff",
        fontStyle: "italic",
    },
    tab: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
        padding: 20,
    },
    text: {
        color: "#fff"
    },
    row: {
        borderBottomColor: '#151d2a',
        borderBottomWidth: 1,
        padding: 5
    },
    icon: {
        fontSize: 16,
        color: "#fff"
    },
};
