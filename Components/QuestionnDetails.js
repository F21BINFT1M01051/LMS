import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function QuestionnDetails() {
    return (
        <View>
            <View style={{
                width: 370,
                backgroundColor: 'lightblue',
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'gray',
                height: 220,
                marginTop: 10
            }}>
                <View style={{ marginTop: 20, flexDirection: 'row', marginLeft: 30 }}>
                    <TouchableOpacity>
                        <View style={{ width: 35, height: 35, backgroundColor: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="play" size={18} color="white" style={{ marginLeft: 7, marginTop: 2 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20, marginTop: 8 }}>
                        <Text>Lorem Ipsum Doller Site</Text>
                    </View>

                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 30 }}>
                    <TouchableOpacity>
                        <View style={{}}>
                            <Icon name="book" size={34} color="black" style={{ marginLeft: 2 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20, marginTop: 8 }}>
                        <Text>Lorem Ipsum Doller Site</Text>
                    </View>

                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 30 }}>
                    <TouchableOpacity>
                        <View style={{ width: 35, height: 35, backgroundColor: 'black', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="play" size={18} color="white" style={{ marginLeft: 7, marginTop: 2 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20, marginTop: 8 }}>
                        <Text>Lorem Ipsum Doller Site</Text>
                    </View>

                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', marginLeft: 30 }}>
                    <TouchableOpacity>
                        <View style={{}}>
                            <Icon name="book" size={34} color="black" style={{ marginLeft: 2 }} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginLeft: 20, marginTop: 8 }}>
                        <Text>Lorem Ipsum Doller Site</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}