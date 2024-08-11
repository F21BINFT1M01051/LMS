import { View, Text } from 'react-native'
import React from 'react'
import { Back, GetEnRoll, Images, } from "../Components";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentScreen3(props) {
    const img1 = require("../assets/img1.jpg");

    return (
        <SafeAreaView>
            <Back press={() => props.navigation.navigate("PaymentScreen2")} />

            <Text style={{marginTop:150, fontSize:22,marginLeft:70}}>Transaction Completed!</Text>
            <Images Imgsrc={img1} />
            <View style={{ marginTop: 150 }}>
                <GetEnRoll btnTitle={'CONTINUE'} onPress={() => props.navigation.navigate("PaymentScreen3")} />

            </View>
        </SafeAreaView>
    )
}