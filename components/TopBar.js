import React,{useState,useEffect,useContext} from 'react'
import {NavigationContext} from 'react-navigation' 
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
export default function TopBar(props){
    const msg = props.msg || ''
return <View style={styles.box}>
    <Text style={styles.back} onPress={()=>props.goBack()}></Text>
    <Text style={styles.title}>{msg}</Text>
</View>
}

const styles = StyleSheet.create({
    box:{
        height:75,
        backgroundColor:'#fff',
        paddingTop:20
    },
    back:{
        fontFamily:'icomoon',
        fontSize:26,
        lineHeight:55,
        marginLeft:12,
        color:'#333'
    },
    title:{
        position:'absolute',
        width:'70%',
        left:'15%',
        lineHeight:95,
        fontSize:18,
        color:'#888',
        textAlign:'center'
    }
})