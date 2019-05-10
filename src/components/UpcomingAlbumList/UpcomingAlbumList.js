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
                             <Item image={rowData.imageUrl} title={rowData.title} navigation={this.props.navigation}/>
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
        title: "Anathema - Saviors of the Universe "
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/5/3/775396.jpg?5711",
        title: "Lowest Creature - BloodWood"
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/0/0/770072.jpg?4029",
        title: "Pulver - Maha Kali"
    },
    {
        imageUrl: "https://www.metal-archives.com/images/7/7/4/9/774949.jpg?1647",
        title: "Aphyxion - Fiend Of my shit life with wery long row"
    }
];
