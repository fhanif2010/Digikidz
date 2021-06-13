import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from "react-native";
import db from "../../../../Config/index";


const TrialProgres = (props) => {
    const [listTrial,setListTrial]=useState([])
   
    React.useEffect(() => {

        db.database().ref().child("trial_progres")
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const translateData = Object.values(data);
                    const filter = translateData.filter((data,index)=>{return data.status == 0})
                    // listCuti(translateData)
                    setListTrial(filter)

                }
            })


    }, [])

    onTrialProgresTeacher = (data) => {
        props.navigation.navigate('TrialProgresTeacher',{data:data})
    }
    
    
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Trial Progres</Text>
                        </View>
                    </View>
    
                    <View style={{ backgroundColor: "white", width: "100%", height: 750, borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                        <ScrollView>

                            <View style={{ marginVertical: 6, width: "100%" }}>
                            
                            <FlatList
                                    data={listTrial}
                                    renderItem={({item}) => {
                                        return (
                                            <TouchableOpacity onPress={() => { onTrialProgresTeacher(item) }} style={{marginTop:6}}>
                                                <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 ,padding:10}}>
                                                    <Text style={{ fontSize: 18 }}> {item.nameStudent}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    keyExtractor={(item) => item}
                                    extraData={TrialProgres}
                                />
                            </View>
                            </ScrollView>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}


export default TrialProgres;


const styles = {
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