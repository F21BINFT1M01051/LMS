import React from "react";
import { View, StyleSheet, Image } from "react-native";

export const Images = (props) => {
    return (
        <View>
            <Image source={props.Imgsrc} style={styles.imagestyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    imagestyle: {
        width: 300,
        height: 300,
        borderRadius: 170,
        backgroundColor: "grey",
        marginTop: 80,
        alignSelf: 'center',
        borderWidth: 7,
        borderColor: "lightgrey"
    },
})