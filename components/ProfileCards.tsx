import  React from 'react';
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Ionicons as Icon, MaterialIcons} from '@expo/vector-icons';
import {PRIMARY_DARK, WHITE, PRIMARY, SECONDARY_LIGHT} from '../constants/themes'
import {userListProps} from "../services/interface";  


interface ProfileCardsProps {
    item:userListProps,
    call?:boolean,
}

const ProfileCards = ({item,call}: ProfileCardsProps) => {
    return (
         <View style={{flexDirection: 'row',
     alignItems:"center" , 
     justifyContent: 'space-between',
     width: wWidth - 20,
     marginVertical: 5,
     marginHorizontal: 10,
     borderBottomWidth: StyleSheet.hairlineWidth,
     paddingBottom: 10,
     borderColor: "gray",
     }}>
    {/* imgae and message */}
    <View style={{flexDirection: 'row', alignItems: 'center',}}>
    <View style={{width:60,height:60,borderRadius:30,backgroundColor:"gray",}}>
    </View>
    
    <View style={{paddingHorizontal: 10,}}>
     <Text> {item.name} </Text>
     <View style={{flexDirection: 'row', alignItems: 'center', }}>
     {call && <MaterialIcons name="call-made" size={15} color={SECONDARY_LIGHT}/>}
    <Text style={{color:"grey"}}> {item.lastMessage} </Text>
    </View>
    </View>
    </View>
    {/* last seen */}
    <View>
     {call? (<Icon name='md-call' size={26} color={PRIMARY} /> ):
   ( <Text style={{color:"grey"}}> {item.lastSeen} </Text>)}
    </View>

    </View>
    )
}

export default ProfileCards
