import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
} from "react-native";


const TrialCancelList = (props) => {

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Cancel List</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20, }}>
                            <View style={{ marginTop: 10, width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', fontSize: 15 }}>
                                <Text> Name = </Text>
                                <Text> Program =  </Text>
                                <Text> Level = </Text>
                                <Text> Gender = </Text>
                                <Text> Age =  </Text>
                                <Text> Note =   </Text>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TrialCancelList;

const styles = {
    form: {
        marginTop: 40,
        marginHorizontal: 20,

        Textarea: {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#dfe4ea",
            paddingHorizontal: 15,
            marginTop: 6,
            borderRadius: 8,
            Text: {
                fontSize: 18
            }
        }
    }
}