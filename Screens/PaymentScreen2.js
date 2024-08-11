import { View, Text, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GetEnrollCard from '../Components/GetEnrollCard'
import Card2 from '../Components/Card2'
import { GetEnRoll } from '../Components/GetEnRoll'
import { Back } from '../Components'


export default function PaymentScreen2(props) {
    return (
        <SafeAreaView>
                <Back press={() => props.navigation.navigate("PaymentScreen")} />

            <View>

                <GetEnrollCard />
                <Text style={{fontSize:25,marginTop:20,marginLeft:20, marginBottom:20}}>Select Payment Method</Text>
                <Card2 text={'Name On Card'}/>
                <Card2 text={'Card Number'} />
                <View style={{flexDirection:'row'}}>
                <Card2 style={{width:170}} text={'CVC Number'} />
                <Card2 style={{width:170}} text={'Expiry Date'} />
                </View>
               

                <View style={{ marginTop: 170 }}>
                    <GetEnRoll btnTitle={'CONTINUE'} onPress={() => props.navigation.navigate("PaymentScreen3")} />

                </View>

            </View>
        </SafeAreaView>
    )
}