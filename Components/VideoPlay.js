import React from "react";
import { View, StyleSheet , Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const VideoPlay = (props) => {
    img1 = require("../assets/graphic.jpg")

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image source = {img1} style = {{height:198,width:387}}  />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'black',
        width: 'auto',
        marginTop: 5,
        marginHorizontal: 2

    }
})