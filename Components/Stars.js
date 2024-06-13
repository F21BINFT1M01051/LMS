import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Stars = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <FontAwesome5 name="star" solid size={12} color="black" style={{ marginTop: 14, marginLeft: 30 }} />
                <FontAwesome5 name="star" solid size={12} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={12} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={12} color="black" style={{ marginTop: 14 }} />
                <FontAwesome5 name="star" solid size={12} color="black" style={{ marginTop: 14 }} />
            </View>
        </View>
    )
}