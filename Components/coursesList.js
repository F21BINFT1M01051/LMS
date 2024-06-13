import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export const Courses = ({ item }) => {
    return (
        <View>
            <TouchableOpacity>
                <View style={styles.courseContainer}>
                    <Text style={styles.text}>{item}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    courseContainer: {
        height: 40,
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: "center",
        paddingHorizontal: 14,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical:15,
        marginLeft:22,
        marginRight:5
    },
    text: {
        alignSelf: "center",
        marginTop:8
    }
});
