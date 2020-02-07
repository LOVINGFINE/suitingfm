import React,{useState,useEffect,useContext} from 'react'
import MyContext from '../../context/context'
import RadioPer from './RadioPer'
import {
    Text,
    FlatList,
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    RefreshControl
} from 'react-native'
export default function Recommend(props){
    const [list,setList] = useState([]);
    const [index,handleIndex] = useState(null)
    const [offset,handleOffset] = useState(0)
    const [refreshing,handleRefreshing] = useState(false)
    const [perlist,handlePerlist] = useState({hotlist:[],newlist:[]})
    const context = useContext(MyContext)
    useEffect(() => {
        getData()  
    },[]);
    const getData = ()=>{
        handleRefreshing(true)
        fetch(`http://yiapi.xinli001.com/fm/newfm-list.json?offset=${offset}&limit=20&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            setList(res.data)
        })
        fetch('http://yiapi.xinli001.com/fm/diantai-page.json?key=046b6a2a43dc6ff6e770255f57328f89')
        .then(res=>res.json())
        .then(res=>{
            handlePerlist(res.data)
            handleRefreshing(false)
        })
    }
    const goDetail = (id)=>{
        context.nav._navigation.navigate('Detail',{id:id})
        
    }
    const _onRefresh = ()=>{
        setList([])
        handlePerlist({hotlist:[],newlist:[]})
        getData()
    }
    const listPlay = (id)=>{
        context.setPlay(true)
        if(id==index){
            handleIndex(null)
        }else{
            handleIndex(id)
            changeData(id)
        }
    }
    const changeData = (id)=>{
        fetch(`https://yiapi.xinli001.com/fm/broadcast-detail.json?id=${id}`)
        .then(res=>res.json())
        .then(res=>{
            context.handleMessage(res.data)
            context.setPlay(false)
        })
    }
    const opListPlay = (id)=>{
        if(context.play){
           return ''
        }else {
           return index == id?'':''
        }
        
    }
return (
    <ScrollView
    refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={_onRefresh}
          colors={["rgb(141, 2, 2)"]}
          progressBackgroundColor="#fff" />
    }
    >
        <RadioPer list={perlist.hotlist} title="热门电台" />
        <RadioPer list={perlist.newlist} title="最新电台" />
        <Text style={styles.header_title}>热门推荐</Text>
        <View style={styles.listBox}>
        {
            list.map((item,i)=>{
                return <View key={i} style={styles.item}>
                <TouchableHighlight onPress={()=>goDetail(item.id)} style={{flex:1}} underlayColor="rgb(241, 241, 241)">
                    <Image source={{uri:item.cover}} style={styles.image} />
                </TouchableHighlight>
                <Text style={styles.play} onPress={()=>listPlay(item.id)}>{opListPlay(item.id)}</Text>
            <Text style={styles.name}>{item.title}</Text>
        </View>
        })
        }
        </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    image:{
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        height: 150
    },
    listBox:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    item:{
        width:'50%',
        padding:14,
        position:'relative'
    },
    name:{
        fontSize:15,
        backgroundColor:'rgb(241, 240, 240)',
        lineHeight:30,
        height:60,
        paddingLeft:12,
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
        textAlign:'center'
    },
    play:{
        fontFamily:'icomoon',
        fontSize:28,
        color:'rgb(187, 187, 187)',
        position:'absolute',
        right:25,
        bottom:95
    },
    header_title:{
        lineHeight:35,
        fontSize:18,
        color:'#333',
        paddingLeft:15,
    }
})