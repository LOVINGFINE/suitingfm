import React,{useState,useEffect,useContext} from 'react'
import TopBar from '../../components/TopBar'
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    RefreshControl,
    TouchableHighlight
} from 'react-native'
export default function DJdetail(props){
    const [message,handleMessage] = useState(null);
    const [refreshing,handleRefreshing] = useState(true)
    const [offset,handleOffset] = useState(0)
    const [list,handleList] = useState([])
    useEffect(() => {
        getData()
        getList()
    },[]);
    const getData = ()=>{
        
        handleRefreshing(true)
        fetch(`http://yiapi.xinli001.com/fm/diantai-detai.json?id=${props.navigation.state.params.id}&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            handleMessage(res.data)
            handleRefreshing(false)
        })
    }

    const getList = ()=>{
        fetch(`http://yiapi.xinli001.com/fm/diantai-jiemu-list.json?offset=${offset}&limit=16&diantai_id=${props.navigation.state.params.id}&key=046b6a2a43dc6ff6e770255f57328f89`)
        .then(res=>res.json())
        .then(res=>{
            if(res.data.length<15){

            }else{
                handleList(list.concat(res.data))
            }
        })
    }
    const _onRefresh = ()=>{
        handleList([])
        handleMessage(null)
        getData()
        getList()
    }
    const _renderView = ()=>{
        return <View style={styles.message}>
            <View style={styles.top}>
            <Image source={{uri:message.cover}} style={styles.cover} />
           <Text style={styles.radio_name}>{message.user.nickname}的电台</Text>
           <Text style={styles.content}>{message.content}</Text>
        </View>
      
      {
          metods(props.navigation.navigate,message.viewnum,message.commentnum)
      }
    </View>
    }
return <View>
        <TopBar msg={`电台详情-${props.navigation.state.params.value}`} goBack={props.navigation.goBack} />
        <ScrollView
        refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={_onRefresh}
              colors={["rgb(141, 2, 2)"]}
              progressBackgroundColor="#fff" 
              />
        }
        >
        {
            message==null?<View /> :_renderView()
        }
        <View style={{paddingLeft:15,paddingRight:15}}>
        {
            list.map((item,i)=>{
                return <TouchableHighlight 
                       style={{marginTop:15,marginBottom:15}}
                       underlayColor="rgb(241, 241, 241)"
                       onPress={()=>props.navigation.navigate('Detail',{id:item.id})}
                       >
                    <View key={i} style={styles.item}>
                        <Image source={{uri:item.cover}} style={styles.item_img} />
                        <Text style={styles.item_play}></Text>
                        <View style={styles.item_main}>
                        <Text style={styles.item_name} numberOfLines={1}>{item.title}</Text>
                        <Text style={{fontFamily:'icomoon',lineHeight:35,flex:1}}> {item.viewnum}</Text>
                        </View>
                </View>
                </TouchableHighlight>
                 
            })
        }
        </View>
        </ScrollView>
</View>
}
const metods = (nav,play,num) =>{
    return <View style={styles.met}>
            <View style={styles.met_item}>
                <Text style={styles.met_font}></Text>
                <Text style={styles.small}>{play}</Text>
            </View>
            <Text style={styles.item_none}></Text>
            <Text style={styles.item_none}></Text>
            <View style={styles.met_item}>
               <Text style={styles.met_font}></Text>
               <Text style={styles.small}>{play}</Text>
            </View>
        </View>
}
const styles = StyleSheet.create({
    message:{
        marginBottom:35
    },
    top:{
        width:"100%",
        backgroundColor:'rgb(233, 233, 233)',
        alignItems:'center',
    },
    cover:{
        width:55,
        height:55,
        borderRadius:55,
        marginTop:25
    },
    radio_name:{
        fontSize:16,
        lineHeight:35,
        marginTop:15
    },
    content:{
       width:'100%',
       lineHeight:25,
       fontSize:15,
       paddingLeft:15,
       paddingRight:15,
       marginTop:15,
       textAlign:'center',
       marginBottom:25
    },
    content_icon:{
       fontFamily:'icomoon',
       fontSize:18,
       position:'absolute',
       left:-15
    },
    user:{
        paddingLeft:15,
        paddingRight:15,
        height:55
    },
    avatar:{
        width:50,
        height:50,
        borderRadius:50
    },
    item:{
        flexDirection:'row',
        backgroundColor:'rgb(241, 241, 241)',
        borderTopRightRadius:8,
        borderBottomRightRadius:8
    },
    item_img:{
        width:75,
        height:75,
        marginRight:15,
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8
    },
    item_name:{
        flex:1,
        fontSize:16,
        lineHeight:35,
        paddingRight:8
    },
    item_main:{
        flex:1
    },
    item_play:{
        fontFamily:'icomoon',
        position:'absolute',
        left:22,
        fontSize:42,
        top:15,
        color:'rgb(223, 223, 223)'
    },
    met:{
        flexDirection:'row',
        marginLeft:25,
        marginRight:25,
        marginTop:25,
        borderBottomWidth:1,
        borderBottomColor:'#999',
    },
    met_item:{
        flex:1,
        fontFamily:'icomoon',
        lineHeight:25,
        fontSize:20,
        color:'#555',
    },
    item_none:{
        flex:1,
        fontFamily:'icomoon',
        lineHeight:25,
        fontSize:20,
        color:'#555',
        paddingLeft:10,
        textAlign:'center',
        flexDirection:'row',
        },
    small:{
        fontSize:16,
        lineHeight:35,
        flex:1,
        textAlign:'center'
    },
    met_font:{
        fontFamily:'icomoon',
        fontSize:20,
        lineHeight:25,
        textAlign:'center',
        color:'rgb(93, 92, 92)'
    }
})