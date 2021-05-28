import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import db from "../../Config/index";



const Cuti = (props) => {

    const [listCuti,setListCuti]=useState([])

    React.useEffect(()=>{
        db.database().ref().child(`/cuti_progress`)
        .on('value', (snapshoot) => {
            const data = snapshoot.val();
            console.log(data)
            if (data !== null) {
                const translateData = Object.values(data);
                const cuti= Object.values(translateData)
                setListCuti(cuti);
            }
        })
    },[])

    const bgStatus = ["transparent","green","red"];
    const cutiStatus = ["progress","success","failed"];

    onCuti2 = () => {
        props.navigation.navigate('Cuti2')
    }
    onCuti3 = () => {
        props.navigation.navigate('Cuti3')
    }
 {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 400 }}>
                                <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { this.onCuti2() }}>
                                    <FontAwesomeIcon icon={faPlus} size={35} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                {listCuti.map((data,index)=>{
                                    return(
                                        <TouchableOpacity onPress={() => { props.navigation.navigate("Cuti3",{detail:data}) }}>
                                        <View style={{marginTop:3, width: "100%", height: 50, flexDirection: "row",justifyContent:"space-between", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15,paddingHorizontal:8 }}>
                                            <Text style={{ fontSize: 18 }}> {data.tgl}</Text>
                                            <Text style={{ fontSize: 18 }}> - </Text>
                                            <Text style={{ fontSize: 18 }}> {cutiStatus[data.status]} </Text>
                                            <View style={{height:15,width:15,backgroundColor:bgStatus[data.status],borderRadius:10}}>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                    )
                                })}
                               
                            </View>
                        </View>

                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Cuti;