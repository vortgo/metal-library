import React from "react";
import {ActivityIndicator, Text, View, ScrollView} from "react-native";
import Title from "../Title";
import {Accordion, Icon} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';
import {connect} from "react-redux";
import {callApiAlbumSongsRequest} from "../../actions/ApiRequestActions";

class SongsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
        }
    }

    componentDidMount(): void {
        this.props.callApi(1);
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({isLoading: nextProps.isLoading});

        if (nextProps.data) {
            this.setState({data: nextProps.data});
        }
    }

    _renderHeader(item, expanded) {
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <Text numberOfLines={1}
                                  style={styles.text}> {item.position} {item.name} ({item.time})</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.textLyrics}>
                                Lyrics {expanded
                                ? <Icon style={styles.icon} type='FontAwesome5' name='chevron-up'/>
                                : <Icon style={styles.icon} type='FontAwesome5' name='chevron-down'/>}
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        );
    }

    _renderContent(item) {
        return (
            <Text
                style={styles.content}
            >
                {item.lyrics}
            </Text>
        );
    }

    render() {
        if (this.state.data) {
            this.state.data.sort((a, b) => (a.position > b.position) ? 1 : -1)
        }

        const isLoading = this.state.isLoading;


        return (
            <View>
                {isLoading && (
                    <ActivityIndicator
                        style={[styles.loading, {height: 180}]}
                        size="large"
                    />
                )}
                {!isLoading && (
                    <View>
                        <Title text="Songs" fontSize={14}/>
                        <Accordion style={styles.accordion}
                                   dataArray={this.state.data}
                                   animation={true}
                                   expanded={true}
                                   renderHeader={this._renderHeader}
                                   renderContent={this._renderContent}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.ApiAlbumSongsReducer.isLoading,
    error: state.ApiAlbumSongsReducer.error,
    data: state.ApiAlbumSongsReducer.data
});

export default connect(mapStateToProps, {callApi: callApiAlbumSongsRequest})(SongsList)

const styles = {
    icon: {
        fontSize: 16,
        color: "#fff"
    },
    text: {
        color: "#fff",
        fontSize: 16
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        marginTop: 7,
        marginLeft: 20,
        marginRight: 20,
    },
    content: {
        backgroundColor: "#122139",
        fontSize: 16,
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        color: "#fff",
        fontStyle: "italic",
    },
    textLyrics: {
        fontSize: 16,
        color: "#fff",
        textAlign: "right",
    },
    accordion: {
        borderWidth: 0,
        marginBottom: 7,
    }
};