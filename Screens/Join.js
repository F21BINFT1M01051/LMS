import React from "react";
import { useState } from "react";
import { View, } from "react-native";
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back } from "../Components";

export const Join = ( props ) => {
    const [buttonColor, setButtonColor] = useState('black');


    const handlePress = () => {
        setButtonColor(buttonColor === 'black' ? 'white' : 'black');
        props.navigation.navigate('SignIn');
    };

    const handlePress2 = () => {
        setButtonColor(buttonColor === 'black' ? 'white' : 'black');
        props.navigation.navigate('SignUp');
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("Splash4")} />

            <View style={{ marginTop: 270 }}>
                <PrimaryText
                    text={'Join IT Group to Kick Star Your'} />
                <PrimaryText text={'Lesson'} />
                <SecondaryText text={'Join and learn from our Top Instructors!'} />
            </View>
            <View style={{ flexDirection: 'row', margin: 20, padding: 10 }}>
                <Buttons btnTitle="Sign In" onPress={handlePress} />
                <View style={{ marginLeft: 15 }}>
                    <Buttons btnTitle="Sign Up" onPress={handlePress2} style={{ backgroundColor: 'white', color: 'black', borderRadius: 10 }} />
                </View>


            </View>

        </View>
    )
}
