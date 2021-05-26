import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Dimensions,
    Modal,
    TouchableOpacity

} from "react-native";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';

const Cuti2 = () => {


    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;


    const [cutiData, setCutiData] = useState({ name: "", position: "", start: new Date(), end: new Date(), neccessity: "",rangeDate:"" })
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
        if(startDate > endDate){
            alert("Date is Not valid")
        }
        else{
            setCutiData({...cutiData,rangeDate:diffDays})
        }

        return;


    }


    onTrial = () => {
        this.props.navigation.navigate('Trial')
    }
    onTrial2 = () => {
        this.props.navigation.navigate('Trial2')
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
                    <View style={{ width: "100%", height: 150 }}>
                        <View style={{ paddingTop: "10%", alignItems: "center" }}>
                            <Text style={{ fontSize: 35, color: "white" }}>CUTI {cutiData.rangeDate}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <ScrollView>
                        <View style={{ marginTop: 40, marginHorizontal: 20, height: 800 }}>

                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                <TextInput onChange={(text) => setCutiData({ ...cutiData, name: text })} style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Position</Text>
                                <TextInput
                                    onChange={(text) => setCutiData({ ...cutiData, position: text })}
                                    style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}></TextInput>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Start - End</Text>
                                <View style={{ justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                                    <TouchableOpacity style={{ width: width * 0.45, height: 45, borderRadius: 25, backgroundColor: "#a55eea", }}
                                        onPress={() => { setModaldate({ ...modalDate, start: true }) }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white", fontSize: width * 0.04 }}>
                                                <Text>
                                                    {cutiData.start.toString()}
                                                </Text>
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, color: "orange" }}>-</Text>
                                    <TouchableOpacity style={{ width: width * 0.45, height: 45, borderRadius: 25, backgroundColor: "#a55eea", }}
                                        onPress={() => { setModaldate({ ...modalDate, end: true }) }}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white", fontSize: width * 0.04 }}>
                                                <Text>
                                                    {cutiData.end.toString()}
                                                </Text>
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, color: "orange" }}>Neccessity</Text>
                                <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}> </TextInput>
                            </View>


                            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={() => { this.onTrial2() }}>
                                    <View style={{ alignItems: "center", marginVertical: 11 }}>
                                        <Text style={{ color: "white" }}>Clear</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={countRangeDate}>
                                    <View style={{ alignItems: "center", marginVertical: 11 }}>
                                        <Text style={{ color: "white" }}>Upload</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </KeyboardAvoidingView>
        </View >
    )
}


export default Cuti2;