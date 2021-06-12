import React,{useState,useEffect} from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity 
} from "react-native";


const CutiAdmin = (props) => {





    onCutiProgres = () => {
        props.navigation.navigate('CutiProgres')
    }
    onCutiApprove = () => {
        props.navigation.navigate('CutiApprove')
    }
    onCutiRejected = () => {
        props.navigation.navigate('CutiRejected')
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Karyawan</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 20, marginHorizontal: 20,}}>
                        <TouchableOpacity onPress={() => { onCutiProgres()  }} >
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Progres </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { onCutiApprove()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Approve</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <TouchableOpacity onPress={() => { onCutiRejected()  }}>
                            <View style={ styles.form.Textarea}>
                                <Text style={ styles.form.Textarea.Text}> Rejected</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}


export default CutiAdmin;


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