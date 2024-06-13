import React from "react";
import { View, StyleSheet, Text } from "react-native";


export const PrimaryText = (props) => {
    return(
        <Text style={{...styles.text1, ...props.style}}>{props.text}</Text>
    )
}


const styles = StyleSheet.create({
    text1 : {
        fontSize:22,
        fontWeight:"bold",
        alignSelf:'center'
    },
})