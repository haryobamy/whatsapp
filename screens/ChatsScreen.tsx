import React from 'react'
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
import {userList} from "../services/data"
import {userListProps} from "../services/interface";
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Feather as Icon} from '@expo/vector-icons';
import ProfileCards from '../components/ProfileCards'
import FloatingButton from '../components/FloatingButton'

interface chatsScreenProps {
   
}
const PRIMARY  ="#128C7E";
const PRIMARY_DARK = "#075E54";
const SECONDARY_LIGHT = "25D366";
const SECONDARY_BLUE= "34B7F1";

 const ChatsScreen = ({}: ChatsScreenProps) => {
     const renderItem = ({item}: {item:userListProps}) => {
return(
   <ProfileCards {...{item}} />
)
     }
    return (
        <View style={{flex:1, backgroundColor:"#ffffff",}}>
            <FlatList
            data= {userList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
             />
             <View>
            <FloatingButton icon='message-square' size={30} color="white"/>
             </View>
        </View>
    )
}

export default ChatsScreen;
