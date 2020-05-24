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
export default function Password(props){
    const [value,handleValue] = useState('');
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
        Axios.post(`http://an-fine.cn:3030/login`,{phone:props.navigation.state.params.tel,password:value})
        .then(res=>{
            console.log(res.data);
            
            if(res.data.code==200){
                props.navigation.navigate('Home')
                context.setAdmin(res.data.result)
            }else {
                handleWarn({msg:'密码不正确',show:true})
            setTimeout(()=>{
                handleWarn({msg:'',show:false})
            },1500)
            }
            
        })
        .catch(res=>{
            handleWarn({msg:'服务器异常请稍后重试',show:true})
            setTimeout(()=>{
                handleWarn({msg:'',show:false})
            },1500)
        })
        
    }
return <View>
    {
          warn.show?<Waring msg={warn.msg} />:<View />
      }
    <TopBar msg="验证密码" goBack={props.navigation.goBack} />
    <TextInput 
    value={value}
    onChangeText={(value)=>handleValue(value)}
    style={styles.ipt}
    placeholder="请输入密码"
    secureTextEntry={true}
    autoFocus={true}
    />
    <Text style={styles.btn} onPress={()=>handleLoginMessage()}>登录</Text>
</View>
}
const styles = StyleSheet.create({
    ipt:{
        width:'80%',
        lineHeight:45,
        marginLeft:'10%',
        fontSize:17,
        marginTop:100,
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