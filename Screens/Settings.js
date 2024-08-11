import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Back } from '../Components'
import { FontAwesome5 } from '@expo/vector-icons';
import SettingCard from '../Components/SettingCard';


export default function Settings(props) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
      <Back press={() => props.navigation.navigate("Dashboard1")} />

      <Text style={{ marginTop: 48, marginLeft: 80, fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} style={{ marginTop: 50, marginLeft: 160 }}>
        <FontAwesome5 name="cog" size={24} solid color="black"  />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Notifications")} style={{ marginTop: 50, marginLeft: 20 }}>
        <FontAwesome5 name="bell" size={24} solid  color="lightgray"  />
      </TouchableOpacity>
    </View>
    <SettingCard />
    </View>
  )
}