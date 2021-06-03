import React, { useState } from "react";
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
import db from '../../../../../Config'


const TrialProgresTeacher = (props) => {

    const detail = props.route.params.data


    const handelApprove = () => {
        db.database().ref(`/trial_progres/${detail.id}`)
            .update({
                age: detail.age,
                gender: detail.gender,
                id: detail.id,
                level: detail.level,
                name: detail.name,
                nameStudent: detail.nameStudent,
                note: detail.note,
                program: detail.program,
                status: 1,
                time: detail.time,
                uid: detail.uid
            })
            .then(() => {
                alert("Succes")
                //     // db.database().ref().child(`/cuti/${detail.id}`).remove()

            })
            .catch((error) => {
                alert(error)
            })

    }

    const handelReject = () => {
        db.database().ref(`/trial_progres/${detail.id}`)
            .update({
                age: detail.age,
                gender: detail.gender,
                id: detail.id,
                level: detail.level,
                name: detail.name,
                nameStudent: detail.nameStudent,
                note: detail.note,
                program: detail.program,
                status: 2,
                time: detail.time,
                uid: detail.uid
            })
            .then(() => {
                alert("Succes")
                //     // db.database().ref().child(`/cuti/${detail.id}`).remove()

            })
            .catch((error) => {
                alert(error)
            })

    }


    onTrialProgres = () => {

        props.navigation.navigate('TrialProgres')
    }



    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">

                    <View>
                        <View style={{ width: "100%", height: 120 }}>
                            <View style={{ paddingTop: "7%", alignItems: "center" }}>
                                <Text style={{ fontSize: 20, color: "white" }}>TRIAL</Text>
                                <Text style={{ fontSize: 18, color: "white" }}>faisal hanif - 20-Februari-2021</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView>
                        <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 860 }}>
                            <View style={{ marginTop: 20, marginHorizontal: 20 }}>

                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.nameStudent}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.program}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.level}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Gender</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.gender}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Age</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.age}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}
                                        onChangeText={"TEST"}
                                    >{detail.note}</TextInput>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={handelReject}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Rejected</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={handelApprove}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Approve</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TrialProgresTeacher;