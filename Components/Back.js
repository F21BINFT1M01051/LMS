import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Back = (props) => {
    return (
        <TouchableOpacity onPress={props.press} style={styles.backButton}>
            <Icon name="arrow-left" size={20} color="#333333"  />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        padding: 10,
    },
})