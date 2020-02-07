import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import {
    View,
    ScrollView,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
export default function RadioPer(props){
    const context = useContext(MyContext)
    
return <View style={styles.box}>
    <Text style={styles.title}>{props.title}</Text>
    <ScrollView horizontal={true}>
       {
           props.list.map((item,i)=>{
               return <View key={i} style={styles.item}>
                   <TouchableHighlight 
                   style={{width:'100%'}} 
                   onPress={()=>context.nav._navigation.navigate('DJdetail',{id:item.id,value:item.title})}
                   underlayColor="rgb(241, 241, 241)"
                   >
                    <Image source={{uri:item.cover}} style={styles.item_img} />
                   </TouchableHighlight>
                    <Text style={styles.name}>{item.title}</Text>
               </View>
           })
       }
</ScrollView>
</View>
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        paddingLeft:15,
        paddingRight:15,
        marginTop:15,
        marginBottom:20
    },
    title:{
        fontSize:18,
        lineHeight:35
    },
    item:{
        width:135,
        marginLeft:15,
        marginRight:5
    },
    item_img:{
        width:135,
        height:135,
        borderRadius:6
    },
    name:{
        width:135,
        fontSize:16,
        lineHeight:35,
        textAlign:'center'
    }
})