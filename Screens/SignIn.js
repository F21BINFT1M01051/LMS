import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back, Password } from "../Components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, doc, getDoc, setDoc, addDoc, collection, getDocs, } from "firebase/firestore";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { LoginButton, AccessToken } from 'react-native-fbsdk-next';


export const Sign_In = (props) => {

    const provider = new FacebookAuthProvider();

    const auth = getAuth();
    const db = getFirestore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [allUsers, setAllUsers] = useState([]);


    const _storeUserCredentials = async () => {
        try {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            console.log('Credentials stored successfully');

        }
        catch (e) {
            console.log(e)
        }

    };

    const _getUserCredentials = async () => {
        try {
            let email = await AsyncStorage.getItem('email');
            let password = await AsyncStorage.getItem('password');
            console.log('Credentials fetched', { email, password });
            return { email, password };
        }
        catch (e) {
            console.log(e);
            return { email: '', password: '' };

        }
    };

    useEffect(() => {
        const fetchCredentials = async () => {
            const credentials = await _getUserCredentials();
            if (credentials.email && credentials.password) {
                setEmail(credentials.email);
                setPassword(credentials.password);
            }
            console.log(email, password)
        };

        fetchCredentials();
    }, []);

    const Pressed = () => {
        if (password && email) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    alert("Succefuly Loged in");
                    _storeUserCredentials();
                    props.navigation.navigate("NavigationTabs")
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        }
        else {
            console.alert("Wrong Information")
        }

    };

    useEffect(() => {
        const fetchSingleUser = async () => {
            docRef = doc(db, 'users', 'userId');
            const users = [];

            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserData(docSnap.data())
            } else {
                console.log('no such document')
            }
            setAllUsers(users);
        };

        fetchSingleUser()
    }, [db]);

    // const navigateToScreen2 = () => {
    //     props.navigation.navigate('Screen2', { allUsers });
    // }

    const FacebookAuth = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            
            // The signed-in user info.
            const user = result.user;
    
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
    
            console.log('Facebook Access Token:', accessToken);
            console.log('User Info:', user);
            
            // Navigate to another screen or perform other actions
            props.navigation.navigate("NavigationTabs");
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
    
            console.log('Error Code:', errorCode);
            console.log('Error Message:', errorMessage);
            console.log('Error Email:', email);
            console.log('Credential:', credential);
    
            alert(`Facebook Auth Failed: ${errorMessage}`);
        }
    }
    


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("Join")} />

            <View>
                <PrimaryText text={'Sign in'} style={{ marginTop: 80, fontSize: 30 }} />
                <SecondaryText text={'Please Sign in with your account'} />
            </View>
            <View style={{ marginTop: 60 }}>
                <Text style={styles.text3}>Email here</Text>
                <TextInput style={styles.input} onChangeText={(t) => setEmail(t)} value={email} />
                <Password text={'Password'} onChangeText={t => setPassword(t)} value={password} />
                <TouchableOpacity onPress={() => props.navigation.navigate("ResetPassword")}>
                    <Text style={styles.text4} >Forget Password?</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <Buttons btnTitle={'SIGN IN'} style={{ width: 340 }} onPress={Pressed} />
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30, marginTop: 15 }}>
                    <View style={styles.line} />

                    <Text style={styles.text5}>Or Sign in with</Text>
                    <View style={styles.line} />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btn2} onPress={FacebookAuth}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="facebook" size={30} color="white" style={{ marginLeft: 25, marginTop: 8 }} />
                        <Text style={{ color: 'white', fontSize: 18, marginTop: 10, marginLeft: 20 }}>Sign In with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={[styles.btn2, styles.btngoogle]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="google" size={30} style={{ marginLeft: 25, marginTop: 8 }} />

                        <Text style={{ fontSize: 18, marginTop: 10, marginLeft: 20 }}>Sign In with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.text6}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("SignUp")}>
                    <Text style={styles.text7}>Sign up Here</Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text1: {
        alignSelf: 'center',
        fontSize: 34,
        fontWeight: 'bold',
        marginTop: 80
    },
    text2: {
        alignSelf: 'center',
        marginTop: 10

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
    text4: {
        alignSelf: 'flex-end',
        color: 'grey',
        marginRight: 22
    },
    btn1: {
        width: 350,
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
    btngoogle: {
        backgroundColor: 'white'
    },
    text6: {
        marginTop: 50,
        marginLeft: 70,
    },
    text7: {
        marginTop: 50,
        marginLeft: 10,
        fontWeight: '700'

    },
    line: {
        width: '28%', // Adjust the width as needed
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
        marginHorizontal: 5
    },


})