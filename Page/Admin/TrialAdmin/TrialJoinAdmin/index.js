import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity 
} from "react-native";


const TrialJoin = (props) => {

    onTrialJoinList = () => {
        props.navigation.navigate('TrialJoinList')
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Trial Join</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20, }}>
                            <TouchableOpacity onPress={() => { this.onTrialJoinList() }} >
                                <View style={styles.form.Textarea}>
                                    <Text style={styles.form.Textarea.Text}> Faisal Hanif </Text>
                                    <Text style={styles.form.Textarea.Text}> Teacher </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TrialJoin;

const styles= {
    form: {
        marginTop: 40,
        marginHorizontal: 20,

        Textarea: {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
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