import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
} from "react-native";

const Cuti3 = (props) => {

const detail=props.route.params.detail;
console.log(detail);


    onTrial = () => {
        props.navigation.navigate('Trial')
    }
    onTrial2 = () => {
        props.navigation.navigate('Trial2')
    }
    {
        return (
            
            <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                    <View style={{ width: "100%", height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 650 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput
                                defaultValue={detail.name}
                                style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Position</Text>
                                <TextInput 
                                defaultValue={detail.position}
                                style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}/>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Start - End</Text>
                                <View style={{ justifyContent: "space-around", flexDirection: "row", width: "100%"}}>
                                <TextInput style={{ width: "47%",borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.start}</TextInput>
                                <Text style={{ fontSize: 20, color: "orange" }}>-</Text>
                                <TextInput style={{ width: "47%", borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.end}</TextInput>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Neccessity</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}>{detail.neccessity} </TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> {detail.note} </TextInput>
                            </View>

                        </View>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
        )
    }
}

export default Cuti3;