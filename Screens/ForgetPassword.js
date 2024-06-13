import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { PrimaryText, SecondaryText, Back, Password } from "../Components";
import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";

export const ResetPassword = (props) => {
    const auth = getAuth();
    const [newPassword, setnewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Pressed = () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = auth.currentUser;

        updatePassword(user, newPassword).then(() => {
            alert("Password updated successfully");
            props.navigation.navigate("UpdatePassword");
        }).catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("SignIn")} />

            <View>
                <PrimaryText text={'Reset Password'} style={{ marginTop: 130, fontSize: 30 }} />
                <SecondaryText text={'At least 9 characters with uppercase and lowercase'} style={{ fontSize: 14, marginTop: 5 }} />
                <SecondaryText text={'letters'} style={{ fontSize: 14 }} />
            </View>
            <View style={{ marginTop: 50 }}>
                <Password text={'New Password'} onChangeText={(t) => setnewPassword(t)} />

                <Password text={'Confirm Password'} onChangeText={(t) => setConfirmPassword(t)} />
            </View>
            <View>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity style={[styles.btn2]} onPress={Pressed}>
                        <View>
                            <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 10 }}>DONE</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        alignSelf: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 150,
        marginBottom: 10
    },
    text2: {
        alignSelf: 'center',

    },
    text3: {
        marginLeft: 20,
        fontSize: 15,
        fontWeight: '500'
    },
    input: {
        width: 360,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 7,
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        padding: 10,
    },
    text4: {
        alignSelf: 'flex-end',
        color: 'grey',
        marginRight: 22
    },
    text5: {
        alignSelf: 'center',

    },
    btn2: {
        width: 340,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 7,
        alignSelf: 'center',
        backgroundColor: 'black',

    },

})