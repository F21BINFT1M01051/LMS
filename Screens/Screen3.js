import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Questions, GetEnRoll, VideoPlay, Stars } from '../Components';
import { FontAwesome5 } from '@expo/vector-icons';

const Screen3 = (props) => {
  return (
    <ScrollView>
      <View>
        <View style={{
          width: 370,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          marginTop: 10,
          marginHorizontal: 12,
          marginBottom:10
        }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: 25, marginLeft: 20, marginTop: 20 }}></View>
            <Text style={{ marginTop: 30, marginLeft: 10 }}>Muhammad Arslan</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginLeft: 90, marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
            </View>
          </View>
          <Text style={{ marginLeft: 80, marginTop: -25, color: 'gray', fontSize: 12 }}>Student</Text>
          <Text style={{ marginTop: 30, marginHorizontal: 20, marginBottom: 30 }}>Hello World lLorem ipsum doller site course is so understandable. eassy and project based</Text>
        </View>
        <View style={{
          width: 370,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          marginTop: 10,
          marginHorizontal: 12,
          marginBottom:10

        }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: 25, marginLeft: 20, marginTop: 20 }}></View>
            <Text style={{ marginTop: 30, marginLeft: 10 }}>Muhammad Arslan</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginLeft: 90, marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
            </View>
          </View>
          <Text style={{ marginLeft: 80, marginTop: -25, color: 'gray', fontSize: 12 }}>Student</Text>
          <Text style={{ marginTop: 30, marginHorizontal: 20, marginBottom: 30 }}>Hello World lLorem ipsum doller site course is so understandable. eassy and project based</Text>
        </View>
        <View style={{
          width: 370,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          marginTop: 10,
          marginHorizontal: 12,
          marginBottom:10

        }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: 25, marginLeft: 20, marginTop: 20 }}></View>
            <Text style={{ marginTop: 30, marginLeft: 10 }}>Muhammad Arslan</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginLeft: 90, marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
            </View>
          </View>
          <Text style={{ marginLeft: 80, marginTop: -25, color: 'gray', fontSize: 12 }}>Student</Text>
          <Text style={{ marginTop: 30, marginHorizontal: 20, marginBottom: 30 }}>Hello World lLorem ipsum doller site course is so understandable. eassy and project based</Text>
        </View>
        <View style={{
          width: 370,
          backgroundColor: 'lightblue',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          marginTop: 10,
          marginHorizontal: 12,
          marginBottom:10

        }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'gray', borderRadius: 25, marginLeft: 20, marginTop: 20 }}></View>
            <Text style={{ marginTop: 30, marginLeft: 10 }}>Muhammad Arslan</Text>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginLeft: 90, marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
              <FontAwesome5 name="star" solid size={8} color="black" style={{ marginTop: 35 }} />
            </View>
          </View>
          <Text style={{ marginLeft: 80, marginTop: -25, color: 'gray', fontSize: 12 }}>Student</Text>
          <Text style={{ marginTop: 30, marginHorizontal: 20, marginBottom: 30 }}>Hello World lLorem ipsum doller site course is so understandable. eassy and project based</Text>
        </View>
        
      </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


export default Screen3;
