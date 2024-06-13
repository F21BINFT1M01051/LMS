import React from "react";
import { View, StyleSheet, Text} from "react-native";

export const  Dot = (props) =>{
    return(
        <Text style={{...styles.dot, ...props.style}}></Text>

    )

}

const styles = StyleSheet.create({
    dot:{
        width:10,
        height:10,
        backgroundColor:"lightgrey",
        borderRadius:5,
        margin:3
        
    },
})