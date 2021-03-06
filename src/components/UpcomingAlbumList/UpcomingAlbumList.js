import React from "react";
import {ScrollView, View, FlatList} from "react-native";
import Item from './Item'
import {connect} from "react-redux";
import {callApiUpcomingAlbumsRequest} from "../../actions/ApiRequestActions";


class UpcomingAlbumList extends React.Component {
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
            <View style={{height: 145}}>
                <ScrollView horizontal={true} style={style.scroll}>
                    <FlatList
                        horizontal
                        data={this.state.data}
                        contentContainerStyle={{marginRight: 30}}
                        renderItem={({ item: rowData }) => {
                            return (
                             <Item id={rowData.id} image={rowData.image} bandName={rowData.band_name} albumName={rowData.name} navigation={this.props.navigation}/>
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
    isLoading: state.ApiUpcomingAlbumsReducer.isLoading,
    error: state.ApiUpcomingAlbumsReducer.error,
    data: state.ApiUpcomingAlbumsReducer.data
});

export default connect(mapStateToProps, {callApi: callApiUpcomingAlbumsRequest})(UpcomingAlbumList);
