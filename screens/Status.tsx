import React from 'react'
import { View,Text,TouchableOpacity,FlatList,Dimensions,StyleSheet } from 'react-native';
const {width:wWidth, height: wHeight} = Dimensions.get("window");
import {Feather as Icon,Entypo} from '@expo/vector-icons';
import {PRIMARY_DARK, WHITE, PRIMARY, SECONDARY_LIGHT} from '../constants/themes'
import ProfileCard from '../components/ProfileCard';
import {useNavigation} from "@react-navigation/native";
interface StatusProps {
    
}

const Status = ({}: StatusProps) => {

    const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff",
        }}>
      
     <ProfileCard  create={true} title='My Status' subTitle='Tap to add status update'/>
     <View style={{
         backgroundColor: "lightgray",
         height: 40,
         justifyContent: 'center',
     }}>
     <View style={{
         marginHorizontal:15,
     }}>
     <Text style={{
         fontSize:20,
         color:"gray"
     }}>Recent Update</Text>
     </View>
    
     </View>
      <ProfileCard
      title="Badmus"
      subTitle="just now"
      />
      <ProfileCard
      title="Kamal"
      subTitle="34min ago"
      />
      <ProfileCard
      title="iya ayo"
      subTitle="2h ago"
      />
      <ProfileCard
      title="Olosho mi"
      subTitle="8h ago"
      />
      <ProfileCard
      title="my love"
      subTitle="18h ago"
      />
      <View style={{
          position: "absolute",
          bottom:40,
          right:20,
          alignItems: 'center',
      }}>
      {/* pic status */}
      <TouchableOpacity style={{backgroundColor: SECONDARY_LIGHT, width:50,
      height: 50,borderRadius: 25, alignItems: 'center',
      justifyContent: 'center',elevation:5,marginVertical: 10,
      }}
      onPress={() => console.log("navigate to camera screen")}
      >
    <Entypo name="camera" size={26} color={WHITE} />
      </TouchableOpacity>
      {/* text status */}
      <TouchableOpacity style={{backgroundColor: "lightgray", width:40,
      height: 40,borderRadius: 20, alignItems: 'center',
      justifyContent: 'center',elevation:5,
      }}
      onPress={() => console.log("upload text for status")}>
        <Entypo name="edit" size={20} color={PRIMARY} />
      </TouchableOpacity>
      </View>
        </View>
    )
}

export default Status
