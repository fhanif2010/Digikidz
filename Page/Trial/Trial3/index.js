import React, { useEffect, useState } from "react";
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

import db from "../../../Config/index";
import { useSelector, useDispatch } from 'react-redux';

const Trial3 = (props) => {

    const name = useSelector(state => state.AuthReducer.name);
    const time = new Date();
    const timeNow = time.toDateString();
    const params = props.route.params.detail;
    const [state, setState] = useState({
        name: "", program: "", level: "", gender: "", age: "", note: "",time: timeNow
    })

    onTrial = () => {
        this.props.navigation.navigate('Trial')
    }
    onTrial2 = () => {
        this.props.navigation.navigate('Trial2')
    }
    
    useEffect(()=>{
        console.log(params)
        setState((prev)=>({...prev,
            name:params.name,
            program:params.program,
            level:params.level,
            gender:params.gender,
            age:params.age,
            note:params.note,
            time:params.time,
        }))
    },[])

        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                    <View style={{ width: "100%", height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TRIAL</Text>
                            <Text style={{ fontSize: 20, color: "white" }}>{state.time}</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 800 }}>
                    
                        <View style={{ marginTop: 20, marginHorizontal: "5%",  }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput editable={false} style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", color: "black" }}>{state.name} </TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", color: "black" }}>{state.program}  </TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd", color: "black" }}>{state.level}  </TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Gender</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" , color: "black" }}>{state.gender}</TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Age</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" , color: "black" }}>{state.age}</TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" , color: "black" }}>{state.note} </TextInput>
                            </View>
                           
                        </View>
                    
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View >
        )
    }


export default Trial3;