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

import { FlatList, } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

const CutiNameList = (props) => {
    onCutiNameContent = () => {
        props.navigation.navigate('CutiNameContent')
    }
    onHistoty3 = () => {
        props.navigation.navigate('History3')
    }
    onTask3 = () => {
        props.navigation.navigate('Task3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti List</Text>
                        </View>
                    </View>
                <View style={{ backgroundColor: "white", width: "100%", height: "100%",  borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 20, marginHorizontal: 20,}}>
                            <View style={{marginTop: 10,width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', fontSize: 15 }}>
                                                <Text> Name = </Text>
                                                <Text> Position =  </Text>
                                                <Text> Start - end = </Text>
                                                <Text> Total = </Text>
                                                <Text> Neccessity =  </Text>
                                                <Text> Note =   </Text>
                                            </View>                                              
                    </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default CutiNameList;

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