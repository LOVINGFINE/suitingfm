import React,{useState,useContext} from 'react'
import MyContext from '../context/context'
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
 } from 'react-native'

 const MapTabBar = (props) =>{
     const context = useContext(MyContext)
     console.log(context.admin);
     
     const [map,handleMap] = useState(1)
     const changeRouter = (e) =>{
        handleMap(e)
        if(e==1){
            props.navigation.navigate('Recommend')
        }else {
            props.navigation.navigate('Radio')
        }
       
     }
     const showPerson=()=>{
        context.nav._navigation.navigate('Admin')
     }
     const _renderPerson = ()=>{
         if(context.admin!=null){
             return <TouchableHighlight onPress={()=>showPerson()} underlayColor="rgb(241, 241, 241)">
             <Image source={{uri:'http://an-fine.cn:3030'+context.admin.avatar}} style={styles.avatar} />
         </TouchableHighlight> 
         }else {
            return <TouchableHighlight onPress={()=>showPerson()} underlayColor="rgb(241, 241, 241)">
            <Text style={styles.loginAvatar}></Text>
        </TouchableHighlight>
            
         }
     }
     return <View style={styles.top}>
           <View style={styles.tab}>
               <TouchableHighlight 
                style={{flex:1}} 
                underlayColor="rgb(245, 245, 245)"
                onPress={()=>changeRouter(1)}>
               <Text style={map==1?styles.isSelect:styles.noSelect}>推荐</Text>
               </TouchableHighlight>
               <TouchableHighlight 
                style={{flex:1}} 
                underlayColor="rgb(245, 245, 245)"
                onPress={()=>changeRouter(2)}>
               <Text style={map==2?styles.isSelect:styles.noSelect}>节目</Text>
               </TouchableHighlight>
            </View>
            <Text style={styles.search} onPress={()=>context.nav._navigation.navigate('Search')}></Text>
     <View style={{height:55,width:55,position:'absolute',top:18,right:15,padding:10}}>
       {
           _renderPerson()
       }
     </View>
 </View>
 }
 const styles = StyleSheet.create({
    top:{
        height:75,
        backgroundColor:'rgb(241, 241, 241)',
        width:'100%',
        flexDirection:'row',
        paddingTop:20
    },
    tab:{
        width:160,
        height:55,
        flexDirection:'row'
    },
    isSelect: {
        flex: 1,
        lineHeight: 55,
        textAlign: 'center',
        fontSize:25,
        color:'rgb(148, 2, 2)'
    },
    noSelect:{
        flex: 1,
        lineHeight: 55,
        textAlign: 'center',
        fontSize:16,
        color:'#999'
    },
    avatar:{
        width:35,
        height:35,
        borderRadius:35
    },
    search:{
        fontFamily:'icomoon',
        fontSize:25,
        position:'absolute',
        right:'30%',
        color:'#999',
        top:36
    },
    loginAvatar:{
        fontFamily:'icomoon',
        fontSize:26,
        color:'#999',
        lineHeight:40
    }
})

export default MapTabBar