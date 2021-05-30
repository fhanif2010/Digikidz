import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity 
} from "react-native";


const TrialAdmin = (props) => {
    onTrialProgres = () => {
        props.navigation.navigate('TrialProgres')
    }
    onTrialJoin = () => {
        props.navigation.navigate('TrialJoin')
    }
    onTrialCancel = () => {
        props.navigation.navigate('TrialCancel')
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Trial Student</Text>
                        </View>
                    </View>

                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 20, marginHorizontal: 20,}}>
                        <TouchableOpacity onPress={() => { onTrialProgres()  }} >
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Progres </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { onTrialJoin()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Join</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => { onTrialCancel()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Cancel</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}


export default TrialAdmin;


const styles= {
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