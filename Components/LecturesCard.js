import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export const LecturesCard = (props) => {
    return (
        <View>
            <View style={styles.contain}>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesome5 name="book" solid size={26} color="black" />
                        <Text style={{ marginLeft: 7 }}>80+ Lectures</Text>
                    </View>
                    <View style={{ marginLeft: 100, flexDirection: 'row' }}>
                        <FontAwesome5 name="certificate" solid size={26} color="black" />
                        <Text style={{ marginLeft: 7 }}>Certificates</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <FontAwesome5 name="clock" solid size={26} color="black" />
                        <Text style={{ marginLeft: 7 }}>8 Weeks</Text>
                    </View>
                    <View style={{ marginLeft: 125, flexDirection: 'row' }}>

                        <FontAwesome5 name="star" solid size={26} color="black" />
                        <Text style={{ marginLeft: 7 }}>10% Off</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        width: 430,
        height: 120,
        borderRadius: 30,
        backgroundColor: 'skyblue',
        alignSelf: 'center',
        marginTop: 100
    }
})