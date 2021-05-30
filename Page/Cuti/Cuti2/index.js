import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
    TouchableOpacity

} from "react-native";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector, useDispatch } from 'react-redux';
import db from "../../../Config/index";

const Cuti2 = (props) => {

    const name = useSelector(state => state.AuthReducer.name);
    const posisi = useSelector(state => state.AuthReducer.posisi);
    const id = useSelector(state => state.AuthReducer.uid);
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;


    const time = new Date();
    const timeNow = time.toDateString();


    const [cutiData, setCutiData] = useState({ uid:id,name: name, position: posisi, start: new Date(), end: new Date(), neccessity: "", rangeDate: "", tgl: timeNow, status: "progress"})
    const [modalDate, setModaldate] = useState({ start: false, end: false });

    const [newDate, setNewDate] = useState(new Date())



    const countRangeDate = () => {

        const oneDay = 24 * 60 * 60 * 1000;


        const startYear = cutiData.start.getUTCFullYear();
        const startMonth = cutiData.start.getMonth() + 1;
        const startDay = cutiData.start.getDate() + 1;


        const endYear = cutiData.end.getUTCFullYear();
        const endMonth = cutiData.end.getMonth() + 1;
        const endDay = cutiData.end.getDate() + 1;

        const startDate = new Date(startYear, startMonth, startDay)
        const endDate = new Date(endYear, endMonth, endDay)
        const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));
        // const range = moment().range(startDate,endDate)
        if (startDate > endDate) {
            alert("Date is Not valid")
        }
        else {
            setCutiData({ ...cutiData, rangeDate: diffDays })
        }

        return;



    }


    const onSubmit = async () => {
        await countRangeDate();

        await db.database().ref().child(`/cuti_progress/${time.getTime()}/`)
            .set({
                uid:id,
                name:name,
                id:time.getTime(),
                start:cutiData.start.toLocaleDateString(),
                end:cutiData.end.toLocaleDateString(),
                neccessity:cutiData.neccessity,
                status:cutiData.start,
                range:cutiData.rangeDate.toString(),
                tgl:cutiData.tgl,
                position:posisi,
                note:"",
                status:0

            })
            .then(() => {
                alert("Succses")
                props.navigation.navigate('Cuti')

            })
            .catch((error) => {
                alert(error)
            })


    }


onTrial = () => {
    this.props.navigation.navigate('Trial')
}
onCuti2 = () => {
    props.navigation.navigate('Cuti2')
}


const onChangeDateStart = async (e, ctx) => {
    setCutiData({ ...cutiData, start: ctx })
    setModaldate({ ...modalDate, start: false })
}

const onChangeDateEnd = async (e, ctx) => {

    await setCutiData({ ...cutiData, end: ctx })
    await setModaldate({ ...modalDate, end: false })

}



return (
    <View style={{ flex: 1, backgroundColor: "orange" }}>

        <KeyboardAvoidingView behavior="height">

            {
                modalDate.start && (
                    <DateTimePicker
                        style={{ width: 0, height: 0 }}
                        testID="dateTimePicker"
                        value={new Date()}

                        mode="date"
                        is24Hour={true}
                        dateFormat="dayofweek day month"
                        display="default"
                        onChange={(e, ctx) => { onChangeDateStart(e, ctx) }}
                        onTouchEnd={() => setCutiData({ ...cutiData, start: new Date() })}
                        onTouchEndCapture={() => setCutiData({ ...cutiData, start: new Date() })}

                    // onTouchEnd={()=>setModaldate({...modalDate,start:false})}
                    />

                )

            }

            {
                modalDate.end && (
                    <DateTimePicker
                        style={{ width: 0, height: 0 }}
                        testID="dateTimePicker"
                        value={new Date()}

                        mode="date"
                        is24Hour={true}
                        dateFormat="dayofweek day month"
                        display="default"
                        onChange={(e, ctx) => { onChangeDateEnd(e, ctx) }}
                        onTouchEnd={() => setCutiData({ ...cutiData, end: new Date() })}
                        onTouchEndCapture={() => setCutiData({ ...cutiData, start: new Date() })}

                    // onTouchEnd={()=>setModaldate({...modalDate,start:false})}
                    />

                )

            }




            <View>
                <View style={{ width: "100%", height: 100 }}>
                    <View style={{ paddingTop: "7%", alignItems: "center" }}>
                        <Text style={{ fontSize: 35, color: "white" }}>CUTI</Text>
                    </View>
                </View>
            </View>

            <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <View style={{ marginTop: 20, marginHorizontal: "5%", height: 700 }}>

                        <View>
                            <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                            <TextInput
                                editable={false}
                                value={name}
                                style={{ color: "black", borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "orange" }}>Position</Text>
                            <TextInput
                                editable={false}
                                value={posisi}
                                style={{ color: "black", borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "orange" }}>Start - End</Text>
                            <View style={{ justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                                <TouchableOpacity style={{ height: 36, width: "47%", borderRadius: 25, backgroundColor: "orange", }}
                                    onPress={() => { setModaldate({ ...modalDate, start: true }) }}>
                                    <View style={{ alignItems: "center", marginVertical: 7 }}>
                                        <Text style={{ color: "white", fontSize: width * 0.04 }}>
                                            <Text>
                                                {cutiData.start.toLocaleDateString()}
                                            </Text>
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 20, color: "orange" }}>-</Text>
                                <TouchableOpacity style={{ height: 36, width: "47%", borderRadius: 25, backgroundColor: "orange", }}
                                    onPress={() => { setModaldate({ ...modalDate, end: true }) }}>
                                    <View style={{ alignItems: "center", marginVertical: 7 }}>
                                        <Text style={{ color: "white", fontSize: width * 0.04 }}>
                                            <Text>
                                                {cutiData.end.toLocaleDateString()}
                                            </Text>
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "orange" }}>Neccessity</Text>
                            <TextInput
                                onChangeText={(text) => setCutiData({ ...cutiData, neccessity: text })}
                                style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> </TextInput>
                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                            <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onCuti2() }}>
                                <View style={{ alignItems: "center", marginVertical: 11 }}>
                                    <Text style={{ color: "white" }}>Clear</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }}
                                onPress={onSubmit}>
                                <View style={{ alignItems: "center", marginVertical: 11 }}>
                                    <Text style={{ color: "white" }}>Upload</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>

        </KeyboardAvoidingView>
    </View >
)
}


export default Cuti2;