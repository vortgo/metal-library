import React from "react";
import {withNavigation} from 'react-navigation';
import {TouchableWithoutFeedback, View} from "react-native";
import {Col, Grid, Row} from "react-native-easy-grid";
import {Icon, Text} from "native-base";

class BandSearchItem extends React.Component {
    render() {
        return (
            < TouchableWithoutFeedback
                onPress={() => this.props.navigation.push(this.props.routeName, this.props.routeParam)}>
                <View style={styles.searchResultRow} key={this.props.mapKey}>
                    <Grid>
                        <Row>
                            <Col size={10}>
                                <Text numberOfLines={1} style={styles.text}>
                                    {this.props.item.name} <Text numberOfLines={1} style={styles.countryText}>
                                    - {this.props.item.country.toLowerCase()
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
                                        .join(' ')} {this.props.item.year !== null ? " ("+this.props.item.year +")": ""}
                                </Text>
                                </Text>
                                <Text numberOfLines={1} style={styles.additionalInfoText}>
                                    {this.props.item.genres.toLowerCase()
                                        .split(' ')
                                        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
                                        .join(' ')}
                                </Text>
                            </Col>
                            <Col size={1}>
                                <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Icon style={styles.iconLink} type='FontAwesome5'
                                          name='angle-right'/>
                                </View>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default withNavigation(BandSearchItem)

const styles = {
    countryText:{
        fontSize: 12,
        color: "#fff"
    },
    additionalInfoText:{
        color: '#807e7e',
        fontSize: 10,
    },
    iconLink:{
        fontSize: 16,
        color: "#fff",
        textAlign: "center",
    },
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
        paddingBottom: 0,
        color: "#fff",
        fontStyle: "italic",
    },
    searchResultRow: {
        borderBottomColor: '#414047',
        borderBottomWidth: 1,
        padding: 5
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