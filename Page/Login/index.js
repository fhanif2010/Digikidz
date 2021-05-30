import React, { useState,useEffect } from "react";
import "@firebase/firestore";
import db from "../../Config/index"
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
    faUserCircle,
    faKey,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector } from 'react-redux';

const Login = (props) => {

    const dispatch = useDispatch();
    const [state,setState] = useState({username:'',password:''})

    const _onLogin = async () => {
        db.auth()
            .signInWithEmailAndPassword(state.username, state.password.toLowerCase())
            .then(async (data) => {
                console.log(data)

                db.firestore()
                    .collection('User_data')
                    .doc(`${data.user.uid}`)
                    .onSnapshot(async (docs,) => {
                        
                        await dispatch({
                            type: "LOGIN",
                            name: docs.data().name,
                            address: docs.data().address,
                            number: docs.data().telephone,
                            email: docs.data().email,
                            uid: data.user.uid,
                            dob: docs.data().DoB,
                            posisi:docs.data().posisi
                        })

                        if (docs.data().status === "v2") {
                            props.navigation.navigate("Home")
                        }
                        else if (docs.data().status === "v1") {
                            props.navigation.navigate("HomeAdmin")
                        }
                    })

            })
            .catch((error) => {
                alert(error)
            })
    }



    return (
        <View style={styles.container}>
            <KeyboardAvoidingView>
                <View style={{ backgroundColor: "orange", borderBottomRightRadius: 100, borderBottomLeftRadius: 100 }}>
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: -200 }}>
                        <Image source={require("../../Asset/Image/Logo.png")} style={{ width: "50%", height: "50%", }} />
                    </View>
                </View>

                {/*USERNAME - PASSWORD*/}
                <View style={{ marginHorizontal: 30, marginTop: 70, }}>
                    <View>
                        <Text style={styles.container.text}>Username</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <FontAwesomeIcon icon={faUserCircle} size={29} style={{ marginRight: 15 }} />
                            <View style={{ marginTop: -8 }}>
                                <TextInput placeholder="Your Username"
                                    style={styles.container.textInput}
                                    onChangeText={(value) => { setState({...state,username:value}) }} />
                            </View>
                        </View>


                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.container.text}>Password</Text>
                        <View style={{ flexDirection: 'row', marginTop: 15, }}>
                            <FontAwesomeIcon icon={faKey} size={25} style={{ marginRight: 15 }} />
                            <View style={{ marginTop: -8 }}>
                                <TextInput placeholder="Your Password" secureTextEntry={true}
                                    style={styles.container.textInput}
                                    onChangeText={(value) => {setState({...state,password:value}) }} />
                            </View>
                        </View>


                    </View>

                </View>
                <View style={{ marginHorizontal: 130, marginTop: 50, width: 100, justifyContent: "center" }}>
                    <Button title="submit" onPress={ _onLogin} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )

}
export default Login;

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#d1d8e0",
        text: {
            fontWeight: 'bold',
            fontSize: 15
        },
        textInput: {
            borderBottomWidth: 1,
            width: 250,
            borderColor: "grey"
        },
        Button: {
            width: "50%",
            height: 40,
            marginHorizontal: 50,
            alignItems: 'center',
            padding: 8,
            borderRadius: 20,
            backgroundColor: '#f7b731',
        },
    }
}