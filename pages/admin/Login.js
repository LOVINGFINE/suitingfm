import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import {
   View,
   Text,
   Image,
   StyleSheet,
   TextInput
} from 'react-native'
import TopBar from '../../components/TopBar'
import Waring from '../../components/Waring';

export default function Login(props){
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
    const handleLogin = ()=>{
        const telStr = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
        if(telStr.test(value)){
            if(props.navigation.state.params.msg==1){
                props.navigation.navigate('Password',{tel:value})
            }else {
                props.navigation.navigate('Resgister',{tel:value})
            }
            
        }else {
            handleWarn({msg:'输入的手机号格式不正确',show:true})
            setTimeout(()=>{
                handleWarn({msg:'',show:false})
            },1500)
        }
    }
return <View>
      {
          warn.show?<Waring msg={warn.msg} />:<View />
      }
      <TopBar msg={props.navigation.state.params.msg==1?'手机号登录':'手机号注册'} goBack={props.navigation.goBack} />
      <TextInput 
      onChangeText={(value)=>handleValue(value)} 
      value={value} 
      style={styles.ipt} 
      placeholder='请输入手机号'
      autoFocus={true}
      />
      <Text style={styles.btn} onPress={()=>handleLogin()}>下一步</Text>
</View>
}
const styles = StyleSheet.create({
    ipt:{
        borderBottomColor:'#999',
        borderBottomWidth:1,
        paddingLeft:15,
        width:'80%',
        marginLeft:'10%',
        fontSize:16,
        height:45,
        marginTop:120
    },
    btn:{
        fontSize:16,
        width:'60%',
        marginTop:45,
        marginLeft:'20%',
        lineHeight:40,
        backgroundColor:'rgb(141, 1, 1)',
        textAlign:'center',
        color:'rgb(207, 207, 207)',
        borderRadius:20
    }
})