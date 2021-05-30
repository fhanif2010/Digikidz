import React from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { faEdit, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const AddUser = (props) => {
onUserList = () => {
    props.navigation.navigate('UserList')
}

    onAdminProfil = () => {
        props.navigation.navigate('AdminProfil')
    }
    {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%", height: 80, backgroundColor: "orange", borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}>
                    <View style={{ paddingTop: "5%", alignItems: "center" }}>
                        <Text style={{ fontSize: 30, color: "white" }}>Create User</Text>
                    </View>
                </View>

                <View style={{ marginTop:20, marginHorizontal: 20, borderWidth: 1, borderRadius:20, borderColor: "orange", backgroundColor: "white" }}>
                    <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <View>
                        <Text style={{ fontSize: 15, color: "orange" }}>Name :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Posisi :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40  }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Email :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Password :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>No. Phone :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Address :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Date of Brith :</Text>
                        <TextInput style={{ marginTop: -5,fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>

                    <View style= {{ flexDirection: "row", justifyContent: "center", justifyContent:"space-around", marginTop: 40}}>
                    <TouchableOpacity style={{ width: 120 ,height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onUserList() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                    <Text style={{ color: "white" }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: 120 ,height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onAdminProfil() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                    <Text style={{ color: "white" }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>

        )
    }
}


export default AddUser;