import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'El nombre de usuario debe tener al menos 5 caracteres')
    .max(10, 'El nombre de usuario no debe exceder los 10 caracteres')
    .required('Nombre de usuario es requerido'),
  password: Yup.string()
    .min(5, 'La contraseña debe tener al menos 5 caracteres')
    .matches(/(?=.*[a-z])/, 'Debe contener al menos una letra minúscula')
    .matches(/(?=.*[A-Z])/, 'Debe contener al menos una letra mayúscula')
    .matches(/(?=.*\W)/, 'Debe contener al menos un símbolo')
    .required('Contraseña es requerida'),
});

const LoginScreen = ({ navigation }) => {
  const handleLogin = (values) => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={moderateScale(30)} color="#900" />
      </TouchableOpacity>
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/topVector.png")}
          style={styles.topImage}
        />
      </View>
      <View>
        <Text style={styles.signInText}>Inicie Sesión</Text>
      </View>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <View style={styles.inputContainer}>
              <Icon name="user" size={moderateScale(30)} color="#900" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Nombre de usuario"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
            <View style={styles.inputContainer}>
              <Icon name="lock" size={moderateScale(30)} color="#900" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <Text style={styles.forgotPassword}>Olvidó su Contraseña?</Text>
            <View style={styles.signInButtonContainer}>
              <Text style={styles.singIn}>Iniciar Sesión</Text>
              <TouchableOpacity onPress={handleSubmit}>
                <Icon name="arrow-right" size={moderateScale(30)} color="black" style={styles.singInButton} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <Text style={styles.footerText}>No tiene cuenta?
        <Text
          style={{ textDecorationLine: "underline" }}
          onPress={() => navigation.navigate('RegisterScreen')}
        > Regístrese</Text>
      </Text>
      <View>
        <Image
          source={require("../../assets/vector.png")}
          style={styles.belowImage}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: moderateScale(40),
    left: moderateScale(20),
    zIndex: 1,
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
    marginVertical: verticalScale(25),
  },
  topImageContainer: {

  },
  topImage: {
    width: "100%",
    height: moderateScale(130),
  },
  belowImage: {
    height: verticalScale(125),
    width: moderateScale(115),
  },
  signInText: {
    textAlign: "center",
    fontSize: moderateScale(30),
    color: "#262626",
    fontWeight: "500",
    marginTop: moderateScale(30)
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: moderateScale(20),
    marginHorizontal: moderateScale(40),
    elevation: moderateScale(10),
    marginVertical: moderateScale(20),
    alignItems: "center",
    height: moderateScale(40)
  },
  inputIcon: {
    marginLeft: moderateScale(15),
    fontSize: moderateScale(20),
    color: "#9A9A9A",
    marginRight: moderateScale(5)
  },
  textInput: {
    flex: 1
  },
  forgotPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "90%",
    fontSize: moderateScale(15)
  },
  signInButtonContainer: {
    flexDirection: "row",
    marginTop: moderateScale(120),
    width: "90%",
    justifyContent: "flex-end"
  },
  singIn: {
    color: "#262626",
    fontSize: moderateScale(20),
    fontWeight: "bold"
  },
  singInButton: {
    height: moderateScale(34),
    width: moderateScale(56),
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: moderateScale(15),
    marginTop: moderateScale(140)
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: moderateScale(10),
  }
});
