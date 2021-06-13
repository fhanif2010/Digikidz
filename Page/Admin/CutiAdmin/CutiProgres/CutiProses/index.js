import { firestore } from "firebase";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity
} from "react-native";
import db from "../../../../../Config/index";

const CutiProses = (props) => {

    const time = new Date();
    const timeNow = time.toDateString();
    const detail = props.route.params.detail;
    const [note, setNote] = useState('');
    const [profile,setProfile] = useState([])


const onValidation = () => {

    var j = null;
    const dataForm = [{name:"note",value:note}]

    for(var i = 0;i <dataForm.length; i++){
        if(dataForm[i].value == ""){
            j = i;
            break;
        }
        else{
            j = dataForm.length;
        }
    }
    if(j == dataForm.length){
        handelApprove();
    }
    else{
        alert(`${dataForm[j].name} belum diisi `)
    }
}

const onValidationRejected = () => {


    var j = null;
    const dataForm = [{name:"note",value:note}]

    for(var i = 0;i <dataForm.length; i++){
        if(dataForm[i].value == ""){
            j = i;
            break;
        }
        else{
            j = dataForm.length;
        }
    }
    if(j == dataForm.length){
        handelReject();
    }
    else{
        alert(`${dataForm[j].name} belum diisi `)
    }
}

React.useEffect(()=>{
    db.firestore()
    .collection("User_data")
    .onSnapshot(async (snapshot)  => {
      const  profileFetch = await snapshot.docs.map(doc => ({
          ...doc.data(),

        }))

      const filterUser = await profileFetch.filter((data,index)=>{return data.uid == detail.kode});

    setProfile(filterUser)
      
    })
},[])

    const handelApprove = async() => {

   

        const result = parseInt(profile[0].cuti) - parseInt(detail.range) ;

        console.log(detail.range)
        console.log(profile[0].cuti)


        db.database().ref(`/cuti/${detail.id}`)
            .update({
                name: detail.name,
                position: detail.position,
                start: detail.start,
                end: detail.end,
                neccessity: detail.neccessity,
                note: note,
                id: detail.id,
                range: detail.range,
                status: 1,
                tgl: detail.tgl,
                kode: detail.kode
            })
            .then(async(value)=>{

                db.firestore().collection("User_data").doc(detail.kode).update(
                   {"cuti" : result}
                )
                .then(()=>{
                    alert("Succes")
                })
            
                props.navigation.navigate('CutiProgres')
                
            })
            .catch((error)=>{
                alert(error)
            })

    }

    const handelReject = () => {
        db.database().ref(`/cuti/${detail.id}`)
        .update({
            name: detail.name,
            position: detail.position,
            start: detail.start,
            end: detail.end,
            neccessity: detail.neccessity,
            note: note,
            id: detail.id,
            range: detail.range,
            status: 2,
            tgl: detail.tgl,
            kode: detail.kode
        })
        .then(()=>{
            alert("Succes"),
            props.navigation.navigate('CutiProgres')

        })
        .catch((error)=>{
            alert(error)
        })


    }


    onTrial = () => {
        props.navigation.navigate('Trial')
    }
    onTrial2 = () => {
        props.navigation.navigate('Trial2')
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View>
                        <View style={{ width: "100%", height: 100 }}>
                            <View style={{ paddingTop: "7%", alignItems: "center" }}>
                                <Text style={{ fontSize: 30, color: "white" }}>Cuti Proses</Text>
                            </View>
                        </View>
                    </View>

                    <ScrollView>
                        <View style={{ backgroundColor: "white", borderTopStartRadius: 40, borderTopEndRadius: 40, height: 760 }}>
                            <View style={{ marginTop: 20, marginHorizontal: 20 }}>

                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Name</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.name}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Position</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.position}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Start - End</Text>
                                    <View style={{ justifyContent: "space-around", flexDirection: "row", width: "100%" }}>
                                        <TextInput style={{ width: "47%", borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.start}</TextInput>
                                        <Text style={{ fontSize: 20, color: "orange" }}>-</Text>
                                        <TextInput style={{ width: "47%", borderRadius: 15, borderWidth: 1, height: 36, borderColor: "gray", justifyContent: "center", backgroundColor: "#dddddd" }}>{detail.end}</TextInput>
                                    </View>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Neccessity</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}>{detail.neccessity}</TextInput>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 20, color: "orange" }}>Note</Text>
                                    <TextInput style={{ borderRadius: 15, borderWidth: 1, height: 150, borderColor: "gray", justifyContent: "flex-end", backgroundColor: "#dddddd" }}
                                        onChangeText={(Text) => setNote(Text)}
                                    ></TextInput>
                                </View>

                                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 30 }}>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={onValidationRejected}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Rejected</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea" }} onPress={onValidation}>
                                        <View style={{ alignItems: "center", marginVertical: 11 }}>
                                            <Text style={{ color: "white" }}>Approve</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View >
        )
    }
}

export default CutiProses;