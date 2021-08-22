import React from 'react';
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Feather as Icon,Entypo} from '@expo/vector-icons';
import {PRIMARY_DARK, WHITE, PRIMARY, SECONDARY_LIGHT} from '../constants/themes'
import ProfileCards from '../components/ProfileCards'
import FloatingButton from '../components/FloatingButton'

interface CallsProps {
    
}

const Calls = ({}: CallsProps) => {
    const item = {
        id:1,
        name:"Badmus",
        lastMessage:"yesterday, 11:29 am",
        profilePic:"",
        lastSeen: "02:26am"
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: WHITE,
        }}>
            <ProfileCards {...{item}} call={true} />
            <FloatingButton icon="phone-call" color="white"  size={30}/>
        </View>
    )
}

export default Calls
