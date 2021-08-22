import React from 'react'
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Feather as Icon} from '@expo/vector-icons';
import {PRIMARY_DARK, WHITE, PRIMARY, SECONDARY_LIGHT} from '../constants/themes'

interface ProfileCardProps {
    title:string,
    subTitle:string,
    create:boolean
}

const ProfileCard = ({title,subTitle,create}: ProfileCardProps) => {
    return (
         
            <View style={{
                marginVertical: 10,
                marginHorizontal:20,
                flexDirection: 'row',
                alignItems: 'center',
            }}>
            {/* status image */}
             <View style={{width:60,height:60,borderRadius:30,backgroundColor:"gray",}}>
    </View>
    {create &&   <View style={{backgroundColor: SECONDARY_LIGHT, width:20,height: 20,
    borderRadius: 10,
    position: "absolute",
    left:40,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'center',
    }}>
    <Icon name='plus' size={20} color="black" />
    </View> }
     
    
        {/* status words */}
            <View style={{
                paddingHorizontal:15,
            }}>
            <Text style={{
                fontSize:16,
            }}>{title}</Text>
            <Text style={{
                color:"gray",
            }}>{subTitle}</Text>
            </View>
            </View>
    )
}

export default ProfileCard;
