import React,{useState,useEffect,useContext} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native'
export default function Search(props){
    const [value,handleValueChange] = useState('');
    const [hot,handleHot] = useState([])
    useEffect(() => {
        fetch('http://bapi.xinli001.com/fm2/hot_tag_list.json/?flag=1&offset=0&rows=200&key=046b6a2a43dc6ff6e770255f57328f89')
        .then(res=>res.json())
        .then(res=>handleHot(res.data))
    },[]);
    const submitValue = ()=>{
        if(value==''){

        }else {
            console.log(1);
            
            props.navigation.navigate('Result',{value:value})
        }
    }
return <View>
     <View style={{width:'100%',position:'relative',paddingTop:20}}>
     <TextInput 
     style={styles.textIpt}
     value={value}
     autoFocus
     placeholder='请输入要搜索的内容'
     onChangeText={text=>handleValueChange(text)}
     onSubmitEditing={()=>submitValue()}
     />
     <Text 
     style={styles.back}
     onPress={()=>props.navigation.goBack()}
     >取消</Text>
     </View>
     <Text style={styles.title}>热门搜索</Text>
    <View style={{marginTop:15,flexDirection:'row',flexWrap:'wrap',paddingLeft:25,paddingRight:25}}>
        {
            hot.map(item=>{
                return <Text 
                key={item.id} style={styles.tag}
                onPress={()=>props.navigation.navigate('Result',{value:item.name})}
                >
                    {item.name}
                </Text>
            })
        }
    </View>
</View>
}

const styles = StyleSheet.create({
    textIpt:{
        backgroundColor:'rgb(240, 240, 240)',
        width:'83%',
        marginLeft:'2%',
        marginTop:8,
        borderRadius:20,
        height:40,
        paddingLeft:25,
        color:'#888',
        fontSize:16
    },
    back:{
        position:'absolute',
        top:38,
        right:15,
        fontSize:18
    },
    title:{
        lineHeight:35,
        paddingLeft:15,
        fontSize:16,
        marginTop:12
    },
    tag:{
        paddingLeft:10,
        paddingRight:10,
        lineHeight:30,
        backgroundColor:'rgb(241, 241, 241)',
        borderRadius:5,
        marginRight:15,
        marginBottom:12
    }
})