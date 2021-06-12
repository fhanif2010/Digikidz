import React,{useState,useEffect} from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity 
} from "react-native";
import db from "../../../../Config"


const CutiRejected = (props) => {

    const [listCuti,setListCuti]=useState([])

    const getData = async () =>{

        db.firestore()
        .collection("User_data")
        .onSnapshot(async (snapshot)  => {
          const listItems = snapshot.docs.map(doc => ({
            ...doc.data(),
          }))
          // console.log(listItems)
          const filterUser = await listItems.filter((data,index)=>{return data.status == "v2"});
          setListCuti(filterUser);
          

        })

        return listCuti
    }
    

    React.useEffect(()=>{
        getData()

    },[])


    onCutiRejectedList = (data) => {
        props.navigation.navigate('CutiRejectedList',{name:data})
    }


    {
        return (
            <View style={{ flex: 1, backgroundColor: "orange" }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Reject</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                    <View style={{ marginTop: 20}}>
                        {listCuti.map((data,index)=>{
                            return (
                                <View key={index} style={{ marginTop: 3, marginHorizontal: 20, }}>
                                <TouchableOpacity onPress={() => { onCutiRejectedList(data) }} >
                                    <View style={styles.form.Textarea}>
                                        <Text style={styles.form.Textarea.Text}> {data.name} </Text>
                                        <Text style={styles.form.Textarea.Text}> {data.posisi} </Text>
                                    </View>
                                </TouchableOpacity>
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

export default CutiRejected;

const styles= {
    form: {
        marginTop: 40,
        marginHorizontal: 20,

        Textarea: {
            width: "100%",
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
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