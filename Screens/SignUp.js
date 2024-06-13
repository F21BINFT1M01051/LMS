import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back, Password } from "../Components";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../Firebase";


export const Sign_Up = (props) => {
    const db = getFirestore(db);


    const auth = getAuth();

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [address, setaddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Pressed = async () => {
        const docRef = await addDoc(collection(db, 'users'), {
            firstName,
            lastName,
            address,
            email
        });



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("New User Created")
                props.navigation.navigate("SignIn")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                // ..
            });
    }
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Back press={() => props.navigation.navigate("Join")} />

                <View>
                    <PrimaryText text={'Sign Up'} style={{ marginTop: 80, fontSize: 30 }} />
                    <SecondaryText text={'Create an account to begin your'} />
                    <SecondaryText text={'your learning journey'} />

                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.text3}>First Name</Text>
                    <TextInput style={styles.input} placeholder="Your First Name " onChangeText={(t) => setfirstName(t)} />
                    <Text style={styles.text3}>Last Name</Text>
                    <TextInput style={styles.input} placeholder="Your Last Name " onChangeText={(t) => setlastName(t)} />
                    <Text style={styles.text3}>Adress</Text>
                    <TextInput style={styles.input} placeholder="Your Address" onChangeText={(t) => setaddress(t)} />
                    <Text style={styles.text3}>Email</Text>
                    <TextInput style={styles.input} placeholder="Your Email here" onChangeText={(t) => setEmail(t)} />
                    <View>
                        <Password text={'New Password'} onChangeText={t => setPassword(t)} />
                        <Password text={'Confirm Password'} onChangeText={t => setPassword(t)} />
                    </View>
                </View>
                <View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity style={[styles.btn2]} onPress={Pressed} >
                            <View>
                                <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 10 }}>SIGN UP</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 30, marginTop: 15 }}>
                        <View style={styles.line} />

                        <Text style={styles.text5}>Or Sign in with</Text>
                        <View style={styles.line} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <View style={styles.circularIcon}>
                            <Icon name="facebook" size={25} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.text6}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("SignIn")}>
                        <Text style={styles.text7}>Sign in Here</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

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
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10,
        padding: 10,
    },
    input: {
        width: 360,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 7,
        alignSelf: 'center',
        paddingHorizontal: 10,
        marginBottom: 10
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
    text6: {
        marginTop: 20,
        marginLeft: 70,
    },
    text7: {
        marginTop: 20,
        marginLeft: 10,
        fontWeight: '700'

    },
    line: {
        width: '28%',
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
        marginHorizontal: 5
    },
    circularIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'black', // Facebook blue
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25
    },

})