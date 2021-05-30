import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    FlatList

} from "react-native";
import db from '../../../../Config';




const TaskAdmin3 = (props) => {
    const name = props.route.params.data;
    const date = props.route.params.date;

    const [listTask,setListTask] = useState([]);

    useEffect(() => {

        db.database().ref()
            .child(`/task_container/${date}/${name}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const task = Object.values(data)
                    setListTask(task)

                }
            })
    }, [])

    onTaskAdmin4 = () => {
        props.navigation.navigate('TaskAdmin4')
    }
    onTask2 = () => {
        props.navigation.navigate('Task2')
    }
    onTask3 = () => {
        props.navigation.navigate('Task3')
    }
    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 120 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 25, color: "white" }}>Task</Text>
                            <Text style={{ fontSize: 20, color: "white" }}>{name}</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20, }}>
                            <FlatList
                                data={listTask}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity >
                                            <View style={{marginTop: 10,width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', fontSize: 15 }}>
                                                <Text> Name = {item.name}</Text>
                                                <Text> Program = {item.program}</Text>
                                                <Text> Level = {item.level}</Text>
                                                <Text> Status = {item.status}</Text>
                                                <Text> Time = {item.time1} - {item.time2}</Text>
                                                <Text> Note = {item.note}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        )
                                }}
                                keyExtractor={(item) => item}
                                extraData={listTask}
                            />


                        
                        </View>

                    </View>

                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TaskAdmin3;

const styles = {
    form: {
        marginTop: 40,
        marginHorizontal: 20,

        Textarea: {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#dfe4ea",
            paddingHorizontal: 15,
            marginTop: 6,
            borderRadius: 8,
            Text: {
                fontSize: 18
            }
        }
    }
}