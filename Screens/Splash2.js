import React from "react";
import { View,} from "react-native";
import { PrimaryText, SecondaryText, Images, Dot, Buttons, Skip, Back } from "../Components";

const img1 = require("../assets/img2.jpg");

export const Splash2 = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("Splash1")} />
            <Skip btnTitle="SKIP" onPress={() => props.navigation.navigate("Join")} />
            <View>
                <Images Imgsrc={img1} />
            </View>
            <View style={{ marginTop: 25 }}>
                <PrimaryText text = {'Begin your learning journey and'} />
                <PrimaryText text = {'unlock a world of knowledge'} />
                <SecondaryText text = {'Explore our comprehensive courses'} />
                <SecondaryText text = {'designed to transform your skills and'} />
                <SecondaryText text = {'career'} />
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
              <Dot />
              <Dot style={{backgroundColor:'black'}} />
              <Dot />                
              <Dot />
            </View>
            <Buttons btnTitle="CONTINUE" onPress={() => props.navigation.navigate("Splash3")} />
        </View>
    )
}
