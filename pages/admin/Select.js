import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import {
   View,
   Text,
   Image,
   StyleSheet
} from 'react-native'

export default function Select(props){
    const context = useContext(MyContext)
     const setShow = (e)=>{
         context.setPlayBoxShow(e)
     }
    useEffect(() => {
        setShow(false)
        
        return ()=>setShow(true)   
    },[]);
return <View style={{position:'relative',flex:1}}>
    <Text style={styles.logo}>随听 FM</Text>
    <Text style={styles.login} onPress={()=>props.navigation.navigate('Login',{msg:1})}>手机号登录</Text>
    <Text style={styles.nologin} onPress={()=>props.navigation.navigate('Home')}>随便看看</Text>
    <Text style={styles.resgister} onPress={()=>props.navigation.navigate('Login',{msg:0})}>没有账号?去注册</Text>
</View>
}
const styles = StyleSheet.create({
    login:{
        textAlign:"center",
        lineHeight:40,
        width:'70%',
        marginLeft:'15%',
        backgroundColor:'rgb(3, 177, 162)',
        fontSize:16,
        marginTop:'100%',
        borderRadius:20,
        color:'rgb(18, 19, 19)'
    },
    nologin:{
        textAlign:"center",
        lineHeight:40,
        width:'70%',
        marginLeft:'15%',
        backgroundColor:'rgb(235, 235, 235)',
        fontSize:16,
        marginTop:20,
        borderRadius:20,
        color:'#999'
    },
    resgister:{
        fontSize:15,
        position:'absolute',
        bottom:'28%',
        right:25,
        textDecorationLine:'underline',
    },
    logo:{
        fontSize:50,
        position:'absolute',
        top:'20%',
        left:'25%',
        color:'#999',
        fontStyle:'italic'
    }
})