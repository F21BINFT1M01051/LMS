import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export const Skip = ({btnTitle, onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{btnTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        width:50,
        borderRadius:20,
        height:25,
        alignSelf:'flex-end',
        backgroundColor:'lightgrey',
        marginTop:50,
        marginRight:10
    },
    btnText:{
        color:'black',
        textAlign:'center',
        paddingVertical:3


    }

})