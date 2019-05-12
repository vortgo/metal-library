import React from "react";
import {ScrollView, View, FlatList, Button} from "react-native";
import Item from "./Item";


export default class LatestBandUpdateList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item: rowData}) => {
                        return (
                            <Item title={rowData.title} date={rowData.date}/>
                        );
                    }}
                />
            </View>
        );
    }


}

const styles = {
    wrapper: {
        paddingLeft: 20,
        paddingRight: 20
    }
};


const data = [
    {
        title: 'Manowar',
        date: 'March 23, 10:19'
    },
    {
        title: 'Anathema long name of band test',
        date: 'March 22, 8:09'
    },
    {
        title: 'Stratovarius',
        date: 'March 23, 10:19'
    },
    {
        title: 'Manowar',
        date: 'March 23, 10:19'
    },
    {
        title: 'Draconian',
        date: 'March 23, 10:19'
    },
    {
        title: 'Ария',
        date: 'March 23, 10:19'
    },
    {
        title: 'Manowar',
        date: 'March 23, 10:19'
    },
    {
        title: 'Stratovarius',
        date: 'March 23, 10:19'
    },
    {
        title: 'Manowar',
        date: 'March 23, 10:19'
    },
    {
        title: 'Draconian',
        date: 'March 23, 10:19'
    },
    {
        title: 'Ария',
        date: 'March 23, 10:19'
    },
    {
        title: 'Stratovarius',
        date: 'March 23, 10:19'
    },
    {
        title: 'Manowar',
        date: 'March 23, 10:19'
    },
    {
        title: 'Draconian',
        date: 'March 23, 10:19'
    },
    {
        title: 'Ария',
        date: 'March 23, 10:19'
    },
];