import React from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { Back, GetEnRoll, VideoPlay } from "../Components";
import PagerView from 'react-native-pager-view';
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";


export const GraphicDesign_1 = (props) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Uncomment these if you have the components correctly defined */}
                <VideoPlay />
                <Back press={() => props.navigation.navigate("SignIn")} style={{ color: "white" }} />
                <View style={{ flexDirection: 'row', margin: 20 }}>
                    <TouchableOpacity>
                        <Text style={styles.header}>OverView</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.header}>Lessons</Text>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.header}>Reviews</Text>

                    </TouchableOpacity>

                </View>
                <PagerView style={styles.pagerView} initialPage={0}>
                    <View style={styles.page} key="1">
                        {/* <Text>First page</Text> */}
                        {/* <Text>Swipe ➡️</Text> */}
                        <Screen1 />
                    </View>
                    <View style={styles.page} key="2">
                        {/* <Text>Second page</Text> */}
                        <Screen2 />
                    </View>
                    <View style={styles.page} key="3">
                        {/* <Text>Third page</Text> */}
                        <Screen3 />
                    </View>
                </PagerView>
                <GetEnRoll btnTitle={'GET ENROLL'} onPress={() => props.navigation.navigate("GetEnrollScreen")} />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    pagerView: {
        flex: 1,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:30
        // alignSelf:'center'
    }
});
