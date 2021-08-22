import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {HomeScreen} from '../screens'
import {View,Text, TouchableOpacity, StatusBar} from 'react-native';
import {Feather as Icon} from '@expo/vector-icons';
import Tabs from "../navigation/Tabs";
import {PRIMARY_DARK, WHITE, PRIMARY} from '../constants/themes'

interface MainProps {
    
}


const Stack = createStackNavigator();
// const Tab = createMaterialTopTabNavigator()
const Main = ({}: MainProps) => {
    return (
        <View style={{flex:1,}}>
        <StatusBar backgroundColor={PRIMARY_DARK} style="light " />
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={({navigation, route}) => ({
            title:"WhatsApp",
            headerTintColor:"#fff",
            headerStyle:{
                elevation:0,
                backgroundColor:PRIMARY,
                
            },
         
            headerRight:()=>{
                return(
                 <View style={{
                     flexDirection: 'row',
                      alignItems:"center"}}>
                      <TouchableOpacity style={{
                          marginHorizontal: 5,
                      }}
                      onPress={() => console.log("search")}
                      >
                <Icon name="search" size={26} color="#fff"/>
                </TouchableOpacity >
                <TouchableOpacity style={{
                           marginHorizontal: 5,
                      }}
                      onPress={() => console.log("more menu")}
                      >
                <Icon name="more-vertical" size={26} color="#fff"/>
                </TouchableOpacity>
                </View>   
                )
                
            }
        })} name="home" component={Tabs }  />
        
        </Stack.Navigator>
            
        </NavigationContainer>
        </View>
    )
}

export default Main
