import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList
} from "react-native";

import db from '../../../Config'




const HistoryName = (props) => {
    const [listName, setListName] = useState([]);
    const date = props.route.params.date;
    useEffect(() => {
        db.database().ref().child(`/task_container/${date}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
                if (data !== null) {
                    const translateData = Object.keys(data);
                    setListName(translateData)
                }
            })
    }, []);


    const onHistoryTask = (name) => {
        props.navigation.navigate('HistoryTask',{name:name,date:date})
    }

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>HISTORY</Text>
                            <Text style={{ fontSize: 15, color: "white" }}>{date}</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>

                            <View style={{ marginVertical: 6, width: "100%" }}>
                                <FlatList
                                    data={listName}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity onPress={() => { onHistoryTask(item) }} style={{marginTop:10}}>
                                                <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15,padding:10 }}>
                                                    <Text style={{ fontSize: 18 }}> {item} </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    keyExtractor={(item) => item}
                                    extraData={listName}
                                />


                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default HistoryName;