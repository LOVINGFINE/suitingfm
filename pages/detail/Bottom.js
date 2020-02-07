import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import {
    View,
    Text,
    StyleSheet,
    Slider
} from 'react-native'
export default function Bottom(props){
    const context = useContext(MyContext)
    const optTime = (time)=>{    
        return `${parseInt(time/60)>9?parseInt(time/60):'0'+parseInt(time/60)}:${parseInt(time%60)>9?parseInt(time%60):'0'+parseInt(time%60)}`
    }
    const handleTime = (value)=>{
          context.setTime(parseInt(value)/100*context.duration)
    }
    const opLoop = ()=>{
        if(context.loop==0){
            return ''
        }else if(context.loop==1){
            return ''
        }else if(context.loop==2){
            return ''
        }
    }
    const changeLoopType = ()=>{
        context.changeLoopType()
    }
    const optValue = ()=>{
        if(context.current==undefined||context.duration==undefined){
            return 0
        }else {
            return parseInt(context.current/context.duration*100)
        }
    }
return <View style={styles.box}>
      <Slider 
      style={styles.slider}
      value={optValue()}
      thumbTintColor="rgb(121, 0, 0)"
      minimumTrackTintColor="rgb(167, 1, 1)"
      maximumTrackTintColor="rgb(151, 151, 151)"
      maximumValue={100}
      onValueChange={handleTime}
      />
      <Text style={styles.l_time}>{optTime(context.current)}</Text>
      <Text style={styles.r_time}>{optTime(context.duration)}</Text>
      <View style={styles.control}>
          <Text 
          style={styles.font_left}
          onPress={()=>changeLoopType()}
          >{opLoop()}</Text>
          <Text style={styles.font}>&#xe99e;</Text>
          <Text style={styles.playFont} onPress={()=>context.setPlay(!context.play)}>{context.play?'':''}</Text>
          <Text style={styles.font}>&#xe9a1;</Text>
          <Text style={styles.font_right}>&#xe912;</Text>
      </View>
</View>
}

const styles = StyleSheet.create({
    box:{
        height:160,
        position:'relative'
    },
    slider: {
        width: "80%",
        position:'absolute',
        left:'10%',
        marginTop:25
    },
    l_time:{
        position:'absolute',
        top:23,
        left:7,
        fontSize:15
    },
    r_time:{
        position:'absolute',
        right:7,
        top:23,
        fontSize:15
    },
    font_left:{
        fontFamily:'icomoon',
        color:'rgb(121, 121, 121)',
        fontSize:30,
        flex:1,
        lineHeight:100,
        textAlign:'center'
    },
    font_right:{
        fontFamily:'icomoon',
        color:'rgb(121, 121, 121)',
        fontSize:22,
        flex:1,
        lineHeight:100,
        textAlign:'center'
    },
    font:{
        fontFamily:'icomoon',
        color:'rgb(97, 96, 96);',
        fontSize:35,
        flex:1,
        lineHeight:100,
        textAlign:'center'
    },
    playFont:{
        fontFamily:'icomoon',
        color:'rgb(151, 3, 3)',
        fontSize:42,
        flex:1,
        lineHeight:100,
        textAlign:'center'
    },
    control:{
        width:'100%',
        flexDirection:'row',
        height:100,
        position:'absolute',
        bottom:0
    }
})