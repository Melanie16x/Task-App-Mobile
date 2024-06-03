import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { moderateScale } from 'react-native-size-matters';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'El nombre de usuario debe tener al menos 5 caracteres')
        .max(10, 'El nombre de usuario no debe exceder los 10 caracteres')
        .required('Nombre de usuario es requerido'),
    email: Yup.string()
        .email('Correo no es válido')
        .required('Correo es requerido'),
    password: Yup.string()
        .min(5, 'La contraseña debe tener al menos 5 caracteres')
        .matches(/(?=.*[a-z])/, 'Debe contener al menos una letra minúscula')
        .matches(/(?=.*[A-Z])/, 'Debe contener al menos una letra mayúscula')
        .matches(/(?=.*\W)/, 'Debe contener al menos un símbolo')
        .required('Contraseña es requerida'),
});

const RegisterScreen = ({ navigation }) => {
    const handleRegister = (values) => {
        navigation.navigate('LoginScreen');
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
                <Text style={styles.registerText}>Regístrese</Text>
            </View>

            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
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
                            <Icon name="envelope" size={moderateScale(30)} color="#900" style={styles.inputIcon} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Correo"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

                        <View style={styles.inputContainer}>
                            <Icon name="lock" size={moderateScale(30)} color="#900" style={styles.inputIcon} />
                            <TextInput
                                style={styles.textInput}
                                placeholder="Contraseña"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry
                            />
                        </View>
                        {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <View style={styles.registerButtonContainer}>
                            <Text style={styles.register}>Crear</Text>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Icon name="arrow-right" size={moderateScale(30)} color="black" style={styles.registerButton} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </Formik>

            <Text style={styles.footerText}>Ya tiene una cuenta?
                <Text
                    style={{ textDecorationLine: "underline" }}
                    onPress={() => navigation.navigate('LoginScreen')}
                > Inicia Sesión</Text>
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

export default RegisterScreen;

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
        marginVertical: moderateScale(258),
    },
    topImage: {
        width: "100%",
        height: moderateScale(130),
    },
    belowImage: {
        height: moderateScale(126),
        width: moderateScale(115),
    },
    registerText: {
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
    registerButtonContainer: {
        flexDirection: "row",
        marginTop: moderateScale(44),
        width: "90%",
        justifyContent: "flex-end"
    },
    register: {
        color: "#262626",
        fontSize: moderateScale(20),
        fontWeight: "bold"
    },
    registerButton: {
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
