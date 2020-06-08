import React from "react";
import CommonPageContainer from "../components/CommonPageContainer"
import {Grid, Row, Col} from "react-native-easy-grid";
import Title from "../components/Title";
import {View, ScrollView, TextInput, Keyboard} from "react-native";
import TextBlock from "../components/TextBlock";
import {Button, Icon, Input, Item} from "native-base";
import env from "../../env";
import InputScrollView from 'react-native-input-scroll-view';

class RequestFeatureScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    sendMessage(text) {
        if (text === ''){
            return
        }
        let requestUrl = 'https://api.telegram.org/bot' + env.telegram.bot + '/sendMessage?chat_id=' + env.telegram.chat + '&text=' + text
        fetch(requestUrl)
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <CommonPageContainer
                headerTitle="Metal Library">

                <Grid style={styles.pageWrapper}>
                    <Row>
                        <Col>
                            <Title text={"Request a feature"}/>
                            <View style={styles.textBlock}>
                                <ScrollView keyboardShouldPersistTaps="handled">
                                    <TextBlock>
                                        If you have any propositions, any ideas or feedback feel free to write them
                                        here.
                                        {"\n"}
                                        Please leave your contact information so I can answer you
                                    </TextBlock>
                                    <Item style={{marginTop: 30, backgroundColor: 'rgba(18, 33, 57,0.7)'}}>
                                        <Input
                                            style={{color: "#fff",}}
                                            multiline={true}
                                            numberOfLines={4}
                                            onChangeText={(text) => this.setState({text})}
                                            value={this.state.text}
                                        />
                                    </Item>
                                        <View style={{marginTop: 20}}>
                                            <Button style={{alignSelf: 'center', padding: 70}} onPress={() => {
                                                Keyboard.dismiss();
                                                let text = this.state.text
                                                this.sendMessage(text);
                                                this.setState({
                                                    text: ''
                                                })
                                            }}>
                                                <TextBlock>Send message</TextBlock>
                                            </Button>
                                        </View>
                                </ScrollView>
                            </View>
                        </Col>
                    </Row>
                </Grid>
            </CommonPageContainer>
        );
    }
}

export default RequestFeatureScreen;

const styles = {
    pageWrapper: {
        backgroundColor: 'rgba(18, 33, 57,0.8)',
    },
    textBlock: {
        margin: 10
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        marginLeft: 15
    },
};
