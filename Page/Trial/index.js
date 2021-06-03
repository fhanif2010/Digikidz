import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faArrowAltCircleLeft,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import db from '../../Config/index'

const Trial = (props) => {
    const name = useSelector(state => state.AuthReducer.name);
    const time = new Date();
    const timeNow = time.toDateString();

    const bgStatus = ["transparent", "green", "red"];

    const [listTrial, setListTrial] = useState([]);

    useEffect(() => {
        db.database().ref().child(`/trial_progres/`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const translateData = Object.values(data);
                    const trial = Object.values(translateData)
                    setListTrial(trial);

                }
            })
    }, [])

    const onTrial2 = () => {
        props.navigation.navigate('Trial2')
    }

    const onTrial3 = (data) => {
        props.navigation.navigate('Trial3', { detail: data })
    }

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TRIAL</Text>
                        </View>
                    </View>


                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <ScrollView>


                         

                            <View style={{ marginTop: 20, marginHorizontal: 20,height:"100%", }}>
                                {listTrial.map((data, index) => {
                                    return (
                                        <View key={index} style={{ marginVertical: 6, width: "100%", backgroundColor: "#dfe4ea" ,height:100}}>
                                            <TouchableOpacity style={{ flexDirection: "row",display:"flex" }} onPress={() => { onTrial3(data) }}>
                                                <View style={{ width: "80%", height:"100%", borderRadius: 15, padding: 10, fontSize: 15,  }}>
                                                    <Text > name : {data.name}</Text>
                                                    <Text> program:  {data.program}</Text>
                                                    <Text > level : {data.age}</Text>
                                                    <Text > time :  {data.time}</Text>
                                                </View>
                                                <View style={{ width: "20%", height: "100%", justifyContent: 'center', alignItems: "center" }}>
                                                    <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: bgStatus[data.status] }}>

                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}

                            </View>
                        </ScrollView>

                    </View>
                    <View style={{ alignItems: "center", position: "absolute", right: 20, top: 500 }}>
                        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { onTrial2() }}>
                            <FontAwesomeIcon icon={faPlus} size={35} />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default Trial;