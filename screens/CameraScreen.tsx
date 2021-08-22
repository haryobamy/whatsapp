import React from 'react'
import { View,Text,TouchableOpacity,StyleSheet } from 'react-native'
import {combineTabWithStackProps} from "../../navigation/Tabs";
import { Camera } from "expo-camera";

interface CameraScreenProps {
    navigation:combineTabWithStackProps<"camera">
}

const CameraScreen = ({navigation}: CameraScreenProps) => {
     const [hasPermission, setHasPermission] = React.useState<boolean | null>(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

    React.useLayoutEffect(() => {
        navigation.setOptions({
      headerShown: false,
      headerStyle: {
        display: "none",
      },
    });
    }, [])


     React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    return (
        <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
            {/* <Icon name='' /> */}
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",

  },
});

export default CameraScreen
