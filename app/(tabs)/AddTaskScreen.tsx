import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { moderateScale } from 'react-native-size-matters';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('El título de la tarea es requerido'),
  description: Yup.string().required('La descripción de la tarea es requerida'),
});

const AddTaskScreen = ({ navigation }) => {

  const handleSave = (values) => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={moderateScale(30)} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Agregar Tarea</Text>
      <Formik
        initialValues={{ title: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={values.title}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                placeholder="Título de la tarea"
              />
              {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.textInput, { height: moderateScale(100) }]}
                value={values.description}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                placeholder="Descripción de la tarea"
                multiline
              />
              {touched.description && errors.description && <Text style={styles.errorText}>{errors.description}</Text>}
            </View>
            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
              <Text style={styles.addButtonText}>Agregar Tarea</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTaskScreen;

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
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    backgroundColor: '#FFF',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
    elevation: moderateScale(3),
    width: '100%',
  },
  textInput: {
    fontSize: moderateScale(18),
  },
  addButton: {
    backgroundColor: '#945DAD',
    borderRadius: moderateScale(10),
    padding: moderateScale(15),
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: moderateScale(14),
    marginTop: moderateScale(5),
  },
});
