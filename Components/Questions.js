import React from "react";
import { View,Text,StyleSheet } from "react-native";

export const Questions = (props)=>{
    return(
        <View style={styles.container}>
            <Text>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width:400,
        height:60,
        backgroundColor:'lightblue',
        borderRadius:30,
        borderWidth:1,
        borderColor:'gray',
        justifyContent:'center',
        alignItems:'center'
    }
})