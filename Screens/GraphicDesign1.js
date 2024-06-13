import React from "react";
import { View, Text } from "react-native";
import { Back, Buttons, VideoPlay } from "../Components";
import VideoTabs from "./MyTabs";
import Screen1 from "./Screen1";

export const GraphicDesign_1 = (props) => {
    return (
        <View>
            <VideoPlay />
            <Back press={() => props.navigation.navigate("SignIn")} style={{ color: "white" }} />

            <VideoTabs />
            <Text>Hello World</Text>
            <Buttons btnTitle = {'get enroll'} />
        </View>
    )
}