import React, { useState, useEffect } from "react";
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

import db from "../../../../../Config";



const CutiNameList =  (props) => {

    const name = props.route.params.name
    const [listCuti, setListCuti] = useState([])

    React.useEffect(() => {

        db.database().ref().child("cuti").orderByChild("name").equalTo(name)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
                if (data !== null) {
                    const translateData = Object.values(data);
                    // listCuti(translateData)
                    const filter = translateData.filter((data,index)=>{return data.status == "1"})
                    setListCuti(filter)

                }
            })


    }, [])


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
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20,paddingBottom:220 }}>
                            <ScrollView>
                            {listCuti.map((data, index) => {
                                return (
                                    <View style={{ marginTop: 10, width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', fontSize: 15 }}>
                                        <Text> Name = {data.name}</Text>
                                        <Text> Position = {data.position} </Text>
                                        <Text> Total = </Text>
                                        <Text> Neccessity =  </Text>
                                        <Text> Note =   </Text>
                                    </View>
                                )
                            })}
</ScrollView>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default CutiNameList;

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