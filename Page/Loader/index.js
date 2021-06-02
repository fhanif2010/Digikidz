import React,{useEffect} from 'react';
import {View} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';




const  Loader = (props) =>{


  const auth = useSelector(state => state.AuthReducer.auth);
  const status = useSelector(state => state.AuthReducer.status);
    

    useEffect(()=>{

      if(auth === 'isLogin' && status =="v1" ){
          props.navigation.navigate('HomeAdmin')

      }
      if(auth === 'isLogin' && status =="v2" ){
        props.navigation.navigate('Home')
    }
      else{
        props.navigation.navigate('Login') 
      }

     },[])

    return(
        <View></View>
    )
}

export default Loader;