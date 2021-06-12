import React,{useState} from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from "react-native";

import db from "../../../Config/index";
import { useSelector } from 'react-redux';

const Trial2 = (props) => {

    const name = useSelector(state => state.AuthReducer.name);
    const uid = useSelector(state => state.AuthReducer.uid);
    const time = new Date();
    const timeNow = time.toDateString();
    const id = time.getTime();
    const [state, setState] = useState({
        nameStudent: "", program: "", level: "", gender: "", age: "", note: "", id: id,time: timeNow,name:name,uid:uid,status:0
    })

    const onValidation = () => {
        var j = null;
        const dataForm = [{name:"nameStudent",value:state.nameStudent},
                          {name:"program",value:state.program},
                          {name:"level",value:state.level},
                          {name:"gender",value:state.gender},
                          {name:"age",value:state.age},
                          {name:"note", value:state.note}]

        for (var i = 0;i < dataForm.length; i++){
            if(dataForm[i].value == ""){
                j = i;
                break;
            }
            else{
                j = dataForm.length;
            }
        }
        if(j == dataForm.length){
            onsave();
        }
        else{
            alert(`${dataForm[j].name} belum lengkap `)
        }
    }
    
    const onsave = async () => {
        console.log(state)
        db.database().ref('trial_progres')
            .child(`${state.id}`)
            .set(state)
            .then(()=>{
                        props.navigation.navigate('Trial')
                    })
            .catch((error) => {
                alert(error)
            })
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">

                <View>
                <View style={{ width: "100%", height: 100 }}>
                        <View style={{ paddingTop: "9%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Formulir Trial</Text>
                        </View>
                    </View>
                </View>

                <ScrollView>
                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 720 }}>
                    
                        <View style={{ marginTop: 20, marginHorizontal: "5%", }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput  style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, nameStudent: text })}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Program</Text>
                                <TextInput style={{  borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, program: text })}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Level</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, level: text })}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Gender</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, gender: text })}
                                />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Age</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, age: text })}
                              />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                <TextInput style={{ borderRadius: 15,borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}
                                onChangeText={(text) => setState({ ...state, note: text })}
                                />
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30}}>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { onTrial2() }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Clear</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={onValidation}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Upload</Text>
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

export default Trial2;