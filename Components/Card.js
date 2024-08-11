import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card(props) {
    return (
        <View style={{
            width: 370,
            backgroundColor: 'lightgray',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#CDCDCD',
            height: 80,
            marginTop: 10,
            marginHorizontal: 12,
        }}>
            <TouchableOpacity onPress={props.press}>
                <View style={{flexDirection:'row', marginLeft:20,marginTop:25}}>
                    <View style={{ width: 30, height: 30, backgroundColor: 'black', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="plus" size={15} color="white" style={{ marginLeft: 1, marginTop: 2 }} />
                    </View>
                    <Text style={{marginLeft:15, fontSize:18,fontWeight:'bold'}}> {props.text}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}