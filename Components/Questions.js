import React ,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import QuestionnDetails from "./QuestionnDetails";

export const Questions = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setShowDetails(!showDetails)}>
            <View style={styles.container}>
                    <Text>{props.text}</Text>
                </View>
            </TouchableOpacity>
            {showDetails && <QuestionnDetails />}
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 60,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})