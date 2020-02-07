import React,{useContext} from 'react'
import MyContext from '../../context/context'
import {
     View,
     Text,
     StyleSheet,
     TouchableOpacity
} from 'react-native'
export default function Category(props){
    const context = useContext(MyContext)
    const cats = [
        {icon:'',text:'自我成长'},
        {icon:'',text:'情绪管理'},
        {icon:'',text:'人际沟通'},
        {icon:'',text:'恋爱婚姻'},
        {icon:'',text:'职场管理'},
        {icon:'',text:'亲子家庭'},
        {icon:'',text:'心理科普'},
        {icon:'',text:'课程讲座'},
    ]

    const navPage = (id,msg) =>{
        context.nav._navigation.navigate('CatDetail',{id:id,msg:msg})    
    }
return <View style={styles.box}>
       {
           cats.map((item,i)=>{
            return <TouchableOpacity 
                     key={i} 
                     style={styles.item}
                     onPress={()=>navPage(i+1,item.text)}
                     >
                <View>
               <Text style={styles.font}>{item.icon}</Text>
               <Text style={styles.text}>{item.text}</Text>
            </View>
            </TouchableOpacity>
                
           })
       }
</View>
}

const styles = StyleSheet.create({
    box:{
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:12,
    }, 
    font:{
        fontFamily:'icomoon',
        fontSize:26,
        textAlign:'center',
        color:'#999',
        lineHeight:45
    },
    text:{
        textAlign:'center',
        lineHeight:25,
        fontSize:15,
        color:"#999"
    },
    item: {
        width: '25%',
        height: 65,
        marginBottom: 15
    }
})