import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import Bottom from './Bottom'

import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Slider,
    ScrollView,
    StatusBar

} from 'react-native'
export default function Detail(props){
     const context = useContext(MyContext)
     const setShow = (e)=>{
         context.setPlayBoxShow(e)
     }
     const [comlist,setComlist] = useState([])
    useEffect(() => {
        setShow(false)
        if(props.navigation.state.params.id!=0) {
            getData(props.navigation.state.params.id)
            getComList(props.navigation.state.params.id)
        }
        return ()=>setShow(true)   
    },[]);
    const getData = (id)=>{
        fetch(`http://yiapi.xinli001.com/fm/broadcast-detail.json?id=${id}`)
        .then(res=>res.json())
        .then(res=>{
            context.handleMessage(res.data)
            context.setImgUrl(res.data.cover)
            context.setPlayUrl(res.data.url)
        })
    }
    const getComList = (id)=>{
        fetch(`http://yiapi.xinli001.com/fm/comment-latest-list.json?offset=0&broadcast_id=${id}&limit=10&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            setComlist(res.data)
        })
    }
    const optValue = ()=>{
        if(context.current==undefined||context.duration==undefined){
            return 0
        }else {
            return parseInt(context.current/context.duration*100)
        }
    }
    const handleTime = (value)=>{
        context.setTime(parseInt(value)/100*context.duration)
  }
  const optTime = (time)=>{    
    return `${parseInt(time/60)>9?parseInt(time/60):'0'+parseInt(time/60)}:${parseInt(time%60)>9?parseInt(time%60):'0'+parseInt(time%60)}`
}
return <View style={{flex:1}}>
    
<ScrollView style={{flex:1}}>
    <ImageBackground source={{uri:context.message.cover}} style={{width:'100%',height:300}}>
    <View style={{paddingLeft:45,paddingRight:45,backgroundColor:'rgba(255, 255, 255, 0.218)',paddingTop:20}}>
        <Text 
        style={styles.back}
        onPress={()=>props.navigation.goBack()}
        >&#xe940;</Text>
        <Text style={styles.title}>{context.message.title}</Text>
    </View>
    <Text 
    style={{fontFamily:'icomoon',fontSize:55,color:'rgb(211, 210, 210)',textAlign:'center',marginTop:'18%'}}
    onPress={()=>context.setPlay(!context.play)}
    >{context.play?'':''}</Text>
    <View style={{position:'absolute',bottom:0,width:'100%',height:45,backgroundColor:'rgba(15, 15, 15, 0.253)'}}>
    <Slider 
      style={styles.slider}
      value={optValue()}
      thumbTintColor="rgb(121, 0, 0)"
      minimumTrackTintColor="rgb(122, 2, 2)"
      maximumTrackTintColor="#fff"
      maximumValue={100}
      onValueChange={handleTime}
      />
      <Text style={styles.current}>{optTime(context.current)}</Text>
      <Text style={styles.duration}>{optTime(context.duration)}</Text>
    </View>
    </ImageBackground>
    <View style={styles.nick}>
        <Text style={styles.nickname}>{context.message.speak}</Text>
        <View style={styles.nick_mess}>
        <Text style={styles.playCount}></Text>
        <Text styles={styles.favCount}></Text>
        </View>
    </View>
    {/* <Bottom /> */}
    
    <View style={styles.com}>
    <Text style={{paddingLeft:15,lineHeight:45,marginTop:15,backgroundColor:'#fff',fontSize:18}}>评论</Text>
    {
        comlist.map((item,i)=>{
            return <View style={styles.com_item} key={i}>
                <View style={{flexDirection:'row',marginTop:10}}>
                <Image source={{uri:item.user.avatar}} style={styles.com_img} />
                <Text style={styles.com_nick}>{item.user.nickname}</Text>
                </View>
                <Text style={styles.com_content}>{item.content}</Text>
                <Text style={styles.com_time}>{item.created}</Text>
        </View>
        })
    }
</View>
</ScrollView>
<View style={styles.methods}>
            <Text style={styles.mt_item}>&#xe94f;</Text>
            <Text style={styles.mt_item}>&#xe9a6;</Text>
            <Text style={styles.mt_item}>&#xe914;</Text>
            <Text style={styles.mt_item}>&#xe95b;</Text>
</View>
</View>
}

const styles = StyleSheet.create({
    title:{
        textAlign:'center',
        lineHeight:55,
        fontSize:16,
        color:'rgb(241, 241, 241)'
    },
    box:{
        flex:1,
        position:'relative',
        paddingTop:20
    },
    methods:{
        height:60,
        flexDirection:'row',
        zIndex:100,
        borderTopColor:'rgb(233, 233, 233)',
        borderTopWidth:1,

    },
    mt_item:{
        flex:1,
        fontFamily:'icomoon',
        fontSize:22,
        color:'#333',
        lineHeight:60,
        textAlign:'center'
    },
    slider:{
        width: "80%",
        marginLeft:'10%',
        marginTop:15
    },
    bottom:{
        // 底部容器 样式
        height:195,
    },
    back:{
        // 返回按钮样式
        fontFamily:'icomoon',
        fontSize:26,
        position:'absolute',
        left:15,
        top:35,
        zIndex:2,
        color:'rgb(241, 241, 241)'
    },
    current:{
        position:'absolute',
        top:13,
        left:7,
        fontSize:15,
        color:'#fff'
    },
    duration:{
        position:'absolute',
        top:13,
        right:7,
        fontSize:15,
        color:'#fff'  
    },
    nick:{
        width:'100%',
        height:50,
        flexDirection:'row'
    },
    nickname:{
        flex:1,
        lineHeight:50,
        color:'#444',
        fontSize:17,
        paddingLeft:15
    },
    nick_mess:{
        width:200,
        flexDirection:'row',
        paddingRight:15
    },
    playCount:{
        flex:1,
        lineHeight:50,
        fontFamily:'icomoon'
    },
    favCount:{
        flex:1,
        lineHeight:50
    },
    com:{
        backgroundColor:'rgb(233, 233, 233)'
    },
    com_item:{
       backgroundColor:'#fff',
       marginTop:7,
       marginBottom:5,
       paddingLeft:12,
       paddingRight:12,
       paddingBottom:20
    },
    com_nick:{
        fontSize:16,
        lineHeight:35,
        marginLeft:15
    },
    com_img:{
       width:40,
       height:40,
       borderRadius:20
    },
    com_content:{
        fontSize:15,
        marginLeft:25,
        marginTop:10,
        backgroundColor:'rgb(241, 241, 241)',
        lineHeight:30,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:6,
        paddingBottom:12
    },
    com_time:{
        marginLeft:'60%',
        textAlign:'center',
        lineHeight:30,
        marginTop:12,
        fontSize:13,
    }
})