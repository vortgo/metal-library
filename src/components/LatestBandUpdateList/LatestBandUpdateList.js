import React from "react";
import {ScrollView, View, FlatList, Button} from "react-native";
import Item from "./Item";
import {connect} from "react-redux";
import {callApiLatestBandsUpdateRequest} from "../../actions/ApiRequestActions";


class LatestBandUpdateList extends React.Component {

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
            <View style={styles.wrapper}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item: rowData}) => {
                        return (
                            <Item id={rowData.id} title={rowData.title} date={rowData.date} navigation={this.props.navigation}/>
                        );
                    }}
                />
            </View>
        );
    }
}

const styles = {
    wrapper: {
        paddingLeft: 7,
        paddingRight: 7
    }
};

const mapStateToProps = state => ({
    isLoading: state.ApiLatestBandsUpdateReducer.isLoading,
    error: state.ApiLatestBandsUpdateReducer.error,
    data: state.ApiLatestBandsUpdateReducer.data
});

export default connect(mapStateToProps, {callApi: callApiLatestBandsUpdateRequest})(LatestBandUpdateList);