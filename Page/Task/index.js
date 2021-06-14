import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
    TouchableOpacity,

} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import db from '../../Config/index'


const Task = (props) => {

    const name = useSelector(state => state.AuthReducer.name);
    const time = new Date();
    const timeNow = time.toDateString();


    const [listTask, setListTask] = useState([]);
    const [history, setHistory] = useState({});


    useEffect(() => {
        db.database().ref().child(`/task/${timeNow}/${name}`)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                console.log(data)
                if (data !== null) {
                    const translateData = Object.values(data);
                    const task = Object.values(translateData)
                    setListTask(task);
                    setHistory(data)
                }
            })
    }, [])


    const onHome = async () => {
        await db.database().ref().child(`/task_container/${timeNow}/${name}`)
            .once('value', async (snapshoot) => {
                console.log(snapshoot)
                if (snapshoot.exists()) {
                    alert('anda sudah upload ')
                }
                else if(listTask.length < 1){
                    alert("isi formulir terlebih dahulu ")
                }
                else {
                    await db.database().ref().child(`/task/${timeNow}/${name}`).remove();
                    await db.database().ref().child(`/task_container/${timeNow}/${name}`)
                        .set(history)
                        .then(() => {
                            props.navigation.navigate("Home")
                        
                        })
                        .catch((error) => {
                            alert(error)
                        })
                }
            })
    }


    const onTask2 = () => {
        props.navigation.navigate('Task2')
    }
    const onTask3 = (ctx) => {
        props.navigation.navigate("Task3", { data: ctx })
    }


    return (
        <View style={{ flex: 1, backgroundColor: "orange" }}>
            <KeyboardAvoidingView behavior="height">
            <View style={{ height: 100 }}>
                <View style={{ paddingTop: "7%", alignItems: "center" }}>
                    <Text style={{ fontSize: 35, color: "white" }}>TASK</Text>
                </View>
            </View>

            <View style={{ backgroundColor: "white", width: "100%", minHeight: 710, borderTopStartRadius: 40, borderTopEndRadius: 40, paddingTop: 20, paddingBottom: 10 }}>
                <ScrollView >
                    {listTask.map((ctx, index) => {
                        return (
                            <View style={{ marginTop: 10, marginHorizontal: 20, }} key={index}>
                                <TouchableOpacity onPress={() => { onTask3(ctx) }} style={{ width: "100%" }}>
                                    <View style={{ width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap' }}>
                                        <Text > name : {ctx.name}</Text>
                                        <Text> program:  {ctx.program}</Text>
                                        <Text > level : {ctx.level}</Text>
                                        <Text > time :  {ctx.time1} - {ctx.time2} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: "3%" }}>
                        <TouchableOpacity style={{ width: 150, height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={ onHome }>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                <Text style={{ color: "white" }}>Upload</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={{ alignItems: "center", marginTop: 10, position: "absolute", right: 20, top: 500 }}>
                <TouchableOpacity style={{ width: 60, height: 60, backgroundColor: "#dfe4ea", borderRadius: 50, alignItems: "center", justifyContent: "center" }} onPress={() => { onTask2() }}>
                    <FontAwesomeIcon icon={faPlus} size={35} />
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        </View >
    )

}

export default Task;