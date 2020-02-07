import React,{useState,useEffect,useContext} from 'react'
import Category from './category/Category'
import MyContext from '../context/context'
import {
    Text,
    View,
    ScrollView,
    Image,
    StyleSheet,
    TouchableHighlight,
    RefreshControl
} from 'react-native'
export default function Radio(props){
     const [list,handleList] = useState([]);
     const [refreshing,handleRefreshing] = useState(false)
     const context = useContext(MyContext)
     const [offset,handleOffset] = useState(0)
    useEffect(() => {
        fetch(`http://yiapi.xinli001.com/fm/newlesson-list.json?offset=${offset}&limit=20&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>handleList(list.concat(res.data)))
    },[]);
    const _onRefresh = ()=>{
        handleList([])
        handleRefreshing(true)
        fetch(`http://yiapi.xinli001.com/fm/newlesson-list.json?offset=${offset}&limit=20&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            handleList(res.data)
            handleRefreshing(false)
        })
    }
return <ScrollView 
        style={{flex:1}}
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={_onRefresh}
              colors={["rgb(141, 2, 2)"]}
              progressBackgroundColor="rgb(214, 214, 214)" />
        }     
    >
    <Category />
    <Text style={styles.title}>精彩心理课</Text>
    {
        list.map((item,i)=>{
            return <TouchableHighlight 
                    key={i} onPress={()=>context.nav._navigation.navigate('Detail',{id:item.id})} 
                    underlayColor="rgb(241, 241, 241)"
                    style={{height:150,marginBottom:25,marginLeft:15,marginRight:15,}}>
                <View style={styles.item}>
                <Image source={{uri:item.cover}} style={styles.item_img} />
                <Text style={styles.play}></Text>
                <View style={styles.message}>
                        <Text style={styles.dec}>{item.title}</Text>
                        <Text style={styles.speak}>{item.speak}</Text>
                    <Text style={styles.content}>{item.diantai.content}</Text>
                 </View>
              </View>
            </TouchableHighlight>
        })
    }
</ScrollView>
}

const styles = StyleSheet.create({
    title:{
        lineHeight:35,
        marginLeft:12,
        marginRight:12,
        paddingLeft:12,
        borderBottomWidth:2,
        borderBottomColor:'rgb(156, 2, 2)',
        fontSize:18,
        lineHeight:35,
        marginTop:25,
        marginBottom:15
    },
    item:{
        marginBottom:20,
        height:150,
        width:'100%',
        flexDirection:'row'
    },
    play:{
        fontFamily:'icomoon',
        fontSize:38,
        position:'absolute',
        left:100,
        bottom:15,
        color:'#999'
    },
    item_img:{
        height:150,
        width:150,
        borderRadius:5
    },
    message:{
        marginLeft:15,
        width:'52%'
    },
    speak:{
        lineHeight:35,
        width:'100%',
        fontSize:18
    },
    dec:{
        fontSize:16,
        color:'rgb(121, 121, 121)',
        lineHeight:25,
        height:50
    },
    content:{
        fontSize:16,
        lineHeight:25,
        height:50
    }
})