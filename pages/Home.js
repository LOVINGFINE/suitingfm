import React,{useState} from 'react'
import {
     ScrollView,
     StyleSheet,
     Text,
     View
} from 'react-native'
import TabMap from '../routes/TabMap'
export default function Home(props){
    const [isSelect,setSelect] = useState(true)
    const handleTab = ()=>{
        if(isSelect){
            setSelect(false)
        }else{
            setSelect(true)
        }
    }
return <View style={styles.box}>
        <TabMap />
</View>
}

const styles = StyleSheet.create({
    box:{
        flex:1,
    },
    
})