import React from "react";
import { View, } from "react-native";
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back } from "../Components";

const img1 = require("../assets/img4.jpeg");

export const Splash4 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("Splash3")} />
            <Skip btnTitle="SKIP" onPress={() => props.navigation.navigate("Join")} />
            <View>
                <Images Imgsrc={img1} />
            </View>
            <View style={{ marginTop: 25 }}>
                <PrimaryText text={'Join a community of learners and'} />
                <PrimaryText text={'embark on a learning adventure'} />
                <SecondaryText text={'Connect with like-minded individuals'} />
                <SecondaryText text={'Join us to learn, grow and thrive'} />
                <SecondaryText text={'together!'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                <Dot />
                <Dot />
                <Dot />
                <Dot style={{ backgroundColor: 'black' }} />
            </View>
            <Buttons btnTitle="CONTINUE" onPress={() => props.navigation.navigate("Join")} />
        </View>
    )
}
