import React,{useState,useEffect,useContext} from 'react'
import TopBar from '../../components/TopBar'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Image,
    RefreshControl
} from 'react-native'
export default function Result(props){
    const [list,handleList] = useState([]);
    const [refreshing,handleRefreshing] = useState(false)
    const [show,handleShow] = useState(false)
    useEffect(() => {
        getResult()
    },[]);
    const getResult = ()=>{
        handleList([])
        fetch(`http://bapi.xinli001.com/fm2/broadcast_list.json/?q=${props.navigation.state.params.value}&is_teacher=&offset=0&speaker_id=0&rows=10&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            if(res.count!=0){
                handleList(res.data) 
            }else {
                handleShow(true)
            } 
            handleRefreshing(false)  
        })
    }
    const goDetail = (id)=>{
        props.navigation.navigate('Detail',{id:id})
    }
    const _onRefresh = ()=>{
        handleRefreshing(true)
        getResult()
    }
    const backIndex = ()=>{
        props.navigation.navigate('Home')
    }
return <View>
       <TopBar msg={props.navigation.state.params.value} goBack={backIndex} />
       <ScrollView
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={_onRefresh}
          colors={["rgb(141, 2, 2)"]}
          progressBackgroundColor="#fff" />
       }
       >
        {empty(show,props.navigation.goBack)}
        {
            list.map(item=>{
                return <TouchableHighlight 
                key={item.id}
                onPress={()=>goDetail(item.id)}
                underlayColor="rgb(241, 241, 241)"
                style={{marginTop:15,marginBottom:12,paddingLeft:15,paddingRight:15}}
                >
                    <View style={styles.item}>
                        <Image source={{uri:item.cover}} style={styles.item_img} />
                        <Text style={styles.play}></Text>
                        <View style={{marginLeft:15,width:'55%'}}>
                            <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                            <Text style={styles.speak}>{item.speak}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            })
        }
       </ScrollView>
</View>
}
const empty = (e,goBack)=>{
    if(e){
        return <View style={styles.no_res}>
        <Text style={styles.empty}>
            该搜索词没有找到结果
        </Text>
        <Text 
        style={styles.change}
        onPress={()=>goBack()}
        >
            换一个试试
        </Text>
    </View>
    }else {
        return <View />
    }
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        backgroundColor:'rgb(241, 241, 241)'
    },
    item_img:{
        width:140,
        height:140,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
    title:{
        fontSize:16,
        lineHeight:25,
        marginTop:6
    },
    speak:{
        fontSize:15,
        color:'#777',
        marginTop:5
    },
    play:{
        fontFamily:'icomoon',
        fontSize:38,
        position:'absolute',
        left:100,
        bottom:15,
        color:'#999'
    },
    no_res:{
        marginTop:25,
    },
    empty:{
        fontSize:18,
        textAlign:'center',
        lineHeight:45
    },
    change:{
        fontSize:15,
        color:'blue',
        textAlign:'center'
    }
})