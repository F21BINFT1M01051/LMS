import React from "react";
import { View, StyleSheet, Text } from "react-native";


export const SecondaryText = (props) => {
    return (
        <Text style={{...styles.text2, ...props.style}}>{props.text}</Text>
    )
}


const styles = StyleSheet.create({
    text2: {
        fontSize: 18,
        alignSelf: 'center'
    },
})