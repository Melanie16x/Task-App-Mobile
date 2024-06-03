import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale, verticalScale } from 'react-native-size-matters';

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloText}>Hola</Text>
      </View>
      <View>
        <Text style={styles.signInText}>¡Organiza tu día, alcanza tus metas!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.textButton}
            onPress={() => navigation.navigate('LoginScreen')}
          >Inicia Sesión</Text>
          <Text style={styles.textButton}
            onPress={() => navigation.navigate('RegisterScreen')}
          >Registrate</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/vector.png")}
          style={styles.belowImage}
        />
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: "space-around",
    width: '80%',
  },
  textButton: {
    backgroundColor: "#945DAD",
    color: '#FFFFFF',
    fontSize: moderateScale(16),
    textAlign: 'center',
    padding: moderateScale(10),
    marginVertical: verticalScale(218),
  },
  topImage: {
    width: "100%",
    height: moderateScale(130),
  },
  belowImage: {
    height: verticalScale(113),
    width: moderateScale(115),
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  helloText: {
    textAlign: "center",
    fontSize: moderateScale(70),
    fontWeight: "500",
    color: "#262626",
  },
  signInText: {
    textAlign: "center",
    fontSize: moderateScale(18),
    color: "#262626"
  },
});
