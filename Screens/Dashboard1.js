import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { NormalText, Videos } from "../Components";
import { FontAwesome5 } from '@expo/vector-icons';
import { Courses } from "../Components/coursesList";
// import NavigationTabs from "./NavigationTabs";
import * as Location from 'expo-location';




export const DashBoard_1 = (props) => {


    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    const data1 = [
        {
            id: 1,
            text11: 'Graphic Design',
            text: 'By Syed Ali',
            // videoUri : 'https://www.google.com/search?sca_esv=2d1299fed1ffcbfc&rlz=1C1VDKB_enPK1086PK1086&sxsrf=ADLYWIJRFlexONRP09skGvhTXisVz3Vpvg:1716562988769&q=shorts+video&tbm=vid&source=lnms&prmd=vinsbz&sa=X&ved=2ahUKEwjYibi5x6aGAxX39wIHHVnQAZcQ0pQJegQIDhAB&biw=1536&bih=695&dpr=1.25#fpstate=ive&vld=cid:b860dee1,vid:_La_7FeU1Ms,st:0'

        },
        {
            id: 2,
            text11: 'Web Design',
            text: 'By Syed Fahad'

        },
        {
            id: 3,
            text11: 'App Design',
            text: 'By Sana Asghar'

        },
        {
            id: 4,
            text11: 'Figma Design',
            text: 'By Syed Ali'

        },
        {
            id: 5,
            text11: 'Logo Design',
            text: 'By Syed Ali'

        },
        {
            id: 6,
            text11: 'Home Design',
            text: 'By Syed Ali'

        }
    ];

    const courses = ["UI/UX", "Graphic Design", "Figma", "Website Development", "App Development", "AI Projects"];

    const PressHandler = () => {

        props.navigation.navigate("GraphicDesign1")

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <NormalText text={'Welcome,'} />
                <NormalText text={'Fawais'} style={{ marginLeft: 8 }} />
                <Text>{text}</Text>
                <TouchableOpacity onPress={props.press} style={{ marginTop: 50, marginLeft: 130 }}>
                    <FontAwesome5 name="cog" size={24} color="lightgray" />
                </TouchableOpacity>
                <TouchableOpacity onPress={props.press} style={{ marginTop: 50, marginLeft: 20 }}>
                    <FontAwesome5 name="bell" size={24} color="lightgray" />
                </TouchableOpacity>
            </View>
            <View>
                <View style={{ flexDirection: 'row', width: 350, height: 50, borderColor: "lightgray", borderWidth: 1, borderRadius: 20, marginTop: 10, alignSelf: "center" }}>

                    <TouchableOpacity onPress={props.press} style={{ marginLeft: 20, marginTop: 15 }}>
                        <FontAwesome5 name="search" size={24} color="lightgray" />
                    </TouchableOpacity>
                    <TextInput
                        placeholder="Search Here"
                        style={{ marginLeft: 20, fontSize: 16, }} />

                </View>
                <FlatList
                    data={courses}
                    renderItem={({ item }) => <Courses item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.FlatListContainer}
                />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <NormalText text={'Continue Watching'} style={{ marginTop: 30, fontSize: 18 }} />
                <TouchableOpacity>
                    <Text style={{ alignSelf: 'flex-end', color: 'gray', marginTop: 35, marginLeft: 150, fontSize: 16 }}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data1}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={PressHandler}>
                        <Videos item={item} />
                    </TouchableOpacity>}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                navigation={props.navigation}
                style={{ marginVertical: 10 }}


            />

        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        alignSelf: "center",
        marginHorizontal: 14
    },
    FlatListContainer: {
        marginVertical: 10
    }
})