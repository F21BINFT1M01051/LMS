import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { PrimaryText, Back, Images} from "../Components";

const img1 = require("../assets/password.png");

export const Update = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Back press={() => props.navigation.navigate("ResetPassword")} />

            <View>
                <Images Imgsrc={img1} />
            </View>
            <View style={{ marginTop: 25 }}>
                <PrimaryText text={'Your password has been updated'} />
                <PrimaryText text={'Successfully'} />
            </View>
            <View style={{ marginTop: 30 }}>
                <TouchableOpacity style={[styles.btn2]}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 18, alignSelf: 'center', marginTop: 10 }}>DONE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    btn2: {
        width: 340,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginVertical: 20,
        alignSelf: 'center',
        backgroundColor: 'black',

    },
 })