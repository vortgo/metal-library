import React from "react";
import {ScrollView, TouchableWithoutFeedback, View} from "react-native";
import {Col, Row, Grid} from 'react-native-easy-grid';
import CommonPageContainer from "../components/CommonPageContainer";
import SearchInput from "../components/Search/SearchInput";
import {Container, Header, Content, Input, Item, Accordion, Spinner, Icon, Text} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {connect} from "react-redux";

let navigation;

class SearchScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchResult: [],
            isLoading: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isLoading: nextProps.isLoading})

        if (nextProps.data) {
            this.setState({searchResult: nextProps.data})
        }
    }

    _renderHeader(item, expanded) {
        if (item.data == null) {
            item.data = [];
        }
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <Text numberOfLines={1} style={styles.text}> {item.name}</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.textResultsCount}>
                                Results ({item.data.length}) <Text>
                                {expanded
                                    ? <Icon style={styles.icon} type='FontAwesome5' name='chevron-up'/>
                                    : <Icon style={styles.icon} type='FontAwesome5' name='chevron-down'/>}
                            </Text>
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        );
    }

    _renderContent(item) {
        return (
            <View style={styles.content}>
                {item.data.map((row, key) => {

                    let routeParam = {};
                    let routeName = '';

                    if (item.name === 'Bands') {
                        routeName = 'Band';
                        routeParam = {
                            bandName: row.name,
                            bandId: row.id
                        };
                    } else if (item.name === 'Albums') {
                        routeName = 'Album';
                        routeParam = {
                            albumName: row.name,
                            albumId: row.id
                        };
                    }

                    return (
                        < TouchableWithoutFeedback
                            onPress={() => navigation.push(routeName, routeParam)}>
                            <View style={styles.searchResultRow} key={key}>
                                <Text style={styles.text} numberOfLines={1}>
                                    {item.name == 'Albums' ? row.band_name + ' - ' + row.name : row.name}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
        );
    }

    render() {
        navigation = this.props.navigation;
        const isLoading = this.state.isLoading
        return (
            <CommonPageContainer
                headerTitle="Metal Library">
                <Grid style={{margin: 20}}>
                    <Row>
                        {isLoading && (
                            <ActivityIndicator
                                style={[styles.loading, {height: 180}]}
                                size="large"
                            />
                        )}

                        {!isLoading && (
                            <Accordion style={styles.accordion}
                                       dataArray={this.state.searchResult}
                                       animation={true}
                                       renderHeader={this._renderHeader}
                                       renderContent={this._renderContent}
                                       expanded={0}
                            />
                        )}
                    </Row>
                    <SearchInput/>
                </Grid>

            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.ApiSearchReducer.isLoading,
    error: state.ApiSearchReducer.error,
    data: state.ApiSearchReducer.data
});

export default connect(mapStateToProps)(SearchScreen);

const styles = {
    accordion: {
        borderWidth: 0,
        marginBottom: 7,
    },
    icon: {
        fontSize: 12,
        color: "#fff"
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        marginTop: 7,
    },
    textResultsCount: {
        fontSize: 14,
        color: "#fff",
        textAlign: "right",
    },
    text: {
        color: '#fff',
    },
    content: {
        backgroundColor: "#122139",
        fontSize: 16,
        padding: 5,
        paddingBottom: 0,
        color: "#fff",
        fontStyle: "italic",
    },
    searchResultRow: {
        borderBottomColor: '#414047',
        borderBottomWidth: 1,
        padding: 10
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

