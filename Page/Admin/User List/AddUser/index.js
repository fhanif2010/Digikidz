import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import db from '../../../../Config';


const AddUser = (props) => {

    const [state,setState] = useState({email:"",password:""})
    const [profile, setProfile] = useState({ name: "", posisi: "", phone: "", adress: "", birtd: "" })

    onUserList = () => {
        props.navigation.navigate('UserList')
    }

    onAdminProfil = () => {
        props.navigation.navigate('AdminProfil')
    }

    const handleSubmit = () =>{
        

        db.auth().createUserWithEmailAndPassword(state.email,state.password)
        .then((user)=>{
            const firebase = db.firestore();
                firebase.collection("User_data").doc(`${user.user.uid}`).set({
                    name:profile.name,
                    posisi:profile.posisi,
                    cuti:"20",
                    email:state.email,
                     telephone:profile.phone,
                    address:profile.adress,
                    DoB:profile.birtd,
                    uid:user.user.uid,
                    status:"v2",
                    trial:0,


                })
                .then(function() {
                    alert("berhasil")
                })
                .catch(function(error) {
                    alert("gagal")
                });
        })
        .catch(eror=>{
            alert(eror)
        })
    } 

    return (
        <View style={{ flex: 1 }}>


            <View style={{ marginTop: 20, marginHorizontal: 20, borderWidth: 1, borderRadius: 20, borderColor: "orange", backgroundColor: "white" }}>
                <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
                    <View>
                        <Text style={{ fontSize: 15, color: "orange" }}>Name :</Text>
                        <TextInput  
                        onChangeText={(e)=>{setProfile({...profile,name:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Posisi :</Text>
                        <TextInput 
                         onChangeText={(e)=>{setProfile({...profile,posisi:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Email :</Text>
                        <TextInput 
                         onChangeText={(e)=>{setState({...state,email:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Password :</Text>
                        <TextInput 
                        secureTextEntry={true}
                        onChangeText={(e)=>{setState({...state,password:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>No. Phone :</Text>
                        <TextInput 
                         onChangeText={(e)=>{setProfile({...profile,phone:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Address :</Text>
                        <TextInput 
                        
                        onChangeText={(e)=>{setProfile({...profile,adress:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: "orange" }}>Date of Brith :</Text>
                        <TextInput 
                        
                        onChangeText={(e)=>{setProfile({...profile,birtd:e})}}
                        style={{ marginTop: -5, fontSize: 15, borderBottomWidth: 1, borderColor: "orange", paddingHorizontal: 10, height: 40 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-around", marginTop: 40 }}>
                        <TouchableOpacity  style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} onPress={() => { this.onUserList() }}>
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                <Text style={{ color: "white" }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={handleSubmit}
                        style={{ width: 120, height: 45, borderRadius: 25, backgroundColor: "#a55eea", alignItems: "center", justifyContent: "center", }} >
                            <View style={{ marginHorizontal: "15%", flexDirection: "row", marginTop: "3%" }}>
                                <Text style={{ color: "white" }}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )

}


export default AddUser;