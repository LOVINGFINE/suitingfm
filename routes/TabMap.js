
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import MapTopBar from './MapTopBar'
import Recommend from '../pages/recommend/Recommend'
import Radio from '../pages/Radio'
const TabMap = createMaterialTopTabNavigator({
      Recommend:Recommend,
      Radio:Radio
},{
    tabBarComponent:MapTopBar,
    swipeEnabled:true,
    initialRouteName:'Recommend',
});

export default createAppContainer(TabMap);