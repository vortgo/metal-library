import React from "react";
import {ActivityIndicator, Text, View, ScrollView} from "react-native";
import Title from "../Title";
import {Accordion, Icon} from "native-base";
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class SongsList extends React.Component {

    _renderHeader(item, expanded) {
        return (
            <View style={styles.item}>
                <Grid>
                    <Row>
                        <Col size={2}>
                            <Text numberOfLines={1} style={styles.text}> {item.position} {item.name} ({item.time})</Text>
                        </Col>
                        <Col size={1}>
                            <Text style={styles.textLyrics}>
                                Lyrics    {expanded
                                    ? <Icon style={styles.icon} type='FontAwesome5' name='chevron-up'/>
                                    : <Icon style={styles.icon} type='FontAwesome5' name='chevron-down'/>}
                            </Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        );
    }

    _renderContent(item) {
        return (
            <Text
                style={styles.content}
            >
                {item.lyrics}
            </Text>
        );
    }

    render() {
        data.sort((a, b) => (a.position > b.position) ? 1 : -1)
        return (
            <View>
                <Title text="Songs" fontSize={14}/>
                <Accordion style={styles.accordion}
                    dataArray={data}
                    animation={true}
                    expanded={true}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
            </View>
        );
    }
}

const styles = {
    icon: {
        fontSize: 16,
        color: "#fff"
    },
    text: {
        color: "#fff",
        fontSize: 16
    },
    item: {
        backgroundColor: "#151d2a",
        padding: 8,
        marginTop: 7,
        marginLeft: 20,
        marginRight: 20,
    },
    content:{
        backgroundColor: "#122139",
        fontSize:16,
        padding: 15,
        marginLeft: 20,
        marginRight: 20,
        color: "#fff",
        fontStyle: "italic",
    },
    textLyrics: {
        fontSize: 16,
        color: "#fff",
        textAlign: "right",
    },
    accordion: {
        borderWidth: 0,
        marginBottom: 7,
    }
};

const data = [
    {
        "name": "Time",
        "time": "06:54",
        "lyrics": "I got so much trouble on my mind\nParanoia time\nI'm running out of life\nClockwise and the seconds tick away\nEach line that cuts my face\nCut as each hand moves into place\n\nParanoia\nAmped and wired\n\nBile black the thoughts that run my head\nThere's so much to be said\nThey're so much living dead\nWalking corpses shambling through life\nWith nothing in their sight\nDance on their bones, step in and fight\n\nParanoia\nAmped and wired\n\nLife and death are fighting for my time\nI can't seem to find the time\nI want what's mine\nTime through the clock just keeps talking\nIt just walks any damn place\nIt feels like walkin'\nMy mind keeps thinking\nClockwise as the seconds tick away\nI make my move today\nTime and life\nLife and time\nTo have and hold\nAnd sometimes find\nIt isn't mine, it isn't yours\nMan to man I'll fight you for\nTime and life\nLife and time\nOne day I'll get what's mine\nThrough the persistence of time\nLife and death as words they don't mean shit\nIt's what you do with it\nAnd how you live with it\nRaging like a bull inside a cage\nJust give me a stage\nWhere this bull can rage\n\nParanoia's got no hold on me,\nTime don't have nothing\nTo do with how high you can,\nTime don't got nothing\nTo do with how high you can count\n",
        "position": 1,
    },
    {
        "name": "Keep It in the Family",
        "time": "07:07",
        "lyrics": "Mankind,\nThe public enemy's not the man who speaks his mind\nThe public enemy's the man that goes and acts blind\nSearching for an answer that he'll never find\nAn action from reaction and you can't make a retraction\nOnce you've put your head out\nAnd then you're blue in the face,\nAs you try to state your case\n\nYou can think with your dick but it can't shout\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nI yell, when there's schism you must rebel\nI yell, so you'll hear\nI yell, I refuse to live, in, your hell\nI am what you fear\nI'm the truth, I don't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nKeep it in the family\nDon't even try to tell me what you think is right\nWhen to you blacks are niggers and jews are kikes\nAnd you expect to be taken seriously\nBut your actions, they're more than curiously\nJuvenile, you emulate what you hate\nAnd you don't even know why you feel this way\n'Cause daddy hated this and mommy hated that\nAnd your own ability to reason's like a tire gone flat\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nWhen you keep it in the, when you keep it in the,\nWhen you keep it in the family\n\nActing out of pure cold hatred\n'Cause of what another's race is\nColor of another's face is\nDifferent, and your own frustrations\nTaking on a violent nature\nFull of hate, so full of hate\nYou'd kill a man is that your fate\nYour street becomes a police state\nWhy the hell do you hate?!\nHate, hate!!!\nI'm not gonna stand for it\nSomeone's gonna pay for it\nI yell, we rebel\nWe're the truth and we won't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nI'm the thing that you most fear\nI don't keep it in the family\nI am the truth you won't hear\n\nKeep it in the family\nYou can't keep it in the family\nYou've got the longest way to fall\nKeep it in the family\n",
        "position": 3,
    },
    {
        "name": "Blood",
        "time": "07:06",
        "lyrics": "What do you do when something dies\nA life together has ended, your living a lie\nWhen did this act become reality?\nHello conscience, do I laugh or do I cry\nNothing's ever perfect\nThis is just a test\n\nImagine, imagine saying what can be said\nImagine, imagine each word a bullet 'til you're dead\nImagine, imagine killing something you love\nImagine, just think about living inside\n\nBlood on your hands, blood in my eyes\nBlood I can't keep, blood circumscribes\nBlood on your hands turns into blood in my eyes\n\nAnd with the blood I can't keep\nOur lives, blood circumscribes\nBrother on, brother on, brother on, brothers in blood\n\nA wave of hatred comes like the flood\nBrother on brother on, Brothers in blood\nHate is so much easier to feel than love\nBrother on brother on, Brothers in blood\n\nMisery can be so attractive\nWhen making yourself happy is the only alternative\nAt the expense of someone else's life\nDo it for yourself, damn it, do what's right!\n\nImagine, think about living your life\nImagine, think about being stabbed with a dull knife\nImagine, think how sane you'll be when it's through\nImagine, think real hard then do what ya gotta do\n",
        "position": 2,
    },
    {
        "name": "Time",
        "time": "06:54",
        "lyrics": "I got so much trouble on my mind\nParanoia time\nI'm running out of life\nClockwise and the seconds tick away\nEach line that cuts my face\nCut as each hand moves into place\n\nParanoia\nAmped and wired\n\nBile black the thoughts that run my head\nThere's so much to be said\nThey're so much living dead\nWalking corpses shambling through life\nWith nothing in their sight\nDance on their bones, step in and fight\n\nParanoia\nAmped and wired\n\nLife and death are fighting for my time\nI can't seem to find the time\nI want what's mine\nTime through the clock just keeps talking\nIt just walks any damn place\nIt feels like walkin'\nMy mind keeps thinking\nClockwise as the seconds tick away\nI make my move today\nTime and life\nLife and time\nTo have and hold\nAnd sometimes find\nIt isn't mine, it isn't yours\nMan to man I'll fight you for\nTime and life\nLife and time\nOne day I'll get what's mine\nThrough the persistence of time\nLife and death as words they don't mean shit\nIt's what you do with it\nAnd how you live with it\nRaging like a bull inside a cage\nJust give me a stage\nWhere this bull can rage\n\nParanoia's got no hold on me,\nTime don't have nothing\nTo do with how high you can,\nTime don't got nothing\nTo do with how high you can count\n",
        "position": 4,
    },
    {
        "name": "Without lyrics",
        "time": "07:07",
        "lyrics": "no lyrics",
        "position": 5,
    },
    {
        "name": "Blood",
        "time": "07:06",
        "lyrics": "What do you do when something dies\nA life together has ended, your living a lie\nWhen did this act become reality?\nHello conscience, do I laugh or do I cry\nNothing's ever perfect\nThis is just a test\n\nImagine, imagine saying what can be said\nImagine, imagine each word a bullet 'til you're dead\nImagine, imagine killing something you love\nImagine, just think about living inside\n\nBlood on your hands, blood in my eyes\nBlood I can't keep, blood circumscribes\nBlood on your hands turns into blood in my eyes\n\nAnd with the blood I can't keep\nOur lives, blood circumscribes\nBrother on, brother on, brother on, brothers in blood\n\nA wave of hatred comes like the flood\nBrother on brother on, Brothers in blood\nHate is so much easier to feel than love\nBrother on brother on, Brothers in blood\n\nMisery can be so attractive\nWhen making yourself happy is the only alternative\nAt the expense of someone else's life\nDo it for yourself, damn it, do what's right!\n\nImagine, think about living your life\nImagine, think about being stabbed with a dull knife\nImagine, think how sane you'll be when it's through\nImagine, think real hard then do what ya gotta do\n",
        "position": 6,
    },
    {
        "name": "Time",
        "time": "06:54",
        "lyrics": "I got so much trouble on my mind\nParanoia time\nI'm running out of life\nClockwise and the seconds tick away\nEach line that cuts my face\nCut as each hand moves into place\n\nParanoia\nAmped and wired\n\nBile black the thoughts that run my head\nThere's so much to be said\nThey're so much living dead\nWalking corpses shambling through life\nWith nothing in their sight\nDance on their bones, step in and fight\n\nParanoia\nAmped and wired\n\nLife and death are fighting for my time\nI can't seem to find the time\nI want what's mine\nTime through the clock just keeps talking\nIt just walks any damn place\nIt feels like walkin'\nMy mind keeps thinking\nClockwise as the seconds tick away\nI make my move today\nTime and life\nLife and time\nTo have and hold\nAnd sometimes find\nIt isn't mine, it isn't yours\nMan to man I'll fight you for\nTime and life\nLife and time\nOne day I'll get what's mine\nThrough the persistence of time\nLife and death as words they don't mean shit\nIt's what you do with it\nAnd how you live with it\nRaging like a bull inside a cage\nJust give me a stage\nWhere this bull can rage\n\nParanoia's got no hold on me,\nTime don't have nothing\nTo do with how high you can,\nTime don't got nothing\nTo do with how high you can count\n",
        "position": 7,
    },
    {
        "name": "Keep It in the Family",
        "time": "07:07",
        "lyrics": "Mankind,\nThe public enemy's not the man who speaks his mind\nThe public enemy's the man that goes and acts blind\nSearching for an answer that he'll never find\nAn action from reaction and you can't make a retraction\nOnce you've put your head out\nAnd then you're blue in the face,\nAs you try to state your case\n\nYou can think with your dick but it can't shout\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nI yell, when there's schism you must rebel\nI yell, so you'll hear\nI yell, I refuse to live, in, your hell\nI am what you fear\nI'm the truth, I don't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nKeep it in the family\nDon't even try to tell me what you think is right\nWhen to you blacks are niggers and jews are kikes\nAnd you expect to be taken seriously\nBut your actions, they're more than curiously\nJuvenile, you emulate what you hate\nAnd you don't even know why you feel this way\n'Cause daddy hated this and mommy hated that\nAnd your own ability to reason's like a tire gone flat\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nWhen you keep it in the, when you keep it in the,\nWhen you keep it in the family\n\nActing out of pure cold hatred\n'Cause of what another's race is\nColor of another's face is\nDifferent, and your own frustrations\nTaking on a violent nature\nFull of hate, so full of hate\nYou'd kill a man is that your fate\nYour street becomes a police state\nWhy the hell do you hate?!\nHate, hate!!!\nI'm not gonna stand for it\nSomeone's gonna pay for it\nI yell, we rebel\nWe're the truth and we won't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nI'm the thing that you most fear\nI don't keep it in the family\nI am the truth you won't hear\n\nKeep it in the family\nYou can't keep it in the family\nYou've got the longest way to fall\nKeep it in the family\n",
        "position": 8,
    },
    {
        "name": "Blood",
        "time": "07:06",
        "lyrics": "What do you do when something dies\nA life together has ended, your living a lie\nWhen did this act become reality?\nHello conscience, do I laugh or do I cry\nNothing's ever perfect\nThis is just a test\n\nImagine, imagine saying what can be said\nImagine, imagine each word a bullet 'til you're dead\nImagine, imagine killing something you love\nImagine, just think about living inside\n\nBlood on your hands, blood in my eyes\nBlood I can't keep, blood circumscribes\nBlood on your hands turns into blood in my eyes\n\nAnd with the blood I can't keep\nOur lives, blood circumscribes\nBrother on, brother on, brother on, brothers in blood\n\nA wave of hatred comes like the flood\nBrother on brother on, Brothers in blood\nHate is so much easier to feel than love\nBrother on brother on, Brothers in blood\n\nMisery can be so attractive\nWhen making yourself happy is the only alternative\nAt the expense of someone else's life\nDo it for yourself, damn it, do what's right!\n\nImagine, think about living your life\nImagine, think about being stabbed with a dull knife\nImagine, think how sane you'll be when it's through\nImagine, think real hard then do what ya gotta do\n",
        "position": 9,
    },
    {
        "name": "Time",
        "time": "06:54",
        "lyrics": "I got so much trouble on my mind\nParanoia time\nI'm running out of life\nClockwise and the seconds tick away\nEach line that cuts my face\nCut as each hand moves into place\n\nParanoia\nAmped and wired\n\nBile black the thoughts that run my head\nThere's so much to be said\nThey're so much living dead\nWalking corpses shambling through life\nWith nothing in their sight\nDance on their bones, step in and fight\n\nParanoia\nAmped and wired\n\nLife and death are fighting for my time\nI can't seem to find the time\nI want what's mine\nTime through the clock just keeps talking\nIt just walks any damn place\nIt feels like walkin'\nMy mind keeps thinking\nClockwise as the seconds tick away\nI make my move today\nTime and life\nLife and time\nTo have and hold\nAnd sometimes find\nIt isn't mine, it isn't yours\nMan to man I'll fight you for\nTime and life\nLife and time\nOne day I'll get what's mine\nThrough the persistence of time\nLife and death as words they don't mean shit\nIt's what you do with it\nAnd how you live with it\nRaging like a bull inside a cage\nJust give me a stage\nWhere this bull can rage\n\nParanoia's got no hold on me,\nTime don't have nothing\nTo do with how high you can,\nTime don't got nothing\nTo do with how high you can count\n",
        "position": 10,
    },
    {
        "name": "Keep It in the Family",
        "time": "07:07",
        "lyrics": "Mankind,\nThe public enemy's not the man who speaks his mind\nThe public enemy's the man that goes and acts blind\nSearching for an answer that he'll never find\nAn action from reaction and you can't make a retraction\nOnce you've put your head out\nAnd then you're blue in the face,\nAs you try to state your case\n\nYou can think with your dick but it can't shout\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nI yell, when there's schism you must rebel\nI yell, so you'll hear\nI yell, I refuse to live, in, your hell\nI am what you fear\nI'm the truth, I don't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nKeep it in the family\nDon't even try to tell me what you think is right\nWhen to you blacks are niggers and jews are kikes\nAnd you expect to be taken seriously\nBut your actions, they're more than curiously\nJuvenile, you emulate what you hate\nAnd you don't even know why you feel this way\n'Cause daddy hated this and mommy hated that\nAnd your own ability to reason's like a tire gone flat\nYo, I try to understand what the hell is going on\nI can't imagine how things ever got so far gone\nYou separatists, say you want your own state\nI'll give them a state, a state of unconsciousness\nRetribution, no solution, constitution\nDiscrimination, through the nation, raining hatred\n\nKeep it in the family\nThe real world's outside your door\nYou can't keep it in the family\nYou've got the longest way to fall\n\nWhen you keep it in the, when you keep it in the,\nWhen you keep it in the family\n\nActing out of pure cold hatred\n'Cause of what another's race is\nColor of another's face is\nDifferent, and your own frustrations\nTaking on a violent nature\nFull of hate, so full of hate\nYou'd kill a man is that your fate\nYour street becomes a police state\nWhy the hell do you hate?!\nHate, hate!!!\nI'm not gonna stand for it\nSomeone's gonna pay for it\nI yell, we rebel\nWe're the truth and we won't keep it in the family\nLive your life, take someone else\n\nKeep it in the family\nI'm the thing that you most fear\nI don't keep it in the family\nI am the truth you won't hear\n\nKeep it in the family\nYou can't keep it in the family\nYou've got the longest way to fall\nKeep it in the family\n",
        "position": 11,
    },
    {
        "name": "Blood",
        "time": "07:06",
        "lyrics": "What do you do when something dies\nA life together has ended, your living a lie\nWhen did this act become reality?\nHello conscience, do I laugh or do I cry\nNothing's ever perfect\nThis is just a test\n\nImagine, imagine saying what can be said\nImagine, imagine each word a bullet 'til you're dead\nImagine, imagine killing something you love\nImagine, just think about living inside\n\nBlood on your hands, blood in my eyes\nBlood I can't keep, blood circumscribes\nBlood on your hands turns into blood in my eyes\n\nAnd with the blood I can't keep\nOur lives, blood circumscribes\nBrother on, brother on, brother on, brothers in blood\n\nA wave of hatred comes like the flood\nBrother on brother on, Brothers in blood\nHate is so much easier to feel than love\nBrother on brother on, Brothers in blood\n\nMisery can be so attractive\nWhen making yourself happy is the only alternative\nAt the expense of someone else's life\nDo it for yourself, damn it, do what's right!\n\nImagine, think about living your life\nImagine, think about being stabbed with a dull knife\nImagine, think how sane you'll be when it's through\nImagine, think real hard then do what ya gotta do\n",
        "position": 12,
    },
];