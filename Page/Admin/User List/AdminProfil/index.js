import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import db from "../../../../Config"
import { useSelector, } from 'react-redux';


const AdminProfil = (props) => {


    const name = useSelector(state => state.AuthReducer.name);
    const params = props.route.params.data;

    const [state, setState] = useState({
        nama: ""
    })

useEffect(()=>{
    console.log(params)
    setState((prev)=>({...prev,
        name:params.name,
        posisi:params.posisi,
        email:params.email,
        telephone:params.telephone,
        address:params.address,
        DoB:params.DoB,
    }))
},[])

    onEditProfil = () => {
        props.navigation.navigate('EditProfil')
    }

    {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: "100%", height: 150, backgroundColor: "orange", borderBottomRightRadius: 50, borderBottomLeftRadius: 50, alignItems: "center" }}>
                    <View style={{ paddingTop: "10%", alignItems: "center" }}>
                        <Text style={{ fontSize: 35, color: "white" }}>{state.name}</Text>
                        <Text style={{ fontSize: 20, color: "white" }}>{state.posisi}</Text>
                    </View>

                    <View>
                        <TouchableOpacity style={{ width: 200, height: 45, borderRadius: 25, marginTop: 15, marginHorizontal: "20%", backgroundColor: "#a55eea" }} onPress={() => { onEditProfil(data) }}>
                            <View style={{ alignItems: "center", justifyContent: "space-around", marginHorizontal: "15%", flexDirection: "row", marginTop: "5%" }}>
                                <View>
                                    <FontAwesomeIcon icon={faEdit} size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "white" }}>Edit Data</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ marginTop: 40, marginHorizontal: 30 }}>

                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: 154, height: 100, borderWidth: 1, alignItems: "center", justifyContent: "center", borderTopStartRadius: 8, borderBottomLeftRadius: 8, borderColor: "black", backgroundColor: "white" }}>
                            <Text style={{ color: "black" }}>CUTI</Text>
                            <Text style={{ color: "orange", fontSize: 40 }}>20</Text>
                            <Text style={{ color: "black" }}>/year</Text>
                        </View>
                        <View style={{ width: 154, height: 100, borderWidth: 1, alignItems: "center", justifyContent: "center", borderBottomRightRadius: 8, borderTopRightRadius: 8, borderColor: "black", backgroundColor: "white" }}>
                            <Text style={{ color: "black" }}>TRIAL</Text>
                            <Text style={{ fontSize: 40, color: "orange" }}>5</Text>
                            <Text style={{ color: "black" }}>/year</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Email</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{state.email}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>No. Phone</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{state.telephone}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Address</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{state.address}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Date of Birth</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{state.DoB}</Text>
                    </View>
                </View>
            </View>

        )
    }
}


export default AdminProfil;