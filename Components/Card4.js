import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';


export default function Card4(props) {
    const item = props.item;

    return (
        <View>
            <View style={{
                width: 370,
                backgroundColor: 'lightblue',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#CDCDCD',
                height: 120,
                marginTop: 20,
                marginHorizontal: 12,
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: 90, height: 90, borderRadius: 10, backgroundColor: 'gray', marginTop: 13, marginLeft: 12 }}>
                        <Image source={item.img} style={{ width: 80, height: 80 }} />
                    </View>
                    <View>
                        <Text style={{ marginTop: 18, marginLeft: 10, fontSize: 14, fontWeight: 'bold' }}>{item.text11}</Text>
                        <Text style={{ marginTop: 2, marginLeft: 10, color: 'gray', fontSize: 12 }}>{item.text}</Text>
                    </View>
                   
                </View>
                <View style={{marginLeft:115, marginTop:-30}}>
                        <Progress.Bar progress={item.progress} width={200} color='black' height={5} borderColor='lightgray' unfilledColor='gray' borderRadius={8} />

                    </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        width: 110, // Adjust the width as needed
        height: 6,
        backgroundColor: 'black',
        marginTop: 80,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft: -80
    },
    line2: {
        width: 110, // Adjust the width as needed
        height: 6,
        backgroundColor: 'gray',
        marginTop: 80,
        borderRadius: 20,
        marginLeft: -3
    },

})