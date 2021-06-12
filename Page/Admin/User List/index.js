import React, { useState } from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import {
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import db from "../../../Config/index";


const UserList = (props) => {

    const [listCuti,setListCuti]=useState([])

    const getData = async () => {

        db.firestore()
        .collection("User_data")
        .onSnapshot(async (snapshot)  => {
          const listItems = snapshot.docs.map(doc => ({
            ...doc.data(),
            
          }))        
          setListCuti(listItems); 
console.log(listItems)
        })

        return listCuti
    }

    React.useEffect(() => {
        getData()
    }, [])


    onAdminProfil = (data) => {
        props.navigation.navigate('AdminProfil',{data:data})
    }
    onAddUser = () => {
        props.navigation.navigate('AddUser')
    }
    {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="height">
                    <View style={styles.header}>
                        <View style={styles.header.Logo}>
                            <Text style={styles.header.Logo.Text}>User List</Text>
                        </View>
                        <TouchableOpacity style={styles.header.btn} onPress={() => { onAddUser() }}>
                            <View style={styles.header.btn.Text}>
                                <View>
                                    <FontAwesomeIcon icon={faPlus} size={20} color="white" />
                                </View>
                                <View>
                                    <Text style={{ color: "white" }}>Create User</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.form}>
                        {listCuti.map((data, index) => {
                            return (
                            <TouchableOpacity onPress={() => { onAdminProfil(data) }} >
                                <View style={styles.form.Textarea}>
                                    <Text style={styles.form.Textarea.Text}> {data.name} </Text>
                                    <Text style={styles.form.Textarea.Text}> {data.posisi} </Text>
                                </View>
                            </TouchableOpacity>
)
                        })}

                    </View>


                </KeyboardAvoidingView>
            </View >
        )
    }
}
export default UserList;

const styles = {
    container: {
        flex: 1,
    },
    header: {
        width: "100%",
        height: 100,
        backgroundColor: "orange",
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,

        Logo: {
            paddingTop: "5%",
            alignItems: "center",

            Text: {
                fontSize: 30,
                color: "white"
            }
        },
        btn: {
            width: "60%",
            height: 45,
            borderRadius: 25,
            marginTop: 10,
            marginHorizontal: "20%",
            backgroundColor: "#a55eea",

            Text: {
                alignItems: "center",
                justifyContent: "space-around",
                marginHorizontal: "15%",
                flexDirection: "row",
                marginTop: "5%"
            }
        }

    },
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