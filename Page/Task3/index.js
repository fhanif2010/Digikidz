import React, { useEffect,useState } from "react";
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

import db from "../../Config/index";
import { useSelector, useDispatch } from 'react-redux';


const Task3 = (props) =>{

    const name = useSelector(state => state.AuthReducer.name);
    const time = new Date();
    const timeNow = time.toDateString();
    const params = props.route.params.data;
    const [state, setState] = useState({
        name: "", program: "", level: "", status: "", time1: "", time2: "", note: "", id:params.id,time: params.time
    })


    const onDeleteTask = () =>{
        db.database().ref(`/task/${timeNow}/${name}/${state.id}`).remove()
        
        props.navigation.navigate('Task')
    }

    const handleUpdateTask = () =>{
        db.database().ref(`/task/${timeNow}/${name}/${state.id}`).update( state)

        props.navigation.navigate('Task')
    }

    useEffect(()=>{
        console.log(params)
        setState((prev)=>({...prev,
            name:params.name,
            program:params.program,
            level:params.level,
            status:params.status,
            time1:params.time1,
            time2:params.time2,
            note:params.note,
        }))
    },[])


        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <View>
                    <View style={{ width: "100%", height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40}}>
                                <View style={{ marginTop: 20, marginHorizontal: "5%" , height: 700}}>
                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                         onChangeText={(text) => setState({ ...state, name: text })}
                                         value={state.name}
                                        ></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                         onChangeText={(text) => setState({ ...state,program  : text })}
                                         value={state.program}
                                        ></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                         onChangeText={(text) => setState({ ...state,level: text })}
                                         value={state.level}
                                        ></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Status</Text>
                                        <TextInput style={{ borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                           onChangeText={(text) => setState({ ...state,status: text })}
                                           value={state.status}
                                        ></TextInput>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Time</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                            <TextInput style={{ borderWidth: 1, height: 36, width: "47%", borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                              onChangeText={(text) => setState({ ...state,time1: text })}
                                              value={state.time1}
                                            ></TextInput>
                                            <Text>-</Text>
                                            <TextInput style={{ borderWidth: 1, height: 36, width: "47%", borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", borderRadius: 15 }}
                                            onChangeText={(text) => setState({ ...state,time2: text })}
                                            value={state.time2}
                                            ></TextInput>
                                        </View>
                                    </View>

                                    <View>
                                        <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                        <TextInput style={{ borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd", borderRadius: 15 }}
                                    onChangeText={(text) => setState({ ...state,note: text })}
                                    
                                    > </TextInput>
                                    </View>

                                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                        <TouchableOpacity  style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={onDeleteTask}>
                                            <View style={{ alignItems: "center", marginVertical: 11 }}>
                                                <Text style={{ color: "white" }}>Delete</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={handleUpdateTask}>
                                            <View style={{ alignItems: "center", marginVertical: 11 }}>
                                                <Text style={{ color: "white" }}>Update</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                                
                        </View>
                        </ScrollView >
                </View>
            </View >
        )
    }


export default Task3;