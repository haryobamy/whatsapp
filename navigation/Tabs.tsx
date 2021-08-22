import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {ChatsScreen, Status, Calls,CameraScreen} from "../screens"
import {PRIMARY} from '../constants/themes'
import {Feather as Icon} from '@expo/vector-icons';

interface TabsProps {
    
}

export type WhatsappTabParamList = {
  chats: undefined;
  status: undefined;
  calls: undefined;
  camera: undefined;
};

export type WhatsAppStackParamList = {
  home: undefined;
};

export type combineTabWithStackProps<
  T extends keyof WhatsappTabParamList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<WhatsappTabParamList, T>,
  StackNavigationProp<WhatsAppStackParamList>
>;

const Tab = createMaterialTopTabNavigator();

const Tabs = ({}: TabsProps) => {
    return (
        <Tab.Navigator 
       tabBarOptions={{
           
           labelStyles:{fontSize:16, fontWeight:"bold",},
        //    tabStyles:{width:100},
           activeTintColor:"#ffffff",
           indicatorStyle:{
               backgroundColor: '#fff',
           },
         tabStyle: {
          justifyContent: "flex-start",
          alignItems: "flex-start",
        },
           style:{
               backgroundColor: PRIMARY,
               color:"#fff"
           }
       }}
       initialRouteName="Chats"
        >
            <Tab.Screen name="camera" options={{
                tabBarLabel:() => (
                         <View>
                         <Icon name="camera" size={25} color="white" />
                         </View>  
                         )
            }} component={CameraScreen} />
            <Tab.Screen name="Chats" component={ChatsScreen} />
            <Tab.Screen name="Status" component={Status} />
            <Tab.Screen name="Calls" component={Calls} />
        </Tab.Navigator>
    )
}

export default Tabs
