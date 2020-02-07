import React,{useState,useEffect,useContext} from 'react'
import { NavigationContext } from 'react-navigation';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    FlatList,
    RefreshControl
} from 'react-native'
import TopBar from '../../components/TopBar'
export default function CatDetail(props){
    const [list,handleList] = useState([]);
    const [refresh,handleRefresh] = useState(false)
    const [offset,changeOffset] = useState(0)
    const route = useContext(NavigationContext)
    useEffect(() => {
       getDetailData()
    },[]);
    const getDetailData = () => {
       fetch(`http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=${props.navigation.state.params.id}&offset=${offset}&limit=30&key=046b6a2a43dc6ff6e770255f57328f89`)
       .then(res=>res.json())
       .then(res=>handleList(list.concat(res.data))) 
    }
    const _renderList = ({item,index})=>{
        return <TouchableHighlight 
         style={{width:'50%',marginBottom:2}}
        underlayColor="rgb(240, 240, 240)"
        onPress={()=>route.navigate('Detail',{id:item.id})}
        >
         <View style={index%2==0?styles.item_1:styles.item_2}>
          <Image source={{uri:item.cover}} style={styles.item_img} />
            <Text style={index%2==0?styles.play_1:styles.play_2} ></Text>
            <Text style={styles.item_title} numberOfLines={2}>{item.title}</Text>
        </View>
   </TouchableHighlight> 
}
const getMoreData = ()=>{
      changeOffset(offset+1)
      getDetailData()
}
const refreshData = ()=> {
    handleRefresh(true)
    handleList([])
    fetch(`http://yiapi.xinli001.com/fm/category-jiemu-list.json?category_id=${props.navigation.state.params.id}&offset=${offset}&limit=30&key=046b6a2a43dc6ff6e770255f57328f89`)
    .then(res=>res.json())
    .then(res=>{
        handleRefresh(false)
        handleList(res.data)
    }) 
}
return <View style={{flex:1}}>
    <TopBar msg={props.navigation.state.params.msg} goBack={props.navigation.goBack} />
    <FlatList
        data={list}
        keyExtractor={list.id}
        columnWrapperStyle={{marginTop:25}}
        numColumns={2}
        renderItem={_renderList}
        onEndReachedThreshold={0.1}
        onEndReached={()=>getMoreData()}
        refreshing={refresh}
        refreshControl={
        <RefreshControl 
       refreshing={refresh}
       onRefresh={()=>refreshData()}
       colors={['rgb(122, 1, 1)']}
       progressBackgroundColor="#fff"
       />
    }
    />
</View>
}

const styles = StyleSheet.create({
    list_show:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    item_1:{
        width:'100%',
        paddingLeft:15,
        paddingRight:7,
        position:'relative'
    },
    item_2:{
        width:'100%',
        paddingRight:15,
        paddingLeft:7,
        position:'relative'
    },
    item_img:{
        width:'100%',
        height:155,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    item_title:{
        lineHeight:25,
        height:70,
        textAlign:'center',
        paddingTop:8,
        paddingBottom:10,
        borderBottomLeftRadius:6,
        borderBottomRightRadius:6,
        backgroundColor:'rgb(240, 240, 240)',
        fontSize:16
    },
    play_1:{
        fontFamily:'icomoon',
        fontSize:32,
        position:'absolute',
        right:16,
        bottom:75,
        color:'#999'
    },
    play_2:{
        fontFamily:'icomoon',
        fontSize:32,
        position:'absolute',
        right:25,
        bottom:75,
        color:'#999'
    },
    loading:{
        fontSize:16,
        textAlign:'center',
        lineHeight:55
    }
})