import React from "react";
import { View } from "react-native";
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back } from "../Components";

const img1 = require("../assets/img3.jpg");

export const Splash3 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("Splash2")} />
            <Skip btnTitle="SKIP" onPress={() => props.navigation.navigate("Join")} />
            <View>
                <Images Imgsrc={img1} />
            </View>
            <View style={{ marginTop: 25 }}>
                <PrimaryText text={'Dive into seamless learning'} />
                <PrimaryText text={'experience with IT Group'} />
                <SecondaryText text={'Experience interactive learning with'} />
                <SecondaryText text={'expert-led courses and progress'} />
                <SecondaryText text={'tracking'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                <Dot />
                <Dot />
                <Dot style={{ backgroundColor: 'black' }} />
                <Dot />
            </View>
            <Buttons btnTitle="CONTINUE" onPress={() => props.navigation.navigate("Splash4")} />
        </View>
    )
}