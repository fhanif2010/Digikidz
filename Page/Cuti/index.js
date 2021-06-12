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
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import db from "../../Config/index";
import { useSelector, useDispatch } from 'react-redux';



const Cuti = (props) => {

    const [listCuti,setListCuti]=useState([]);
    const id = useSelector(state => state.AuthReducer.uid);



    React.useEffect(()=>{
        db.database().ref().child(`/cuti`).orderByChild("kode").equalTo(id)
        .on('value', (snapshoot) => {
            const data = snapshoot.val();
            if (data !== null) {
                const translateData = Object.values(data);
                setListCuti(translateData);
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
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: 750, borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                       <ScrollView>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                {listCuti.map((data,index)=>{
                                    return(
                                        <TouchableOpacity onPress={() => { props.navigation.navigate("Cuti3",{detail:data}) }}>
                                        <View style={{marginTop:6, width: "100%", height: 50, flexDirection: "row",justifyContent:"space-between", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15,paddingHorizontal:8 }}>
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
                        </ScrollView>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 500 }}>
                                <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { this.onCuti2() }}>
                                    <FontAwesomeIcon icon={faPlus} size={35} />
                                </TouchableOpacity>
                            </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Cuti;