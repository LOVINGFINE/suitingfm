import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../pages/Home'
// 主页
import Detail from '../pages/detail/Detail'
// 播放详情页
import CatDetail from '../pages/category/CatDetail'
// 分类详情页
import DJdetail from '../pages/detail/DJdetail'
// 电台详情页
import Admin from '../pages/Admin'
// 个人主页
import Search from '../pages/search/Search'
// 搜索入口页
import Result from '../pages/search/Result'
// 搜索结果
import Login from '../pages/admin/Login'
// 登录入口
import Select from '../pages/admin/Select'
// 登录选择入口
import Password from '../pages/admin/Password'

import Resgister from '../pages/admin/Resgister'
const AppNav = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            header:null
        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:({navigation})=>({
            header:null
        })
    },
    CatDetail:{
        screen:CatDetail,
        navigationOptions:{
            header:null
        }
    },
    Search:{
        screen:Search,
        navigationOptions:{
            header:null
        }
    },
    Result:{
        screen:Result,
        navigationOptions:{
            header:null
        }
    },
    DJdetail:{
        screen:DJdetail,
        navigationOptions:{
            header:null
        }
    },
    Admin:{
        screen:Admin,
        navigationOptions:{
            header:null
        }
    },
    Login:{
        screen:Login,
        navigationOptions:{
            header:null
        }
    },
    Select:{
        screen:Select,
        navigationOptions:{
            header:null
        }
    },
    Password:{
        screen:Password,
        navigationOptions:{
            header:null
        }
    },
    Resgister:{
        screen:Resgister,
        navigationOptions:{
            header:null
        }
    }
},{
    initialRouteName:'Home'
})

export default createAppContainer(AppNav);