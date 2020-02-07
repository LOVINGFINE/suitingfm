import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import Waring from '../../components/Waring'
import Axios from 'axios'
import {
   View,
   Text,
   Image,
   StyleSheet,
   TextInput
} from 'react-native'
import TopBar from '../../components/TopBar'
export default function Resgister(props){
    const [value,handleValue] = useState('');
    const [a_value,handleAvalue] = useState('');
    const [warn,handleWarn] = useState({msg:'',show:false})
    const context = useContext(MyContext)
     const setShow = (e)=>{
         context.setPlayBoxShow(e)
     }
    useEffect(() => {
        setShow(false)
        return ()=>setShow(true)   
    },[]);
    const handleLoginMessage = ()=>{
        console.log(1);
        
        if(a_value==value){
        Axios.post(`http://an-fine.cn:3030/register`,{phone:props.navigation.state.params.tel,password:value})
        .then(res=>{
            if(res.data.code==200){
                props.navigation.navigate('Home')
                context.handleMessage(res.data)
            }else {
                handleWarn({msg:'手机已注册，前去登录',show:true})
            setTimeout(()=>{
                handleWarn({msg:'',show:false})
            },1500)
            }
        })
        }else {
            handleWarn({msg:'两次输入不一致',show:true})
            setTimeout(()=>{
                handleWarn({msg:'',show:false})
            },1500)
        }
        
    }
return <View style={{flex:1}}>
      {
          warn.show?<Waring msg={warn.msg} />:<View />
      }
    <TopBar msg="设置密码" goBack={props.navigation.goBack} />
    <View style={{paddingTop:65}}>
    <TextInput 
    value={value}
    onChangeText={(value)=>handleValue(value)}
    style={styles.ipt}
    placeholder="请输入密码"
    secureTextEntry={true}
    autoFocus={true}
    />
    <TextInput 
    value={a_value}
    onChangeText={(value)=>handleAvalue(value)}
    style={styles.ipt}
    placeholder="确认密码"
    secureTextEntry={true}
    />
    </View>
    <Text style={styles.btn} onPress={()=>handleLoginMessage()}>注册</Text>
</View>
}
const styles = StyleSheet.create({
    ipt:{
        width:'80%',
        lineHeight:45,
        marginLeft:'10%',
        fontSize:17,
        marginBottom:35,
        borderBottomWidth:'#999',
        borderBottomWidth:1,
        paddingLeft:25
    },
    btn:{
        fontSize:16,
        width:'60%',
        backgroundColor:'rgb(119, 2, 2)',
        textAlign:'center',
        lineHeight:40,
        marginLeft:'20%',
        marginTop:45,
        borderRadius:20,
        color:'rgb(226, 226, 226)'
    }
})