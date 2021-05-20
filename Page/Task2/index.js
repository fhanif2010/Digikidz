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
import db from '../../Config/index';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';


const Task2 = (props) => {



    const name = useSelector(state => state.AuthReducer.name);

    const time = new Date();
    const timeNow = time.toDateString();
    const id = time.getTime();
    const [state, setState] = useState({
        name: "", program: "", level: "", status: "", time1: "", time2: "", note: "", id: id,time: timeNow
    })

    const onSave = async () => {
      
        db.database().ref('task')
            .child(`${timeNow}`)
            .child(`${name}`)
            .child(`${state.id}`)
            .set(state)
            .then(()=>{
                        props.navigation.navigate('Task')
                    })
            .catch((error) => {
                alert(error)
            })
            // .then(()=>{
           
           

    }

    onTask = () => {
        props.navigation.navigate('Task')
    }
    onTask2 = () => {
        props.navigation.navigate('Task2')
    }
    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                    <View style={{ width: "100%", height: "15%" }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ backgroundColor: "white", borderTopStartRadius: 20, borderTopEndRadius: 20 }}>
                        <View style={{ marginTop: 20, marginHorizontal: "5%", height: 745 }}>
                            <View style={{ marginBottom: "2%"}}>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput
                                    style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                    onChangeText={(text) => setState({ ...state, name: text })}
                                />
                            </View>
                            <View style={{ marginBottom: "2%"}}>
                                <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                <TextInput
                                    style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                    onChangeText={(text) => setState({ ...state, program: text })}

                                />
                            </View>
                            <View style={{ marginBottom: "2%"}}>
                                <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                <TextInput
                                    style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                    onChangeText={(text) => setState({ ...state, level: text })}

                                />
                            </View>
                            <View style={{ marginBottom: "2%"}}>
                                <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                    onChangeText={(text) => setState({ ...state, status: text })}

                                />
                            </View>
                            <View style={{ marginBottom: "2%"}}>
                                <Text style={{ fontSize: 20, color: "orange" }}>Time</Text>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, width: "47%", borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={(text) => setState({ ...state, time1: text })} v
                                    />
                                    <Text> - </Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, width: "47%", borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                        onChangeText={(text) => setState({ ...state, time2: text })}
                                    />
                                </View>

                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>note</Text>
                                <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}
                                    onChangeText={(text) => setState({ ...state, note: text })}
                                />
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { onTask2() }}>
                                    <View style={{ alignItems: "center", marginVertical: 11 }}>
                                        <Text style={{ color: "white" }}>Clear</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={onSave}>
                                    <View style={{ alignItems: "center", marginVertical: 11 }}>
                                        <Text style={{ color: "white" }}>Save</Text>
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

export default Task2;