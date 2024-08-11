import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function GetEnrollCard(props) {
    return (
        <View>
            <View style={{
                width: 370,
                backgroundColor: 'lightblue',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'gray',
                height: 120,
                marginTop: 60,
                marginHorizontal: 12,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity>
                        <View style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>1</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{ width: 80, height: 2, backgroundColor: 'gray', marginTop: 24 }}></View>
                    <TouchableOpacity>
                        <View style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>2</Text>

                        </View>
                    </TouchableOpacity>


                    <View style={{ width: 80, height: 2, backgroundColor: 'gray', marginTop: 24 }}></View>
                    <TouchableOpacity>
                        <View style={{ width: 50, height: 50, backgroundColor: "black", borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>3</Text>
                        </View>
                    </TouchableOpacity>


                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ marginRight: 50, marginTop: 5, fontSize: 12 }}>OverView</Text>
                    <Text style={{ marginRight: 10, marginTop: 5, fontSize: 12 }}>Payment Method</Text>
                    <Text style={{ marginLeft: 40, marginTop: 5, fontSize: 12 }}>Confirmation</Text>

                </View>
            </View>
            

        </View>
    )
}