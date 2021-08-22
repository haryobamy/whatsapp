import React from 'react';
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Feather as Icon} from '@expo/vector-icons';

interface FloatingButtonProps {
    icon:string;
    size:number;
    color:string;
    
}

const FloatingButton = ({icon,onPress,size,color}: FloatingButtonProps) => {
    return (
            <View style={{
                flex: 1,
            }}>
             <TouchableOpacity
             style={{
                 borderColor:" rgba(0, 0 ,0 ,0.2)",
                 alignItems: 'center',
                 justifyContent: 'center',
                 width:70,
                 height: 70,
                 position: "absolute",
                 bottom:50,
                 right: 15,
                 backgroundColor:"#25d366",
                 borderRadius: 35,
             }}
             onPress={() => console.log("add more chats")}
             >
             <Icon name={icon}  color={color}  size={size}/>
             </TouchableOpacity>
             </View>
    )
}

FloatingButton.defaultProps = {
    size:30
}

export default FloatingButton
