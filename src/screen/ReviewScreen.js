import React from "react";
import {ActivityIndicator, ScrollView, Text, View} from "react-native";
import CommonPageContainer from "../components/CommonPageContainer";
import AlbumPanel from "../components/AlbumInfo/AlbumPanel";
import Title from "../components/Title";
import {Col, Grid, Row} from "react-native-easy-grid";
import {connect} from "react-redux";
import {callApiAlbumRequest, callApiReviewRequest} from "../actions/ApiRequestActions";

class ReviewScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isLoading: false,
        };
    }

    componentDidMount(): void {
        let reviewId = this.props.navigation.getParam('reviewId', 1);
        this.props.callApiReviewRequest(reviewId);
    }

    componentWillReceiveProps(nextProps): void {
        this.setState({isLoading: nextProps.isLoading});
        this.setState({data: nextProps.data});
    }

    render() {
        this.props.callApiAlbumRequest(this.state.data.album_id);
        const isLoading = this.state.isLoading;
        return (
            <CommonPageContainer>
                <ScrollView howsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}>
                    {isLoading && (
                        <ActivityIndicator
                            style={[styles.loading, {height: 180}]}
                            size="large"
                        />
                    )}
                    {!isLoading && (
                    <View>
                        <AlbumPanel navigation={this.props.navigation}/>
                        <View style={styles.reviewBlock}>
                            <Grid>
                                <Row style={{height: 50}}>
                                    <Col>
                                        <Title selectable={true} text={this.state.data.title + ' - ' + this.state.data.rating + '%'}
                                               style={{fontSize: 18, marginBottom: 0}}/>
                                        <Title selectable={true} text={this.state.data.author}
                                               style={{fontSize: 12, margin: 0, color: '#807e7e'}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={styles.textWrapper}>
                                        <Text selectable={true} style={styles.text}>
                                            {this.state.data.text}
                                        </Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </View>
                    </View>
                    )}
                </ScrollView>
            </CommonPageContainer>
        );
    }
}

const mapStateToProps = state => ({
    data: state.ApiReviewReducer.data,
    isLoading: state.ApiReviewReducer.isLoading,
});


export default connect(mapStateToProps, {
    callApiReviewRequest,
    callApiAlbumRequest
})(ReviewScreen);

const styles = {
    reviewBlock: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
    },
    text: {
        textAlign: "justify",
        color: "#fff",
    },
    textWrapper: {
        padding: 5
    }
};