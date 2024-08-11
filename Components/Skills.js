import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Skills = ({ item }) => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{item}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 110,
        height: 40,
        borderRadius: 20,
        borderColor: 'gray',
        textAlign: 'center',
        marginLeft:15,
        borderWidth:1,
        alignSelf:'center',
        marginBottom:5,
        alignItems:'center',
        justifyContent:'center'
        // backgroundColor:'red'
    },
    text :{
        alignSelf:'center',
        fontSize:12
        
    }
})