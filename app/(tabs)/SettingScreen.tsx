import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale } from 'react-native-size-matters';

const SettingScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={moderateScale(30)} color="black" />
      </TouchableOpacity>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cambiar Tema</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cambiar Idioma</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Habilitar Notificaciones</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.optionText, styles.logout]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
  },
  backButton: {
    position: 'absolute',
    top: moderateScale(40),
    left: moderateScale(20),
    zIndex: 1,
  },
  optionContainer: {
    marginBottom: moderateScale(20),
    width: '100%',
  },
  option: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    elevation: moderateScale(3),
  },
  optionText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logout: {
    color: 'red',
  },
});
