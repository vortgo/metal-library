import React from "react";
import {ScrollView, View, FlatList} from "react-native";
import Item from './Item'
import {connect} from "react-redux";
import {callApiLatestReviewsRequest, callApiUpcomingAlbumsRequest} from "../../actions/ApiRequestActions";

class LatestReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
        };
    }

    componentDidMount(): void {
        this.props.callApi()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({isLoading: nextProps.isLoading})

        if (nextProps.data) {
            this.setState({data: nextProps.data})
        }
    }

    render() {
        return (
            <View>
                <ScrollView style={style.scroll}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({item: rowData}) => {
                            return (
                                <Item item={rowData} navigation={this.props.navigation}/>
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    >
                    </FlatList>
                </ScrollView>
            </View>
        )
    }
}

const style = {
    scroll: {
        paddingLeft: 7,
        paddingRight: 7
    }
}

const mapStateToProps = state => ({
    isLoading: state.ApiLatestReviewsReducer.isLoading,
    error: state.ApiLatestReviewsReducer.error,
    data: state.ApiLatestReviewsReducer.data
});

export default connect(mapStateToProps,{callApi: callApiLatestReviewsRequest})(LatestReviews);
