import React from "react";
import {
    View,
    Text,
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';

const Profil = () => {
    const name = useSelector(state => state.AuthReducer.name);
    const posisi = useSelector(state => state.AuthReducer.posisi);
    const address = useSelector(state => state.AuthReducer.address);
    const email = useSelector(state => state.AuthReducer.email);
    const numberPhone = useSelector(state => state.AuthReducer.number);
    const dob = useSelector(state => state.AuthReducer.dob);

    onHome = () => {
        this.props.navigation.navigate('Home')
    }
    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <View style={{ width: "100%", height: 150, backgroundColor: "orange", borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                <View style={{ paddingTop: "10%", alignItems: "center" }}>
                    <Text style={{ fontSize: 35, color: "white" }}>{name}</Text>
                    <Text style={{ fontSize: 20, color: "white" }}>{posisi}</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ marginTop: 20, marginHorizontal: 30, }}>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
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
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{email}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>No. Phone</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{numberPhone}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Address</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{address}</Text>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Date of Birth</Text>
                        <Text style={{ fontSize: 18, borderBottomWidth: 1 }}>{dob}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Profil;