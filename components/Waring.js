import React,{useState,useEffect,useContext} from 'react'
import {
   View,
   Text,
   Image,
   StyleSheet
} from 'react-native'
export default function (props){
    // const [, ] = useState(null);
    // useEffect(() => {});
return <View style={styles.box}>
        <Text style={styles.msg}>{props.msg}</Text>
        <Text style={styles.font}></Text>
</View>
}
const styles = StyleSheet.create({
     box:{
         width:'60%',
         height:110,
         backgroundColor:'rgba(47, 47, 47, 0.445)',
         position:'absolute',
         left:'20%',
         top:'50%',
         borderRadius:9
     },
     msg:{
         fontSize:16,
         color:'rgb(41, 40, 40)',
         textAlign:'center',
         lineHeight:45
     },
     font:{
         fontFamily:'icomoon',
         fontSize:32,
         textAlign:'center',
         lineHeight:35,
         color:"rgb(41, 40, 40)"
     }
})