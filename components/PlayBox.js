import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../context/context'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
export default function PlayBox(props){
      const context = useContext(MyContext)
      const showBox = ()=>{
        props.map._navigation.navigate('Detail',{id:0})
        // id==0 不用再请求数据  
      }
return <View style={styles.box}>
      <TouchableOpacity onPress={()=>showBox()} style={{width:80,height:'100%'}}>
        <Image source={{uri:context.message.cover}} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.name}>{context.message.title}</Text>
</View>
}

const styles = StyleSheet.create({
    box: {
      width: '100%',
      height: 60,
      position: 'absolute',
      bottom: 10,
      backgroundColor: 'rgba(75, 75, 75, 0.6)',
      paddingTop: 5,
      flexDirection: 'row'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 30
    },
    name: {
      flex: 1,
      lineHeight: 55,
      color: 'rgb(243, 243, 243)',
      marginLeft: 15,
      textAlign: 'center',
      fontSize: 16
    }
})