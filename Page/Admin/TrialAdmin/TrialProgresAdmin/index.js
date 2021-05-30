import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList
} from "react-native";
import db from "../../../../Config/index";


const TrialProgres = (props) => {
    const [TrialProgres, setListTrial] = useState([])


    useEffect(() => {
        db.database().ref().child(`/trial_progres/`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
                if (data !== null) {
                    const translateData = Object.keys(data);
                    const trial = Object.values(translateData)
                    setListTrial(trial);
                }
            })
    }, [])


    onTrialProgresTeacher = () => {
        props.navigation.navigate('TrialProgresTeacher')
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
    
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                            <FlatList
                                    data={TrialProgres  }
                                    renderItem={({item}) => {
                                        return (
                                            <TouchableOpacity onPress={() => { onTrialProgresTeacher(item) }} style={{marginTop:6}}>
                                                {console.log(item)}
                                                <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 ,padding:10}}>
                                                    <Text style={{ fontSize: 18 }}> {item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    keyExtractor={(item) => item}
                                    extraData={TrialProgres}
                                />
                            </View>
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