import React from "react";
import {ScrollView, View, FlatList} from "react-native";
import Item from './Item'


export default class UpcomingAlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        return (
            <View style={{height: 200}}>
                <ScrollView horizontal={true} style={style.scroll}>
                    <FlatList
                        horizontal
                        data={this.state.data}
                        contentContainerStyle={{marginRight: 30}}
                        renderItem={({ item: rowData }) => {
                            return (
                             <Item image={rowData.imageUrl} bandName={rowData.bandName} albumName={rowData.albumName} navigation={this.props.navigation}/>
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
        paddingLeft: 20,
        paddingRight: 20
    }
}

const data = [
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/4/9/774927.jpg?5006",
        albumName: "Saviors of the Universe ",
        bandName: "Anathema",
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/5/3/775396.jpg?5711",
        albumName: "BloodWood",
        bandName: "Lowest Creature",
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/0/0/770072.jpg?4029",
        albumName: "Maha Kali",
        bandName: "Pulver",
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/4/9/774949.jpg?1647",
        albumName: "Fiend Of my shit life with very long row",
        bandName: "Aphyxion",
    }
];
