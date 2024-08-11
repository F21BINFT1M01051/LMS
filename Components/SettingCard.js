import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

export default function SettingCard(props) {
    return (
        <View style={{
            width: 370,
            backgroundColor: 'lightblue',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#CDCDCD',
            height: 380,
            marginTop: 120,
            marginHorizontal: 12,
            ...props.style
        }}>
            <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: 'gray', marginLeft: 130, marginTop: -40 }} ></View>
            <View style={{ marginTop: 20, marginLeft:20}}>
                <TouchableOpacity style = {{flexDirection:'row', marginBottom:20}}>
                    <FontAwesome5 name="user" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Edit Profile</Text>
                    <FontAwesome5 name="angle-right" size={24} solid color="black" style={{marginLeft:200}} />
               </TouchableOpacity>
               <TouchableOpacity style = {{flexDirection:'row', marginBottom:20}}>
               <FontAwesome5 name="credit-card" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Payment Options</Text>
                    <FontAwesome5 name="angle-right" size={24} solid color="black" style={{marginLeft:155}} />
               </TouchableOpacity>
               <TouchableOpacity style = {{flexDirection:'row', marginBottom:20}}>
               <FontAwesome5 name="clipboard" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Terms & Conditions</Text>
                    <FontAwesome5 name="angle-right" size={24} solid color="black" style={{marginLeft:150}} />
               </TouchableOpacity>
               <TouchableOpacity style = {{flexDirection:'row', marginBottom:20}}>
               <FontAwesome5 name="headset" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Help Center</Text>
                    <FontAwesome5 name="angle-right" size={24} solid color="black" style={{marginLeft:193}} />
               </TouchableOpacity>
               <TouchableOpacity style = {{flexDirection:'row', marginBottom:20}}>
               <FontAwesome5 name="share" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Invite Friends</Text>
                    <FontAwesome5 name="angle-right" size={24} solid color="black" style={{marginLeft:183}} />
               </TouchableOpacity>
               <TouchableOpacity style = {{flexDirection:'row'}}>
                    <FontAwesome5 name="arrow-left" size={24} solid color="black" />
                    <Text style = {{marginLeft:20, marginTop:5, fontWeight : "bold"}}>Logout</Text>
                    <FontAwesome5 name="angle-right" size={24}  color="black" style={{marginLeft:225}} />
               </TouchableOpacity>


            </View>
            

        </View>
    )
}