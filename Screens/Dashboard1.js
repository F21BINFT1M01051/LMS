import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { NormalText, Videos } from "../Components";
import { FontAwesome5 } from '@expo/vector-icons';
import { Courses } from "../Components/coursesList";
import * as Location from 'expo-location';
import { getFirestore, doc, getDoc, setDoc, addDoc, collection, getDocs, } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";




export const DashBoard_1 = (props) => {
    const auth = getAuth();

    const db = getFirestore();
    const [documentData, setDocumentData] = useState(null);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserId(user.uid);
            } else {
                console.log('No user signed in');
            }
        });

        return () => unsubscribe();
    }, []);


   useEffect(() => {
        if (userId) {
            getDocument(userId);
        }
    }, [userId]);

    const getDocument = async (id) => {
        const docRef = doc(db, "users", id); // replace 'your-document-id' with the actual document ID
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setDocumentData(docSnap.data());
        } else {
            console.log("No such document!");
        }
    };

    // const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);

    // useEffect(() => {
        // getDocument();
        // (async () => {

        //     let { status } = await Location.requestForegroundPermissionsAsync();
        //     if (status !== 'granted') {
        //         setErrorMsg('Permission to access location was denied');
        //         return;
        //     }

        //     let location = await Location.getCurrentPositionAsync({});
        //     setLocation(location);
        // })();
    // }, []);

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }

    const data1 = [
        {
            id: 1,
            text11: 'Graphic Design',
            text: 'By Syed Ali',
            img: require( '../assets/graphic.jpg')

        },
        {
            id: 2,
            text11: 'Web Design',
            text: 'By Syed Fahad',
            img: require( '../assets/web.jpg')


        },
        {
            id: 3,
            text11: 'App Design',
            text: 'By Sana Asghar',
            img: require( '../assets/app.jpg')


        },
        {
            id: 4,
            text11: 'Figma Design',
            text: 'By Syed Ali',
            img: require( '../assets/figma.png')


        },
        {
            id: 5,
            text11: 'Logo Design',
            text: 'By Syed Ali',
            img: require( '../assets/loging.jpg')


        },
        {
            id: 6,
            text11: 'AI Course',
            text: 'By Syed Ali',
            img: require( '../assets/AI.jpeg')


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
                <NormalText text={documentData ? documentData.firstName : 'Loading...'} style={{ marginLeft: 8 }} />



                {/* ---------------------Location --------------- */}
                {/* <Text>{text}</Text> */}
                <TouchableOpacity onPress={()=>props.navigation.navigate("Settings")} style={{ marginTop: 50, }}>
                    <FontAwesome5 name="cog" size={24} color="lightgray" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Notifications")} style={{ marginTop: 50, }}>
                    <FontAwesome5 name="bell" size={24} solid color="lightgray" />
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