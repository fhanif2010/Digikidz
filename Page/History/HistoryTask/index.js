import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList
} from "react-native";

import db from '../../../Config'


const HistoryTask = (props) => {

    const [listTask, setListTask] = useState([]);
    const name = props.route.params.name;
    const date = props.route.params.date;
    useEffect(() => {
        db.database().ref().child(`/task_container/${date}/${name}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const translateData = Object.values(data);
                    setListTask(translateData)
                }
            })
    }, []);
    const onHistoryTask2 = () => {
        props.navigation.navigate('HistoryTask2')
    }

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                {console.log(listTask)}
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 120 }}>
                        <View style={{ paddingTop: "5%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>HISTORY</Text>
                            <Text style={{ fontSize: 20, color: "white" }}>{name}</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <FlatList
                                data={listTask}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ marginTop: 10, marginHorizontal: 20, }} >
                                            <TouchableOpacity  style={{ width: "100%" }}>
                                                <View style={{ width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, }}>
                                                    <Text > name : {item.name}</Text>
                                                    <Text> program:  {item.program}</Text>
                                                    <Text > level : {item.level}</Text>
                                                    <Text > time :  {item.time1} - {item.time2} </Text>
                                                    <Text > status : {item.status} </Text>
                                                    <Text style={{flex: 1, flexWrap: 'wrap'}}> note : {item.note} </Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }}
                                keyExtractor={(item) => item}
                                extraData={listTask}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default HistoryTask;