import React from "react";
import { View, TouchableOpacity, StyleSheet, Text , Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';


export const Videos = (props) => {
    const item = props.item;

    // const img1 = require("../assets/img3.jpg");

    return (
        <View>
            <View style={styles.container}>
                <Image source={item.img}  style={{width:170, height:170}} />

            </View>

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, marginTop: 10, marginLeft: 5 }}> {item.text11} </Text>
                <FontAwesome5 name="star" solid size={7} color="black" style={{ marginTop: 14, marginLeft: 30 }} />
                <FontAwesome5 name="star" solid size={7} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={7} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={7} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={7} color="black" style={{ marginTop: 14 }} />
            </View>
            <View>
                <Text style={styles.text}>{item.text}</Text>
                <Text style={styles.text2}>45% Done</Text>
            </View>
            <Progress.Bar progress={0.3} width={155} color="black" height={4} borderColor="white" borderRadius={10} unfilledColor="lightgray" style={{marginLeft:8}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 170,
        backgroundColor: 'gray',
        borderRadius: 20,
        marginTop: 20
    },
    text: {
        fontSize: 10,
        color: 'lightgray',
        marginLeft: 11,
        marginTop: 4
    },
    text2: {
        fontSize: 8,
        color: 'lightgray',
        marginTop: 2,
        marginLeft: 128
    },
    line: {
        width: 78, // Adjust the width as needed
        height: 4,
        backgroundColor: 'black',
        marginTop: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: 10
    },
    line2: {
        width: 76, // Adjust the width as needed
        height: 4,
        backgroundColor: 'gray',
        marginTop: 2,
        borderRadius: 20,
        marginLeft:-3
    },
})