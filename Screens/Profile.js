import { View, Text } from 'react-native'
import React from 'react'
import { Back } from '../Components';
import { FontAwesome5 } from '@expo/vector-icons';

export default function UserProfile(props) {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Back press={() => props.navigation.navigate("Dashboard1")} />

        <Text style={{ marginTop: 48, marginLeft: 80, fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
      </View>
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
            <View style={{ width: 90, height: 90, borderRadius: 45, backgroundColor: 'gray', marginLeft: 135, marginTop: -40 }} ></View>
            <FontAwesome5 name="pen" size={20} solid  color="gray" style={{marginLeft:330, marginTop:-20}} />

            <View style={{alignItems:'center', marginTop:5}}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Name Here</Text>
              <Text>Tag Line</Text>
            </View>
            <View style={{marginLeft:10, marginTop:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>About Me</Text>
            <Text style={{color:"gray"}}>Lorem ipsum doller site config. Draw the proposal and publishe the native components in react. Its great working.</Text>
            </View>
            <View style={{marginLeft:10, marginTop:20}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>My Skills</Text>
              <Text></Text>
            </View>

      </View>
    </View>
  )
}