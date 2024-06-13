import React from "react";
import {View, Text, StyleSheet} from "react-native";

export const NormalText = (props) => {
    return(
        <View>
            <Text style = {{...styles.text, ...props.style}}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        fontSize:20,
        fontWeight:'bold',
        marginTop : 50,
        marginLeft: 20
    }
})