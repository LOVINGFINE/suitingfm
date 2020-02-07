import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../context/context'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
import TopBar from '../components/TopBar'
export default function Admin(props){
    // const [, ] = useState(null);
    const setShow = (e)=>{
        context.setPlayBoxShow(e)
    }
   useEffect(() => {
       setShow(false)
       
       return ()=>setShow(true)   
   },[]);
    const context = useContext(MyContext)
    const _adminView = ()=>{
         if(context.admin==null){
             return <View style={styles.noLogin}>
                   <Text style={styles.goLogin} onPress={()=>props.navigation.navigate('Select')}>登录</Text>
             </View>
         }else{
             return <View style={styles.login}>
                    <Image source={{uri:'http://an-fine.cn:3030'+context.admin.avatar}} style={styles.avatar} />
                    <Text style={styles.nickname}>{context.admin.nickname}</Text>
                    <Text style={styles.local}>{context.admin.local}</Text>
             </View>
         }
    }
    const checkOut = ()=>{
        props.navigation.navigate('Select')
        context.setAdmin(null)
    }
return <View>
    <TopBar msg="个人主页" goBack={props.navigation.goBack} />
    <ScrollView
    style={{backgroundColor:'rgb(245, 245, 245)'}} 
    >
        {
            _adminView()
        }
        <View style={styles.item}>
            <Text style={styles.icon}></Text>
            <Text style={styles.decs}>修改资料</Text>
            <Text style={styles.etding} onPress={()=>props.navigation.navigate('')}></Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.icon}></Text>
            <Text style={styles.decs}>我的收藏</Text>
            <Text style={styles.etding} onPress={()=>props.navigation.navigate('')}></Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.icon}></Text>
            <Text style={styles.decs}>我的播单</Text>
            <Text style={styles.etding} onPress={()=>props.navigation.navigate('')}></Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.icon}></Text>
            <Text style={styles.decs}>播放设置</Text>
            <Text style={styles.etding} onPress={()=>props.navigation.navigate('')}></Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.icon}></Text>
            <Text style={styles.decs}>账号管理</Text>
            <Text style={styles.etding} onPress={()=>props.navigation.navigate('')}></Text>
        </View>
        {
            context.admin==null?<View />:<Text style={styles.logout} onPress={()=>checkOut()}>退出登录</Text>
        }
    </ScrollView>
</View>
}
const styles = StyleSheet.create({
    noLogin:{
        backgroundColor:'rgb(245, 245, 245)',
        paddingBottom:35,
    },
    goLogin:{
        width:'80%',
        marginLeft:'10%',
        backgroundColor:'rgb(121, 2, 2)',
        lineHeight:40,
        textAlign:'center',
        fontSize:18,
        color:'#666',
        marginTop:35,
        borderRadius:20,
        color:'#fff'
    },
    login:{
        paddingTop:15,
        paddingBottom:25,
        marginTop:2,
        backgroundColor:'#fff',
        alignItems:'center',
    },
    logout:{
        width:'80%',
        lineHeight:40,
        textAlign:'center',
        fontSize:16,
        color:'#555',
        backgroundColor:'rgb(218, 216, 216);',
        marginLeft:'10%',
        borderRadius:40,
        marginTop:35
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:60
    },
    nickname:{
        lineHeight:35,
        color:'#666',
        fontSize:18
    },
    item:{
        paddingLeft:15,
        paddingRight:15,
        height:55,
        marginTop:5,
        backgroundColor:'#fff',
        marginBottom:10,
        flexDirection:'row'
    },
    icon:{
        fontFamily:'icomoon',
        fontSize:22,
        lineHeight:55,
        width:75,
        textAlign:'center',
        color:'#666'
    },
    decs:{
        fontSize:16,
        color:'#333',
        lineHeight:55,
        flex:1
    },
    etding:{
        fontFamily:'icomoon',
        fontSize:23,
        lineHeight:55,
        width:65,
        textAlign:'center'
    }
})