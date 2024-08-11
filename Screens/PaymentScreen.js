import { View, Text, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GetEnrollCard from '../Components/GetEnrollCard'
import Card from '../Components/Card'
import { GetEnRoll } from '../Components/GetEnRoll'
import { Back } from '../Components'


export default function PaymentScreen(props) {
    return (
        <SafeAreaView>
            <Back press={() => props.navigation.navigate("GetEnrollScreen")} />

            <View>

                <GetEnrollCard />
                <Text style={{fontSize:25,marginTop:20,marginLeft:20, marginBottom:20}}>Select Payment Method</Text>
                <Card text={'EasyPaisa'} press={() => props.navigation.navigate("PaymentScreen2")} />
                <Card text={'Add Credit Card'} press={() => props.navigation.navigate("PaymentScreen2")} />
                <Card text={'JazzCash'} press={() => props.navigation.navigate("PaymentScreen2")} />
                <View style={{ marginTop: 200 }}>
                    <GetEnRoll btnTitle={'CONTINUE'} onPress={() => props.navigation.navigate("PaymentScreen2")} />

                </View>

            </View>
        </SafeAreaView>
    )
}