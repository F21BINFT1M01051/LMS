import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { Back } from '../Components';
import Card4 from '../Components/Card4';

export default function Courses(props) {

  const data1 = [
    {
        id: 1,
        text11: 'Graphic Design',
        text: 'By Syed Ali',
        img: '../assets/graphic.jpg',
        progress : 0.2

    },
    {
        id: 2,
        text11: 'Web Design',
        text: 'By Syed Fahad',
        img: '../assets/web.jpg',
        progress: 0.3


    },
    {
        id: 3,
        text11: 'App Design',
        text: 'By Sana Asghar',
        img: '../assets/app.jpg',
        progress: 0.5


    },
    {
        id: 4,
        text11: 'Figma Design',
        text: 'By Syed Ali',
        img: '../assets/figma.png',
        progress: 0.7


    },
];

const PressHandler = () => {

  props.navigation.navigate("GraphicDesign1")

}

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Back press={() => props.navigation.navigate("Dashboard1")} />

        <Text style={{ marginTop: 48, marginLeft: 80, fontSize: 18, fontWeight: 'bold' }}>My Courses</Text>   
       </View>
       <FlatList
                data={data1}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={PressHandler}>
                        <Card4 item={item} />
                    </TouchableOpacity>}
                keyExtractor={item => item.id.toString()}
                

            />

    </View>
  )
}