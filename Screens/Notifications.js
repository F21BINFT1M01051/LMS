import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Back } from '../Components';
import Card3 from '../Components/Card3';



export default function Notifications(props) {
  return (
    <View>
    <View style={{ flexDirection: "row" }}>
      <Back press={() => props.navigation.navigate("Dashboard1")} />

      <Text style={{ marginTop: 48, marginLeft: 80, fontSize: 18, fontWeight: 'bold' }}>Notifications</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} style={{ marginTop: 50, marginLeft: 120 }}>
        <FontAwesome5 name="cog" size={24} color="lightgray"  />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Notifications")} style={{ marginTop: 50, marginLeft: 20 }}>
        <FontAwesome5 name="bell" size={24} solid color="black"  />
      </TouchableOpacity>
    </View>
    <View style={{width:30, height:30, borderRadius:15, backgroundColor:'black', marginLeft:30, alignItems:'center', justifyContent:'center', marginTop:20}}>
    <FontAwesome5 name="check" size={20}  color="white"  />

    </View>
    <View>
<Card3 name={"thumbs-up"} text={'Transaction Completed'} text2={'lorem Ipsum doller site been'}  time = {'5 min ago'} />
<Card3 name={"check"} text={'Lorem Ipsum Doller Site'} text2={'lorem Ipsum doller site been'}  time = {'5 min ago'} />
<Card3 name={"check"} text={'Lorem Ipsum Doller Site'} text2={'lorem Ipsum doller site been'}  time = {'5 min ago'} />

    </View>
    </View>
  )
}