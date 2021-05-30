import React from "react";
import { 
    View, 
    Text, 
    TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faUser,
    faTasks,
    faChild,
    faStreetView,
    faHistory,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
    const name = useSelector(state => state.AuthReducer.name);
    const posisi = useSelector(state => state.AuthReducer.posisi);
    const dispatch = useDispatch();
    
    const onLogout = async () => {
        await dispatch({ type: 'LOGOUT' });
        props.navigation.navigate('Login')
    }
    const onProfil = () => {
        props.navigation.navigate('Profil')
    }
    const onTask = () => {
        props.navigation.navigate('Task')
    }
    const onTrial = () => {
        props.navigation.navigate('Trial')
    }
    const onCuti = () => {
        props.navigation.navigate('Cuti')
    }
    const onHistory = () => {
        props.navigation.navigate('History')
    }

    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <View style={{ width: "100%", height: "22%", }}>
                <View style={{ paddingTop: "10%", paddingLeft: "10%" }}>
                    <Text style={{ fontSize: 35, color: "white" }}>{name}</Text>
                    <Text style={{ fontSize: 15, color: "white" }}>{posisi}</Text>
                </View>
            </View>
            <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 5, top: 10 }}>
                <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: "orange", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={onLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} size={25} />
                </TouchableOpacity>
            </View>

            <View style={{ width: "100%", height: "100%", backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                <View style={{ alignItems: "center", marginTop: 5 }}>
                    <Text style={{ fontSize: 20, fontStyle: "italic", fontWeight: "bold", color: "orange" }}> Let's get started </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: "10%", marginTop: "5%", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ width: 130, height: 130, borderWidth: 1, borderRadius: 8 }} onPress={onProfil}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: "80%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesomeIcon icon={faUser} size={87} />
                            </View>
                            <View><Text>Profil</Text></View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 130, height: 130, borderWidth: 1, borderRadius: 8, }} onPress={() => { onTask() }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: "80%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesomeIcon icon={faTasks} size={87} />
                            </View>
                            <View><Text>TASK</Text></View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", marginHorizontal: "10%", marginTop: "5%", justifyContent: "space-between" }}>
                    <TouchableOpacity style={{ width: 130, height: 130, borderWidth: 1, borderRadius: 8, }} onPress={() => { onTrial() }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: "80%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesomeIcon icon={faChild} size={87} />
                            </View>
                            <View><Text>TRIAL</Text></View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 130, height: 130, borderWidth: 1, borderRadius: 8, }} activeOpacity={0.9} onPress={() => { onCuti() }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: "80%", height: "80%", alignItems: "center", justifyContent: "center" }}>
                                <FontAwesomeIcon icon={faStreetView} size={87} />
                            </View>
                            <View>
                                <Text>CUTI</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: "10%", marginTop: "5%", alignItems: "center" }}>
                    <TouchableOpacity style={{ width: 285, height: 110, borderWidth: 1, borderRadius: 8 }} onPress={() => { onHistory() }}>
                        <View style={{ alignItems: "center", justifyContent: "center" }}>
                            <View style={{ width: "60%", height: "75%", alignItems: "center" }}>
                                <FontAwesomeIcon icon={faHistory} size={70} />
                            </View>
                            <View>
                                <Text>HISTORY</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )

}
export default Home;