import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

interface HomeScreenProps {
    
}

const HomeScreen = ({}: HomeScreenProps) => {
    return (
        <View style={styles.homeRoot}>
            <Text>HomeScreen</Text>
        </View>
    )
}



const styles = StyleSheet.create({
  homeRoot: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
