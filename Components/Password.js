import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Password = (props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View>
            <Text style={styles.text3}>{props.text}</Text>
            <View style={styles.passwordContainer}>
                <TextInput
                    onChangeText={props.onChangeText}
                    style={styles.passwordInput}
                    secureTextEntry={!isPasswordVisible}
                    value={props.value}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                    <Icon name={isPasswordVisible ? "eye" : "eye-slash"} size={20} color="grey" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text3: {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: '500',
        marginTop:10
    },
    
    passwordContainer: {
        width: 360,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 7,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    passwordInput: {
        flex: 1
    },
    eyeIcon: {
        padding: 10
    },

})