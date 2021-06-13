import React,{useState} from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
} from "react-native";
import db from "../../../../../Config";

const TrialCancelList = (props) => {

    const name = props.route.params.data.name;

    const [listCuti, setListCuti] = useState([])

    React.useEffect(() => {

        db.database().ref().child("trial_progres").orderByChild("name").equalTo(name)
            .on('value', (snapshoot) => {
                const data = snapshoot.val();
                if (data !== null) {
                    const translateData = Object.values(data);
                    // listCuti(translateData)
                    const filter = translateData.filter((data, index) => { return data.status == "2" })
                    setListCuti(filter)

                }
            })
    }, [])

    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Cancel List</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20 }}>
                        {listCuti.map((data, index) => {
                            return (
                                <View style={{ marginTop: 3, marginHorizontal: 20, }}>
                                    <View style={{ marginTop: 10, width: "100%", minHeight: 50, backgroundColor: "#dfe4ea", borderRadius: 15, padding: 10, fontSize: 15, display: 'flex', flexWrap: 'wrap', fontSize: 15 }}>
                                        <Text> Name = {data.nameStudent}</Text>
                                        <Text> Program = {data.program} </Text>
                                        <Text> Level = {data.level}</Text>
                                        <Text> Gender = {data.gender}</Text>
                                        <Text> Age =  {data.age}</Text>
                                        <Text> Note =  {data.note}</Text>
                                    </View>
                                </View>
                            )
                        })}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default TrialCancelList;

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