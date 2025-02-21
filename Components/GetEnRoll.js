import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export const GetEnRoll = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{...styles.btn, ...props.style}}>
                <Text style={{...styles.btnText, ...props.style}}>{props.btnTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        // marginTop:30,
        width:350,
        borderRadius:10,
        height:50,
        alignSelf:'center',
        backgroundColor:'black',
        borderColor:'black',
        borderWidth:2,
        marginBottom:20
    },
    btnText:{
        color:'white',
        textAlign:'center',
        paddingVertical:13


    }

})