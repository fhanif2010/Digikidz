import React, {useState} from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity 
} from "react-native";
import db from "../../../../Config/index";



const CutiProgres = (props) => {
    const [listCuti,setListCuti]=useState([])



    React.useEffect(()=>{
        db.database().ref().child(`/cuti/`).orderByChild("status").equalTo(0)
        .on('value', (snapshoot) => {
            const data = snapshoot.val();
            if (data !== null) {
                const translateData = Object.values(data);
                // listCuti(translateData)
                setListCuti(translateData)

            }
        })


    },[])


    onCutiProses = () => {
        props.navigation.navigate('CutiProses')
    }
    onHistoty3 = () => {
        props.navigation.navigate('History3')
    }
    onTask3 = () => {
        props.navigation.navigate('Task3')
    }


    {
        return (
            
            <View style={{ flex: 1, backgroundColor: "orange"  }}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{ height: 100 }}>
                        <View style={{ paddingTop: "7%", alignItems: "center" }}>
                            <Text style={{ fontSize: 30, color: "white" }}>Cuti Progres</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "white", width: "100%", height: "100%", borderTopStartRadius: 40, borderTopEndRadius: 40 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                            <View style={{ marginVertical: 6, width: "100%" }}>
                                {listCuti.map((data,index)=>{
                                    return(
                                        <TouchableOpacity onPress={() => { props.navigation.navigate("CutiProses",{detail:data}) }}>
                                        <View style={{marginTop:3, width: "100%", height: 50, flexDirection: "row",justifyContent:"space-between", alignItems: "center", backgroundColor: "#dfe4ea", borderRadius: 15,paddingHorizontal:20 }}>
                                        <Text style={{ fontSize: 18 }}> {data.tgl}</Text>
                                            <Text style={{ fontSize: 18 }}> {data.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    )
                                })}                           
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}


export default CutiProgres;


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