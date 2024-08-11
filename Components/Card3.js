import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';


export default function Card3(props) {
    return (
        <View style={{
            width: 370,
            backgroundColor: 'lightblue',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#CDCDCD',
            height: 80,
            paddingLeft: 15,
            marginTop: 20,
            marginHorizontal: 12,
            flexDirection:'row',
            alignItems:'center',
            ...props.style
        }}>

                <FontAwesome5 name={props.name} solid size={24} color="black" />

            <Text style={{marginLeft:10}}>{props.text}</Text>
            <View style={{marginTop:35, marginLeft:-145 , color:'gray', flexDirection:'row'}}>
            <Text style={{color:'gray', fontSize:10}} >{props.text2}</Text>
            <Text style={{color:'gray', fontSize:10,marginLeft:130}}>{props.time}</Text>

            </View>


        </View>
    )
}