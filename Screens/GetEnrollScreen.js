import { View, Text, } from 'react-native'
import React from 'react'
import GetEnrollCard from '../Components/GetEnrollCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LecturesCard } from '../Components/LecturesCard'
import { GetEnRoll } from '../Components/GetEnRoll'
import { Back, Stars } from '../Components'

export default function GetEnrollScreen(props) {
    return (
        <SafeAreaView>
                <Back press={() => props.navigation.navigate("SignIn")} />

            
            <View>
                

                <GetEnrollCard />
                <View style={{ marginTop: 18, marginLeft: 20 }}>
                    <Text style={{ fontSize: 24, }}>Overview</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 18, marginTop: 5 }}>Course Name:</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 8, marginLeft: 5 }}>Graphic Designing</Text>
                    </View>

                </View>
                <View style={{ marginTop: -30 }}>
                    <LecturesCard />

                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ fontSize: 18, }}>Course Rating:  </Text>
                    <View style={{ marginTop: 4, marginLeft: 30 }}>
                        <Stars />

                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 18 }}>Course Time:</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 2, marginLeft: 65 }}>Weeks</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 18 }}>Course Traniner:</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 2, marginLeft: 40 }}>Syed Fahad</Text>
                </View>
                <View style={{
                    width: 360,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    height: 100,
                    marginTop: 50,
                    marginHorizontal: 12,
                }}>
                    <View style={{ width: 120, marginLeft: 40, marginTop: -12, backgroundColor: 'lightgray', borderRadius: 50, justifyContent: 'center' }}>
                        <Text style={{ marginLeft: 10 }}>Purchase Detail</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 20 }}>
                        <Text>Date:</Text>
                        <Text> 12/3/2005</Text>
                        <Text style={{ marginLeft: 120 }}>Price:</Text>
                        <Text> 72$</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 20 }}>
                        <Text>Coupon:</Text>
                        <Text> 10% off</Text>
                        <Text style={{ marginLeft: 120 }}>Final Price:</Text>
                        <Text> 65$</Text>
                    </View>



                </View>
                <View style={{ marginTop: 20 }}>
                    <GetEnRoll btnTitle={'CONTINUE'} onPress={() => props.navigation.navigate("PaymentScreen")} />

                </View>
            </View>
        </SafeAreaView>

    )
}