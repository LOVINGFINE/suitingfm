/**
 * @format
 * @flow
 */

 import React,{Component} from 'react'
 import MyContext from './context/context'
 import store from './context/store'
 import actions from './context/actions'
 const {Provider} = MyContext
 import {
     View,
     Text,
     StatusBar
 } from 'react-native'
 import PageRouteMap from './routes/PageRouteMap'
 import PlayBox from './components/PlayBox'
 import Video from 'react-native-video'
 export default class App extends Component {
               constructor(props){
                   super(props)
                   this.state = {
                        ...store,
                        ...actions(this)
                        //全局导航
                   }
    }
     // static propTypes = {}
     render() {
           return <Provider value={this.state}>
                    <View style={{flex:1}}>
                    <StatusBar translucent={true} backgroundColor="rgba(255, 255, 255, 0)" barStyle="dark-content" />
                    <PageRouteMap ref={(nav)=>this.state.nav = nav} />
                    {this.state.show?<PlayBox map={this.state.nav} />:null}
                    <Video 
                    ref={(Video)=>this.Video=Video}
                    source={{uri: this.state.message.url}} 
                    paused={this.state.play}
                    // onProgress={this.state.upDateTime}
                    onLoad={this.state.setDuration}
                    onEnd={this.changPlay}                              
                    />
               </View>
           </Provider> 
           
     }  
     changPlay = ()=>{
         
         if(this.state.loop==0){
             // 列表
            this.Video.seek(0)
         }else if(this.state.loop==1){
            // 单曲循环
         }else if(this.state.loop==2){
             let n = parseInt(Math.random()*this.playList.length)
         }
     }
 }
