import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList
} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import db from '../../Config'


const History = (props) => {

    const uid = useSelector(state => state.AuthReducer.uid);
    const [history, setHistory] = useState({});


    useEffect(() => {
        db.database().ref().child(`/task_container/`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
                if (data !== null) {
                    const translateData = Object.keys(data);
                    setHistory(translateData)
                }
            })
    }, []);

    const onHistoryName = (date) => {
        props.navigation.navigate('HistoryName',{date:date})
    }

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>HISTORY</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: "5%" }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>

                                <FlatList
                                    data={history}
                                    renderItem={({item}) => {
                                        return (
                                            <TouchableOpacity onPress={() => { onHistoryName(item) }} style={{marginTop:6}}>
                                                {console.log(item)}
                                                <View style={{ width: "100%", height: 50, flexDirection: "row", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15 ,padding:10}}>
                                                    <Text style={{ fontSize: 18 }}> {item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    keyExtractor={(item) => item}
                                    extraData={history}
                                />

                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

export default History;