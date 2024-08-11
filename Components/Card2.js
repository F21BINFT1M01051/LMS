import { View, Text,TextInput } from 'react-native'
import React from 'react'

export default function Card2(props) {
    return (
        <View style={{
            width: 370,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#CDCDCD',
            height: 80,
            paddingLeft:10,
            marginTop: 20,
            marginHorizontal: 12,
            justifyContent:'center',
            ...props.style
        }}>
            <TextInput placeholder= {props.text} />

        </View>
    )
}