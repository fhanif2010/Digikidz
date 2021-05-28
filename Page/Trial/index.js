import React,{useEffect, useState} from "react";
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

    const [listTrial, setListTrial] = useState([]);

    useEffect(() => {
        db.database().ref().child(`/trial_progres/${timeNow}/${name}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
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
        props.navigation.navigate('Trial3',{detail:data})
    }

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>TRIAL</Text>
                        </View>
                    </View>


                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 450 }}>
                            <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { onTrial2() }}>
                                <FontAwesomeIcon icon={faPlus} size={35} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <ScrollView>
                            {listTrial.map((data, index) => {
                        return (
                            <View style={{ marginVertical: 6, width: "100%" }}>
                            <TouchableOpacity onPress={() => { onTrial3(data) }}>
                                <View style={{ width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap' }}>
                                        <Text > name : {data.name}</Text>
                                        <Text> program:  {data.program}</Text>
                                        <Text > level : {data.age}</Text>
                                        <Text > time :  {data.time}</Text>
                                    </View>
                            </TouchableOpacity>
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

export default Trial;