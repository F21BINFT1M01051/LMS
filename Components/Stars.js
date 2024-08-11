import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Stars = (props) => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="star" solid size={8} color="black" style={{ marginLeft: 14, marginTop:5 }} />
                <FontAwesome5 name="star" solid size={8} color="black" style={{marginTop:5}} />
                <FontAwesome5 name="star" solid size={8} color="black" style={{marginTop:5}} />
                <FontAwesome5 name="star" solid size={8} color="black" style={{marginTop:5}} />
                <FontAwesome5 name="star" solid size={8} color="black" style={{marginTop:5}} />
            </View>
        </View>
    )
}